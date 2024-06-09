import { configureStore } from "@reduxjs/toolkit";
import beneficiariesSlice from "../routes/beneficiary/beneficiary.slice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    beneficiaries: beneficiariesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
