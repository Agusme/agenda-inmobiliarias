import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Properties from "../pages/Properties";
import ThirdParties from "../pages/ThirdParties";
import Footer from "../components/Layout/Footer";
import Login from "../pages/Login";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-sky-100">
                <Navbar />
                <main className="flex-grow my-5 w-full px-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/clientes" element={<Clients />} />
                        <Route path="/propiedades" element={<Properties />} />
                        <Route path="/propiedades-terceros" element={<ThirdParties />} />
                        <Route  path="/login" element={<Login/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
