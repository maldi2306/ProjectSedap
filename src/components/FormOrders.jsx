import { useState } from "react";

export default function FormOrders({ onAddOrder, onCancel }) {
  const [order, setOrder] = useState({
    id: "",
    customerName: "",
    status: "",
    totalPrice: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrder(order);
    setOrder({ id: "", customerName: "", status: "", totalPrice: "", orderDate: "" });
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Add New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text" name="id" value={order.id} onChange={handleChange}
          placeholder="Order ID" className="border p-2 w-full" required
        />
        <input
          type="text" name="customerName" value={order.customerName} onChange={handleChange}
          placeholder="Customer Name" className="border p-2 w-full" required
        />
        <select
          name="status" value={order.status} onChange={handleChange}
          className="border p-2 w-full" required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="number" name="totalPrice" value={order.totalPrice} onChange={handleChange}
          placeholder="Total Price" className="border p-2 w-full" required
        />
        <input
          type="date" name="orderDate" value={order.orderDate} onChange={handleChange}
          className="border p-2 w-full" required
        />
        <div className="flex space-x-2">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
);
}
