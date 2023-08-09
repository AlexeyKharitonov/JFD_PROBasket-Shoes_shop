import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainWrapper from "./app/components/Common/Wrappers/MainWrapper";
import { AppBar as Header } from "./app/Layouts/AppBar";
import About from "./app/Pages/About";
import Footer from "./app/Layouts/Footer";
import { SelectedTitleProvider } from "./app/hooks/useTitle";
//!!!!потом сделаю это перенос все в Auth компонент
import LoginPage from "./app/components/UI/LoginPage";
import RegisterPage from "./app/components/UI/RegisterPage";
import Order from "./app/Pages/Order";
import Home from "./app/Pages/Home";
import Product from "./app/Pages/Product";
import Auth from "./app/Pages/Auth";

function App() {
  return (
    <MainWrapper>
      <Header />
      <div style={{ flex: "1 0 auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <SelectedTitleProvider value={"Simple"}>
                <Home />
              </SelectedTitleProvider>
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/:type" element={<Auth />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </MainWrapper>
  );
}

export default App;
