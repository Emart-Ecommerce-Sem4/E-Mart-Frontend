import { createSlice } from '@reduxjs/toolkit';
import { USER_DETAILS } from '../../constants';

const userString = localStorage.getItem(USER_DETAILS) || '';
const userObj = userString ? JSON.parse(userString) : null;

const initialState = {
  auth: userObj ? true : false,
  id: userObj?.id,
  email: userObj?.email,
  userType: userObj?.user_type,
  isAdmin: userObj?.user_type === 'ADMIN',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      state.auth = true;
    },
    signUpRequest: (state, action) => {
      state.auth = true;
    },
    logOutRequest: (state) => {
      state.auth = false;
    },
  },
});

export const { loggingRequest, signUpRequest, logOutRequest } =
  userSlice.actions;

export default userSlice.reducer;
