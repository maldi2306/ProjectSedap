export default function PageHeader({
  title,
  breadcrumb,
  setShowOrderForm,
  setShowCustomerForm,
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold">{title}</span>
        <div className="flex items-center font-medium space-x-2 mt-2 text-gray-500">
          <span>{breadcrumb}</span>
        </div>
      </div>
      <div className="space-x-2">
        {setShowOrderForm && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowOrderForm(true)}
          >
            Add Order
          </button>
        )}
        {setShowCustomerForm && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowCustomerForm(true)}
          >
            Add Customer
          </button>
        )}
      </div>
    </div>
  );
}
