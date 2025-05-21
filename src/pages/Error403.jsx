import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <div>
      <ErrorPage
        Kode="403"
        Deskripsi="Sometimes we get lost to find more beautiful places. Let's get back on track."
        Gambar="img/robot3.png"
      />
    </div>
  );
}
