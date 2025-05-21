export default function ErrorPage({ Kode, Deskripsi, Gambar }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2D2B7C] text-white px-4">
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 max-w-5xl">
        <div className="text-center md:text-left">
          <h1 className="text-9xl font-bold mb-4">{Kode || 'Error'}</h1>
          <p className="text-2xl mb-2">Sorry, the page not found</p>
          <p className="mb-6 text-base">
            {Deskripsi || 'The link you followed is probably broken or the page has been removed.'}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Kembali ke Beranda
          </a>
        </div>
        {Gambar && (
          <div>
            <img
              src={Gambar}
              alt="Error Illustration"
              className="w-72 h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
