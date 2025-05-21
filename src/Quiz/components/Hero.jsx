export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center p-10 bg-yellow-100">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-2">Makanan sehat, Harga Bersahabat! Dan Hilangkan Lapar </h2>
        <p className="text-lg">jangan lupa order di toko Sedap kami Ya!!! </p>
      </div>
      <img src="/src/Quiz/assets/poster.png" alt="Hero" className="w-1/2 rounded-lg shadow-lg mt-6 md:mt-0" />
    </section>
  );
}