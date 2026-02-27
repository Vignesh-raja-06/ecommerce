import React from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart, onCheckout, onShopNow }) => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div className="page cart-page">
                <header className="page-header">
                    <h1>Your <span className="gradient-text">Cart</span></h1>
                </header>
                <div style={{ textAlign: 'center', padding: '50px' }} className="empty-cart-state">
                    <h2 style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Your cart is empty.</h2>
                    <button className="cta-button" onClick={onShopNow}>Start Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page cart-page">
            <header className="page-header">
                <h1>Your <span className="gradient-text">Cart</span></h1>
            </header>

            <div className="cart-items-container">
                {cart.map(item => (
                    <div key={item._id || item.id} className="cart-item glass-card">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <p className="category">{item.category || 'Product'}</p>
                            <span className="cart-item-price">Rs. {Number(item.price).toLocaleString()}</span>
                        </div>
                        <div className="cart-controls">
                            <button className="qty-btn" onClick={() => updateQuantity(item._id || item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button className="qty-btn" onClick={() => updateQuantity(item._id || item.id, 1)}>+</button>
                            <button className="remove-btn" onClick={() => removeFromCart(item._id || item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="cart-total">
                    Total: <span className="gradient-text">Rs. {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <button className="cta-button" onClick={onCheckout}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
