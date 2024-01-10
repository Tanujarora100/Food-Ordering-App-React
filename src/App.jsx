import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default AppLayout;