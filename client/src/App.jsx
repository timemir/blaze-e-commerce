import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminCategories from "./pages/AdminCategories";
import AdminComms from "./pages/AdminComms";
import AllCategories from "./pages/AllCategories";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export function App() {
    return (
        <div id="app" className="container relative mx-auto bg-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin-categories" element={<AdminCategories />} />
                <Route path="/admin-analytics" element={<AdminAnalytics />} />
                <Route path="/admin-comms" element={<AdminComms />} />
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
