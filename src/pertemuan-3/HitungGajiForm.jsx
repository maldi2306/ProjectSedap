import { useState } from "react";

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function GajiResult({ gaji, pajak }) {
  const totalGaji = gaji ? gaji - gaji * pajak : 0;
  return (
    <div
      className={`mt-4 p-3 border-l-4 ${gaji ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-red-100 border-red-500 text-red-700'}`}
    >
      <p className="font-semibold">
        {gaji ? `Total Take Home Pay (THP): Rp ${totalGaji.toLocaleString()}` : "Silakan masukkan gaji yang valid."}
      </p>
    </div>
  );
}

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");
  const pajak = 0.11;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Hitung Gaji Bersih</h2>
        
        <InputField
          label="Gaji Pokok"
          type="number"
          placeholder="Masukkan jumlah gaji"
          value={gaji}
          onChange={(e) => setGaji(e.target.value)}
        />
        
        <label className="block text-gray-700 font-medium mb-1">
          Pajak: <b className="text-red-500">11%</b>
        </label>

        <GajiResult gaji={parseFloat(gaji)} pajak={pajak} />
      </div>
    </div>
  );
}