import { BsApple } from "react-icons/bs"; 
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import { FaHome } from "react-icons/fa"
import Sidebar from "./Layouts/Sidebar";
import Header from "./Layouts/Header";
import Dashboard from "./Pages/Dashboard";


createRoot(document.getElementById("root")).render(
<div id="app-container" className="bg-gray-100 min-h-screen flex">
  <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar/>
          <div id="main-content" className="flex-1 p-4">
                <Header />
                <Dashboard />
        </div>
  </div>
  </div>
  
        
);