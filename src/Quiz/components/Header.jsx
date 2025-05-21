import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-6 px-8 sticky top-0 w-full z-50">  
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center space-x-4">
          <img src="/src/Quiz/assets/logo.png" alt="Sedap Logo" className="h-10" />
          <h1 className="text-3xl font-bold text-gray-800">Sedap</h1>
        </div>

        <nav className="space-x-8 hidden md:flex">
          <Link to="/guest" className="text-xl text-gray-800 hover:text-blue-500">Home</Link>
          <Link to="/guest#about" className="text-xl text-gray-800 hover:text-blue-500">About</Link>
          <Link to="/guest#products" className="text-xl text-gray-800 hover:text-blue-500">Produk</Link>
          <Link to="/guest#testimonials" className="text-xl text-gray-800 hover:text-blue-500">Testimoni</Link>
        </nav>

        <div className="space-x-6">
          <Link to="/login" className="text-xl text-blue-500 hover:text-blue-700">Login</Link>
          <Link to="/register" className="text-xl text-green-500 hover:text-green-700">Register</Link>
        </div>
      </div>
    </header>
  );
}
