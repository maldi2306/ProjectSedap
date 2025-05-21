import product from '../data/product.json';

export default function Products() {
  return (
    <section id="products" className="p-10 bg-gray-50">
      <h3 className="text-2xl font-semibold mb-4 text-center">Menu Kami </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {product.map((product, i) => (
          <div key={i} className="bg-white p-4 shadow rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover object-center mb-2 rounded"
            />
            <h4 className="font-bold text-lg">{product.name}</h4>
            <p className="text-green-600">Rp {product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
