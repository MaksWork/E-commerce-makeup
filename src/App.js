import React from "react";

import "./styles/App.scss";

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/Footer";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext, CartProductsContext } from "./context";

function App() {
    let [isAuth, setAuth] = useState(false);
    let [cartProducts, setCartProducts] = useState([])

    return (
        <AuthContext.Provider
            value={{isAuth, setAuth}}>
            <CartProductsContext.Provider value={{cartProducts, setCartProducts}}>
                <BrowserRouter>
                    <Navbar />
                    <AppRouter />
                    <Footer />
                </BrowserRouter>
            </CartProductsContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
