import { useState } from "react";
import PageHeader from "../components/pageHeader";
import FormOrders from "../components/FormOrders";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: "O001", customerName: "Alice Johnson", status: "Pending", totalPrice: 250000, orderDate: "2025-04-01" },
    { id: "O002", customerName: "Bob Smith", status: "Completed", totalPrice: 150000, orderDate: "2025-04-02" },
    { id: "O003", customerName: "Charlie Brown", status: "Cancelled", totalPrice: 300000, orderDate: "2025-04-03" },
    { id: "O004", customerName: "David Wilson", status: "Pending", totalPrice: 120000, orderDate: "2025-04-04" },
    { id: "O005", customerName: "Eve Davis", status: "Completed", totalPrice: 180000, orderDate: "2025-04-05" },
    { id: "O006", customerName: "Frank Miller", status: "Pending", totalPrice: 400000, orderDate: "2025-04-06" },
    { id: "O007", customerName: "Grace Lee", status: "Completed", totalPrice: 50000, orderDate: "2025-04-07" },
    { id: "O008", customerName: "Hank Moore", status: "Cancelled", totalPrice: 220000, orderDate: "2025-04-08" },
    { id: "O009", customerName: "Ivy Taylor", status: "Pending", totalPrice: 140000, orderDate: "2025-04-09" },
    { id: "O010", customerName: "Jack Anderson", status: "Completed", totalPrice: 300000, orderDate: "2025-04-10" },
    { id: "O011", customerName: "Karen Thomas", status: "Cancelled", totalPrice: 60000, orderDate: "2025-04-11" },
    { id: "O012", customerName: "Leo Martin", status: "Pending", totalPrice: 130000, orderDate: "2025-04-12" },
    { id: "O013", customerName: "Mona Garcia", status: "Completed", totalPrice: 200000, orderDate: "2025-04-13" },
    { id: "O014", customerName: "Nick Martinez", status: "Cancelled", totalPrice: 80000, orderDate: "2025-04-14" },
    { id: "O015", customerName: "Olivia Robinson", status: "Pending", totalPrice: 175000, orderDate: "2025-04-15" },
    { id: "O016", customerName: "Paul Clark", status: "Completed", totalPrice: 190000, orderDate: "2025-04-16" },
    { id: "O017", customerName: "Queen Hall", status: "Cancelled", totalPrice: 95000, orderDate: "2025-04-17" },
    { id: "O018", customerName: "Rick Allen", status: "Pending", totalPrice: 270000, orderDate: "2025-04-18" },
    { id: "O019", customerName: "Sophia Young", status: "Completed", totalPrice: 110000, orderDate: "2025-04-19" },
    { id: "O020", customerName: "Tom Hernandez", status: "Cancelled", totalPrice: 85000, orderDate: "2025-04-20" },
    { id: "O021", customerName: "Ursula King", status: "Pending", totalPrice: 300000, orderDate: "2025-04-21" },
    { id: "O022", customerName: "Victor Wright", status: "Completed", totalPrice: 260000, orderDate: "2025-04-22" },
    { id: "O023", customerName: "Wendy Lopez", status: "Cancelled", totalPrice: 240000, orderDate: "2025-04-23" },
    { id: "O024", customerName: "Xavier Hill", status: "Pending", totalPrice: 130000, orderDate: "2025-04-24" },
    { id: "O025", customerName: "Yvonne Scott", status: "Completed", totalPrice: 120000, orderDate: "2025-04-25" },
    { id: "O026", customerName: "Zack Green", status: "Cancelled", totalPrice: 70000, orderDate: "2025-04-26" },
    { id: "O027", customerName: "Ava Adams", status: "Pending", totalPrice: 180000, orderDate: "2025-04-27" },
    { id: "O028", customerName: "Ben Nelson", status: "Completed", totalPrice: 210000, orderDate: "2025-04-28" },
    { id: "O029", customerName: "Cindy Carter", status: "Cancelled", totalPrice: 90000, orderDate: "2025-04-29" },
    { id: "O030", customerName: "Dylan Mitchell", status: "Pending", totalPrice: 195000, orderDate: "2025-04-30" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    setShowForm(false);
  };

  return (
    <div className="p-8">
      <PageHeader
        title="Orders"
        breadcrumb="Orders"
        setShowOrderForm={setShowForm}
      />
      {showForm && <FormOrders onAddOrder={handleAddOrder} onCancel={() => setShowForm(false)} />}
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Total Price</th>
            <th className="py-2 px-4 border-b">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="text-center hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{o.id}</td>
              <td className="py-2 px-4 border-b">{o.customerName}</td>
              <td className="py-2 px-4 border-b">{o.status}</td>
              <td className="py-2 px-4 border-b">${o.totalPrice}</td>
              <td className="py-2 px-4 border-b">{o.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
}
