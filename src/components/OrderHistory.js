import React from 'react';

function OrderHistory({ orders }) {
  return (
    <div>
      <h1>Order History</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  );
}

export default OrderHistory;
