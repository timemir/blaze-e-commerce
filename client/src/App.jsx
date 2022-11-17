import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin";
import AllCategories from "./pages/AllCategories";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export function App() {
    return (
        <div className="container mx-auto bg-blazePrimary200">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/all-categories" element={<AllCategories />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
