import { createSlice } from "@reduxjs/toolkit";
import {
  addBeneficiaryAsync,
  deleteBeneficiaryAsync,
  fetchBeneficiaries,
  updateBeneficiaryAsync,
} from "./beneficiary.service";

const beneficiariesSlice = createSlice({
  name: "beneficiaries",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeneficiaries.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addBeneficiaryAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBeneficiaryAsync.fulfilled, (state, action) => {
        return state.filter((beneficData) => beneficData.id !== action.payload);
      })
      .addCase(updateBeneficiaryAsync.fulfilled, (state, action) => {
        const index = state.findIndex(
          (beneficiary) => beneficiary.id === action.payload.id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default beneficiariesSlice;
