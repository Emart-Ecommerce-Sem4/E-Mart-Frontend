import { createSlice } from '@reduxjs/toolkit';
import { USER_DETAILS } from '../../constants';

const userString = localStorage.getItem(USER_DETAILS) || '';
const userObj = userString ? JSON.parse(userString) : null;

const initialState = {
  auth: userObj ? true : false,
  id: userObj?.id,
  firstName: userObj?.firstName,
  lastName: userObj?.lastName,
  email: userObj?.email,
  birthday: userObj?.birthday,
  addressLine1: userObj?.addressLine1,
  addressLine2: userObj?.addressLine2,
  postalCode: userObj?.postalCode,
  city: userObj?.city,
  district: userObj?.district,
  isAdmin: userObj?.user_role === 'ADMIN',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      state.auth = true;
      state.id = action.payload.user_id;
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.email = action.payload.email;
      state.birthday = action.payload.birthday;
      state.addressLine1 = action.payload.address_line_1;
      state.addressLine2 = action.payload.address_line_2;
      state.postalCode = action.payload.postal_code;
      state.city = action.payload.city;
      state.district = action.payload.district;
      state.isAdmin = action.payload.user_role === 'ADMIN';
    },

    logOutRequest: (state) => {
      state.auth = false;
      state.id = '';
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.birthday = '';
      state.addressLine1 = '';
      state.addressLine2 = '';
      state.postalCode = '';
      state.city = '';
      state.district = '';
      state.isAdmin = '';
    },
  },
});

export const { loggingRequest, logOutRequest } = userSlice.actions;

export default userSlice.reducer;
