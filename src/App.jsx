import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import SignIn from './pages/signIn';
import SignUp from './pages/signup';
<<<<<<< HEAD
=======
import ShoppingCart from './pages/shopping-cart';
import EditUser from './pages/EditUser';
import Dashboard from './pages/dashboard';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProductDetail from './pages/ProductDetail';
import Order from './pages/Order';
import theme from './utils/theme';
import Payment from './pages/payment';
import AdminDashboard from './pages/admin-dashboard';
>>>>>>> 1ecf6a3e92d7298f1bbc9f1a453251b88d3639e8


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
<<<<<<< HEAD
=======
        <Route path="/forgot-password" element={<ForgotPassword />} exact />
        <Route path="/admin/edit-user" element={<EditUser />} exact />
        <Route path="/admin/order" element={<Order />} exact />
        <Route path="/forgot-password" element={<ForgotPassword />} exact />
        <Route path="/place-order" element={<PlaceOrderPage />} exact />
        <Route path="/product-detail" element={<ProductDetail />} exact />
        <Route path="/cart" element={<ShoppingCart />} exact />
        <Route path="/payment" element={<Payment />} exact />
        <Route
          path="/dashboard"
          element={userAuth ? <Dashboard /> : <Navigate to="/" />}
          exact
        />
        <Route path="/admin/:page" element={<AdminDashboard />} exact />
>>>>>>> 1ecf6a3e92d7298f1bbc9f1a453251b88d3639e8
      </Routes>
    </div>
  );
}

export default App;
