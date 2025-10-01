import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Properties from "../pages/Properties";
import ThirdParties from "../pages/ThirdParties";
import Footer from "../components/Layout/Footer";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/clientes" element={<Clients />} />
                        <Route path="/propiedades" element={<Properties />} />
                        <Route path="/propiedades-terceros" element={<ThirdParties />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
