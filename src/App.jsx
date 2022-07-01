import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import ForgotPassword from './pages/forgot-password';
import HomePage from './pages/homepage';
import SignIn from './pages/signIn';
import SignUp from './pages/signup';
import theme from './utils/theme';
import store from './reducers/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/forgot-password" element={<ForgotPassword />} exact />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
