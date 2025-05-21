import ErrorPage from "../components/ErrorPage";

export default function Error400() {
    return (
      <div>
        <ErrorPage
          Kode="400"
          Deskripsi="Every mistake is an opportunity to find a new path. This page may be missing, but your adventure isn't over yet!"
          Gambar="img/robot0.png"
        />
      </div>
    );
  }
  