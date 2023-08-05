import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainWrapper from "./app/components/Common/Wrappers/MainWrapper";
import { AppBar as Header } from "./app/layouts/AppBar";
import MainPage from "./app/screens/MainPage";
import About from "./app/layouts/About";
import Footer from "./app/layouts/Footer";
import Detail from "./app/screens/ProductDetail";
import { SelectedTitleProvider } from "./app/hooks/useTitle";
import Basket from "./app/layouts/Basket";
import LoginPage from "./app/components/UI/LoginPage";
import RegisterPage from "./app/components/UI/RegisterPage";
import FavoritePage from "./app/screens/FavoritePage";

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
                <MainPage />
              </SelectedTitleProvider>
            }
          />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </MainWrapper>
  );
}

export default App;
