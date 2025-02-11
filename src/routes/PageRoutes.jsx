import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Loader from "../components/Loading/Loading";
import Login from "../Validate/Login";
import Logout from "../Validate/Logout";
import DashboardLayout from "../Dashboard/DashboardLayout";  // Corrected import
import DashboardHome from "../Dashboard/DashboardHome";  // Added import
import DashboardOrders from "../Dashboard/DashboardOrders";  // Added import
import DashboardTables from "../Dashboard/DashboardTables";  // Added import
import DashboardReview from "../Dashboard/DashboardReview";  // Added import

const Menu = React.lazy(() => import("../pages/MenuPage"));
const Booking = React.lazy(() => import("../pages/BookingPage"));
const Orders = React.lazy(() => import("../pages/Orders"));
const OrderDetail = React.lazy(() => import("../pages/OrderDetail"));
const Table = React.lazy(() => import("../pages/TablePage"));
const TableDetail = React.lazy(() => import("../pages/TableDetail"));

const PageRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="menu" element={<Menu />} />
        <Route path="booking" element={<Booking />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="table-overview" element={<Table />} />
        <Route path="table-overview/:id" element={<TableDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />

        {/* Dashboard Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="orders" element={<DashboardOrders />} />
          <Route path="tables" element={<DashboardTables />} />
          <Route path="review" element={<DashboardReview />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default PageRoutes;
