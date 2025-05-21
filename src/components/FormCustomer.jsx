import { useState } from "react";

export default function FormCustomer({ onAddCustomer, onCancel }) {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    loyalty: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer(customer);
    setCustomer({ id: "", name: "", email: "", phone: "", loyalty: "" });
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text" name="id" value={customer.id} onChange={handleChange}
          placeholder="Customer ID" className="border p-2 w-full" required
        />
        <input
          type="text" name="name" value={customer.name} onChange={handleChange}
          placeholder="Customer Name" className="border p-2 w-full" required
        />
        <input
          type="email" name="email" value={customer.email} onChange={handleChange}
          placeholder="Email" className="border p-2 w-full" required
        />
        <input
          type="text" name="phone" value={customer.phone} onChange={handleChange}
          placeholder="Phone" className="border p-2 w-full" required
        />
        <select
          name="loyalty" value={customer.loyalty} onChange={handleChange}
          className="border p-2 w-full" required
        >
          <option value="">Select Loyalty</option>
          <option value="Bronze">Bronze</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
        </select>
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
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
