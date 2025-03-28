import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import PrimaryAuth from "./Pages/PrimaryAuth/PrimaryAuth.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";
import UserProfile from "./Pages/UserProfile/UserProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrimaryAuth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
