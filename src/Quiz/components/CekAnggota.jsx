import { useState } from "react";
import members from "../data/members.json";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function CekAnggota() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [memberType, setMemberType] = useState("");
  const [icon, setIcon] = useState(null);

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("❌ Email tidak boleh kosong.");
      setMemberType("");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("❌ Email tidak valid.");
      setMemberType("");
      return;
    }

    const member = members.find((m) => m.email === email);

    if (member) {
      setMessage(
        `🧾 Selamat datang, ${member.nama}! Anda adalah member ${member.tipe_member}.`
      );
      setMemberType(member.tipe_member);

      if (member.tipe_member === "platinum") {
        setIcon(<FaStar className="text-yellow-500 inline-block mr-1" />);
      } else if (member.tipe_member === "gold") {
        setIcon(<FaStarHalfAlt className="text-yellow-400 inline-block mr-1" />);
      } else {
        setIcon(<FaRegStar className="text-gray-400 inline-block mr-1" />);
      }
    } else {
      setMessage("❌ Email tidak terdaftar sebagai member.");
      setMemberType("");
      setIcon(null);
    }
  };

  return (
    <div className="container p-8 max-w-2xl mx-auto mt-12 mb-32 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Cek Keanggotaan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Cek
        </button>
      </form>

      {message && (
        <div
          className={`mt-8 p-4 rounded-lg text-center ${
            memberType === "platinum"
              ? "bg-blue-100 text-blue-800"
              : memberType === "gold"
              ? "bg-yellow-100 text-yellow-800"
              : message.startsWith("❌")
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <p className="text-lg font-medium">
            {icon} {message}
          </p>
        </div>
      )}
    </div>
  );
}
