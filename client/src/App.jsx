import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShoppingCart from "./components/Shop/Cart/ShoppingCart";
import ItemDetails from "./components/Shop/ItemDetails";
import Admin from "./pages/admin/Admin";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminCategoryDetails from "./pages/admin/AdminCategoryDetails";
import AdminComms from "./pages/admin/AdminComms";
import AdminItemDetails from "./pages/admin/AdminItemDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Accessories from "./pages/categories/Accessories";
import AllCategories from "./pages/categories/AllCategories";
import NewArrivals from "./pages/categories/NewArrivals";
import Productivity from "./pages/categories/Productivity";
import Sale from "./pages/categories/Sale";
import Workspace from "./pages/categories/Workspace";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export function App() {
    return (
        <div id="app" className="container relative mx-auto bg-white">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Admin */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin-categories" element={<AdminCategories />} />
                <Route path="/admin-analytics" element={<AdminAnalytics />} />
                <Route path="/admin-comms" element={<AdminComms />} />
                <Route path="/all-categories" element={<AllCategories />} />
                <Route
                    path="/admin-categories/:categoryId"
                    element={<AdminCategoryDetails />}
                />
                <Route
                    path="/admin-categories/:categoryId/item/:itemId"
                    element={<AdminItemDetails />}
                />
                {/* Item Details */}
                <Route path="/item/:itemId" element={<ItemDetails />} />
                {/* Categories */}
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/productivity" element={<Productivity />} />
                <Route path="/workspace" element={<Workspace />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/sale" element={<Sale />} />
                {/* Cart */}
                <Route path="/cart" element={<ShoppingCart />} />
                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
