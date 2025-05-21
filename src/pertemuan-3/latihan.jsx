import { useState } from "react";

// Reusable InputField Component
function InputField({ label, type, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

// Reusable ResultBox Component
function ResultBox({ label, value, isValid }) {
  return (
    <div
      className={`mt-4 p-3 border-l-4 ${
        isValid
          ? "bg-blue-100 border-blue-500 text-blue-700"
          : "bg-red-100 border-red-500 text-red-700"
      }`}
    >
      <p className="font-semibold">{label}: {isValid ? `Rp ${value.toLocaleString()}` : value}</p>
    </div>
  );
}

// Main Component
export default function HitungGajiForm() {
  const [gaji, setGaji] = useState(0);
  const pajak = 0.11;
  const totalGaji = gaji > 0 ? gaji - gaji * pajak : 0;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        {/* Reusable InputField */}
        <InputField
          label="Gaji Pokok"
          type="number"
          value={gaji}
          onChange={(e) => setGaji(parseFloat(e.target.value) || 0)}
          placeholder="Masukkan jumlah gaji"
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b className="text-red-500">11%</b>
          </label>
        </div>

        {/* Reusable ResultBox */}
        {gaji <= 0 ? (
          <ResultBox label="Silakan masukkan gaji yang valid" value="(tidak boleh kosong atau negatif)" isValid={false} />
        ) : (
          <ResultBox label="Total Take Home Pay (THP)" value={totalGaji} isValid={true} />
        )}
      </div>
    </div>
  );
}
