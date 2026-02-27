const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`[Backend] Received request: ${req.method} ${req.url}`);
  next();
});

/* ===============================
   CONFIG
=================================*/

const PORT = 5001;
const JWT_SECRET = "supersecretkey";
const MONGO_URI = "mongodb://127.0.0.1:27017/ecommerceDB";

/* ===============================
   CONNECT MONGODB
=================================*/

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

/* ===============================
   SCHEMAS
=================================*/

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  image: String,
}, { timestamps: true });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalAmount: Number,
  payment: {
    transactionId: String,
    status: String
  }
}, { timestamps: true });

/* ===============================
   MODELS
=================================*/

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);

/* ===============================
   MIDDLEWARE
=================================*/

function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

function adminOnly(req, res, next) {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });
  next();
}

/* ===============================
   AUTH ROUTES
=================================*/

// Register
app.post("/api/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role: role || "user"
  });

  res.json({ message: "Registered successfully" });
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

/* ===============================
   PRODUCT ROUTES
=================================*/

// Create Product (Admin)
app.post("/api/products", auth, adminOnly, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Get All Products
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get Single Product
app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Update Product (Admin)
app.put("/api/products/:id", auth, adminOnly, async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
});

// Delete Product (Admin)
app.delete("/api/products/:id", auth, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

/* ===============================
   FAKE PAYMENT
=================================*/

function fakePayment() {
  return {
    transactionId: "TXN" + Math.floor(Math.random() * 1000000),
    status: "success"
  };
}

/* ===============================
   ORDER ROUTES
=================================*/

// Create Order (Checkout)
app.post("/api/checkout", auth, async (req, res) => {
  const { items } = req.body;
  // items: [{ productId, quantity }]

  let total = 0;

  for (let item of items) {
    const product = await Product.findById(item.productId);
    if (!product) return res.status(400).json({ message: "Invalid product" });
    total += product.price * item.quantity;
  }

  const payment = fakePayment();

  const order = await Order.create({
    user: req.user.id,
    items: items.map(i => ({
      product: i.productId,
      quantity: i.quantity
    })),
    totalAmount: total,
    payment
  });

  res.json({
    message: "Payment successful & Order created",
    order
  });
});

// Get My Orders
app.get("/api/orders", auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .populate("items.product");
  res.json(orders);
});

/* ===============================
   ADMIN DASHBOARD
=================================*/

app.get("/api/admin/dashboard", auth, adminOnly, async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalProducts = await Product.countDocuments();
  const totalOrders = await Order.countDocuments();
  const revenueData = await Order.aggregate([
    { $group: { _id: null, total: { $sum: "$totalAmount" } } }
  ]);

  res.json({
    totalUsers,
    totalProducts,
    totalOrders,
    totalRevenue: revenueData[0]?.total || 0
  });
});

/* ===============================
   START SERVER
=================================*/

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});