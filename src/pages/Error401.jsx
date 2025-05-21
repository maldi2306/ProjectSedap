import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <div>
      <ErrorPage
        Kode="401"
        Deskripsi="Every dead end is a cue to find a new path. Don't give up!"
        Gambar="img/robot1.png"
      />
    </div>
  );
}
