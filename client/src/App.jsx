import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainWrapper from "./app/components/Common/Wrappers/MainWrapper";
import NavBar from "./app/Layouts/NavBar";
import AboutPage from "./app/Pages/AboutPage";
import Footer from "./app/Layouts/Footer";
import OrderPage from "./app/Pages/OrderPage";
import HomePage from "./app/Pages/HomePage";
import ProductPage from "./app/Pages/ProductPage";
import AuthPage from "./app/Pages/AuthPage";
import AppLoader from "./app/components/UI/hoc/AppLoader";
import Logout from "./app/Layouts/Logout";
import EditProductPage from "./app/Pages/EditProductPage";
import FeedBack from "./app/Pages/FeedBack";
import useLogOut from "./app/Hooks/useLogOut";

function App() {
  useLogOut();

  return (
    <>
      <AppLoader>
        <MainWrapper>
          <NavBar />
          <div style={{ flex: "1 0 auto" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id?" element={<ProductPage />} />
              <Route path="/edit/:id?" element={<EditProductPage />} />
              <Route path="/auth/:type" element={<AuthPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/feedback" element={<FeedBack />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </MainWrapper>
      </AppLoader>
      <ToastContainer style={{ top: "35%" }} />
    </>
  );
}

export default App;
