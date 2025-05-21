import { useState } from "react";
import PageHeader from "../components/pageHeader";
import FormCustomer from "../components/FormCustomer";

export default function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: "C001",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "0812345671",
      loyalty: "Gold",
    },
    {
      id: "C002",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "0812345672",
      loyalty: "Silver",
    },
    {
      id: "C003",
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "0812345673",
      loyalty: "Bronze",
    },
    {
      id: "C004",
      name: "David Wilson",
      email: "david@example.com",
      phone: "0812345674",
      loyalty: "Silver",
    },
    {
      id: "C005",
      name: "Eve Davis",
      email: "eve@example.com",
      phone: "0812345675",
      loyalty: "Gold",
    },
    {
      id: "C006",
      name: "Frank Miller",
      email: "frank@example.com",
      phone: "0812345676",
      loyalty: "Bronze",
    },
    {
      id: "C007",
      name: "Grace Lee",
      email: "grace@example.com",
      phone: "0812345677",
      loyalty: "Silver",
    },
    {
      id: "C008",
      name: "Hank Moore",
      email: "hank@example.com",
      phone: "0812345678",
      loyalty: "Gold",
    },
    {
      id: "C009",
      name: "Ivy Taylor",
      email: "ivy@example.com",
      phone: "0812345679",
      loyalty: "Bronze",
    },
    {
      id: "C010",
      name: "Jack Anderson",
      email: "jack@example.com",
      phone: "0812345680",
      loyalty: "Silver",
    },
    {
      id: "C011",
      name: "Karen Thomas",
      email: "karen@example.com",
      phone: "0812345681",
      loyalty: "Gold",
    },
    {
      id: "C012",
      name: "Leo Martin",
      email: "leo@example.com",
      phone: "0812345682",
      loyalty: "Silver",
    },
    {
      id: "C013",
      name: "Mona Garcia",
      email: "mona@example.com",
      phone: "0812345683",
      loyalty: "Bronze",
    },
    {
      id: "C014",
      name: "Nick Martinez",
      email: "nick@example.com",
      phone: "0812345684",
      loyalty: "Gold",
    },
    {
      id: "C015",
      name: "Olivia Robinson",
      email: "olivia@example.com",
      phone: "0812345685",
      loyalty: "Silver",
    },
    {
      id: "C016",
      name: "Paul Clark",
      email: "paul@example.com",
      phone: "0812345686",
      loyalty: "Bronze",
    },
    {
      id: "C017",
      name: "Queen Hall",
      email: "queen@example.com",
      phone: "0812345687",
      loyalty: "Silver",
    },
    {
      id: "C018",
      name: "Rick Allen",
      email: "rick@example.com",
      phone: "0812345688",
      loyalty: "Gold",
    },
    {
      id: "C019",
      name: "Sophia Young",
      email: "sophia@example.com",
      phone: "0812345689",
      loyalty: "Bronze",
    },
    {
      id: "C020",
      name: "Tom Hernandez",
      email: "tom@example.com",
      phone: "0812345690",
      loyalty: "Silver",
    },
    {
      id: "C021",
      name: "Ursula King",
      email: "ursula@example.com",
      phone: "0812345691",
      loyalty: "Gold",
    },
    {
      id: "C022",
      name: "Victor Wright",
      email: "victor@example.com",
      phone: "0812345692",
      loyalty: "Bronze",
    },
    {
      id: "C023",
      name: "Wendy Lopez",
      email: "wendy@example.com",
      phone: "0812345693",
      loyalty: "Silver",
    },
    {
      id: "C024",
      name: "Xavier Hill",
      email: "xavier@example.com",
      phone: "0812345694",
      loyalty: "Gold",
    },
    {
      id: "C025",
      name: "Yvonne Scott",
      email: "yvonne@example.com",
      phone: "0812345695",
      loyalty: "Bronze",
    },
    {
      id: "C026",
      name: "Zack Green",
      email: "zack@example.com",
      phone: "0812345696",
      loyalty: "Silver",
    },
    {
      id: "C027",
      name: "Ava Adams",
      email: "ava@example.com",
      phone: "0812345697",
      loyalty: "Gold",
    },
    {
      id: "C028",
      name: "Ben Nelson",
      email: "ben@example.com",
      phone: "0812345698",
      loyalty: "Silver",
    },
    {
      id: "C029",
      name: "Cindy Carter",
      email: "cindy@example.com",
      phone: "0812345699",
      loyalty: "Bronze",
    },
    {
      id: "C030",
      name: "Dylan Mitchell",
      email: "dylan@example.com",
      phone: "0812345700",
      loyalty: "Gold",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    setShowForm(false);
  };

  return (
    <div className="p-8">
      <PageHeader
        title="Customers"
        breadcrumb="Customers"
        setShowCustomerForm={setShowForm}
      />
      {showForm && (
        <FormCustomer
          onAddCustomer={handleAddCustomer}
          onCancel={() => setShowForm(false)}
        />
      )}
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Customer ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="text-center hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{c.id}</td>
              <td className="py-2 px-4 border-b">{c.name}</td>
              <td className="py-2 px-4 border-b">{c.email}</td>
              <td className="py-2 px-4 border-b">{c.phone}</td>
              <td className="py-2 px-4 border-b">{c.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
