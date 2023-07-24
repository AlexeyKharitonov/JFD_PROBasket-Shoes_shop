import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CardWrapper from "./app/components/Common/CardWrapper";
import { AppBar as Header } from "./app/layouts/AppBar";
import MainPage from "./app/screens/MainPage";
import ContactsPage from "./app/layouts/ContactsPage";
import About from "./app/layouts/About";
import Login from "./app/layouts/Login";
import Footer from "./app/layouts/Footer";
import Detail from "./app/screens/ProductDetail";
import { SelectedTitleProvider } from "./app/hooks/useTitle";

function App() {
  return (
    <CardWrapper>
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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </CardWrapper>
  );
}

export default App;
