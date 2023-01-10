import { configureStore } from "@reduxjs/toolkit";

import companySlice from './companies/companySlice';

const store = configureStore({
    reducer:{
        company: companySlice.reducer
    }

})

export default store;