import { createSlice } from '@reduxjs/toolkit';
import { USER_DETAILS } from '../../constants';

const userString = localStorage.getItem(USER_DETAILS) || '';
const userObj = userString ? JSON.parse(userString) : null;

const initialState = {
  auth: userObj ? true : false,
  id: userObj?.id,
  email: userObj?.email,
  firstName: userObj?.firstName,
  address: userObj?.address,
  lastName: userObj?.lastName,
  phoneNumber: userObj?.phoneNumber,
  state: userObj?.state,
  userRole: userObj?.user_role,
  city: userObj?.city,
  birthday: userObj?.birthday,
  isAdmin: userObj?.user_role === 'ADMIN',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      state.auth = true;
      state.id = action.payload.user_id;
      state.email = action.payload.email;
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.phoneNumber = action.payload.phone_number;
      state.state = action.payload.state;
      state.userRole = action.payload.user_role;
      state.city = action.payload.city;
      state.birthday = action.payload.birthday;
      state.isAdmin = action.payload.user_role === 'ADMIN';
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
