import React from 'react';

 export const CartPage = () => {
    const cartItems = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
    ];

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <h2>Total: ${total}</h2>
        </div>
    );
};

