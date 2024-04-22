import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Applayout,
  Home,
  PostLayout,
  About,
  SinglePost,
  Login,
  Adminlayout,
  Dashboard,
  AdminRoute,
} from "./pages/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth } from "./context/Context";

const App = () => {
  const { login, getblogs } = useAuth();

  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route index element={<Home />} />
              <Route path="/category/:category" element={<PostLayout />} />
              <Route path="/category/:category/:id" element={<SinglePost />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={login ? <Adminlayout /> : <Navigate to="/login" />}
            >
              <Route index element={<Dashboard />} />
              <Route path="/admin/:admin_page" element={<AdminRoute />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
