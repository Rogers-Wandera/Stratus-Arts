import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./shared/footer";
import NavBar from "./shared/navbar";
import ProductList from "./pages/ProductList";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CheckOutPage from "./pages/CheckOut";
import MainDashboard from "./pages/Dashboard/mainDashboard";
import {
  DashboardHome,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages/Dashboard/index";

function App() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productdetail" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* protected routes */}
          <Route path="/checkout" element={<CheckOutPage />} />

          <Route path="/dashboard" element={<MainDashboard />}>
            {/* dashboard layout */}
            <Route index element={<DashboardHome />} />
            {/* dashboard pages */}
            <Route path="orders" element={<Orders />} />
            <Route path="employees" element={<Employees />} />
            <Route path="customers" element={<Customers />} />
            {/* dashboard apps*/}
            <Route path="kanban" element={<Kanban />} />
            <Route path="editor" element={<Editor />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="color-picker" element={<ColorPicker />} />
            {/* dashboard chats */}
            <Route path="line" element={<Line />} />
            <Route path="area" element={<Area />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />
            <Route path="finaincial" element={<Financial />} />
            <Route path="color-mapping" element={<ColorMapping />} />
            <Route path="pyramid" element={<Pyramid />} />
            <Route path="stacked" element={<Stacked />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
