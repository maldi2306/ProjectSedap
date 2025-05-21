

export default function HitungGajiForm() {
  

  return (
    <div>
      {
        <input
          type="number"
          placeholder="Masukkan jumlah gaji"
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setGaji(e.target.value)}
        />
      }
    </div>
    
  );
  
}
