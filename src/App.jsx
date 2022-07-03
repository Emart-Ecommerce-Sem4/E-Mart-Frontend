import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import ForgotPassword from './pages/forgot-password';
import HomePage from './pages/homepage';
import SignIn from './pages/signIn';
import SignUp from './pages/signup';
import ShoppingCart from './pages/shopping-cart';
import EditUser from './pages/EditUser';
import Dashboard from './pages/dashboard';
import theme from './utils/theme';

function App() {
  const userAuth = useSelector((state) => state.user.auth);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/forgot-password" element={<ForgotPassword />} exact />
        <Route path="/admin/edit-user" element={<EditUser />} exact />
        <Route path="/forgot-password" element={<ForgotPassword />} exact />
        <Route
          path="/dashboard"
          element={userAuth ? <Dashboard /> : <Navigate to="/" />}
          exact
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
