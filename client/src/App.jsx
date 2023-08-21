import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainWrapper from "./app/components/Common/Wrappers/MainWrapper";
import AppBar from "./app/Layouts/AppBar";
import AboutPage from "./app/Pages/AboutPage";
import Footer from "./app/Layouts/Footer";
import OrderPage from "./app/Pages/OrderPage";
import HomePage from "./app/Pages/HomePage";
import ProductPage from "./app/Pages/ProductPage";
import AuthPage from "./app/Pages/AuthPage";
import AppLoader from "./app/components/UI/hoc/AppLoader";
import Logout from "./app/Layouts/Logout";

function App() {
  return (
    <>
      <AppLoader>
        <MainWrapper>
          <AppBar />
          <div style={{ flex: "1 0 auto" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/auth/:type" element={<AuthPage />} />
              {/* БУДЕТ ЕЩЕ ПРИВАТНАЯ СТРАНИЦА ДОБАВЛЕНИЯ НОВ. ТОВАРА */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </MainWrapper>
      </AppLoader>
      <ToastContainer style={{ top: "65%" }} />
    </>
  );
}

export default App;
