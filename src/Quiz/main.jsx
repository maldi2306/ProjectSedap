import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/tailwind.css";
import GuestLayout from "./layout/GuestLayout";
import Header from "./components/Header";
import GuestPage from "./pages/GuestPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <GuestLayout />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <GuestPage />
        </div>
      </div>
    </div>
  </BrowserRouter>
);
