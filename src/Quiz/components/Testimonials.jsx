import Testimoni from '../data/testimoni.json';

export default function Testimonials() {
  return (
    <section id="testimoni" className="p-10 bg-white">
      <h3 className="text-2xl font-semibold mb-4 text-center">Ulasan Pelanggan</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {Testimoni.map((item, i) => (
          <div key={i} className="p-4 border rounded shadow">
            <div className="flex items-center mb-2">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
              <strong>{item.name}</strong>
            </div>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}