import React from "react";
import "./assets/tailwind.css";
import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const UserList = React.lazy(() => import("./pages/UserList"));
const Notes = React.lazy(() => import("./components/notes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
import Loading from "./components/Loading";

const GuestLayout = React.lazy(() => import("./Quiz/layout/GuestLayout"));
const GuestPage = React.lazy(() => import("./Quiz/pages/GuestPage"));

function App() {


  return (
    <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Error400" element={<Error400 />} />
            <Route path="/Error401" element={<Error401 />} />
            <Route path="/Error403" element={<Error403 />} />
            <Route path="/UserList" element={<UserList />} /> 
            <Route path="/notes" element={<Notes />} />
            <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/guest" element={<GuestLayout />}>
              <Route index element={<GuestPage />} />
            </Route>

            <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
            </Route>
            </Routes>
       </Suspense>
  );
}

export default App;
