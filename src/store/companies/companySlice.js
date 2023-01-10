import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [],
  },
  reducers: {
    addCompany(state, action) {},
  },
});


export const companyActions = companySlice.actions;

export default companySlice;