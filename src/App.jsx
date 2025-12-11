import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "@pages/Signup.jsx";
import ProductCreate from "./components/pages/ProductCreate";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import ProductDetail from "./components/pages/ProductDetail";
import ProductList from "./components/pages/ProductList";
import Community from "./components/pages/Community";
import GNB from "./components/molecules/GNB";

function App() {
    return (
        <>
            <GNB />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/new" element={<ProductCreate />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/community" element={<Community />} />
            </Routes>
        </>
    );
}

export default App;
