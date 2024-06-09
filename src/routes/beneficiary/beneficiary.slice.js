import { createSlice } from "@reduxjs/toolkit";
import {
  addBeneficiaryAsync,
  deleteBeneficiaryAsync,
  fetchBeneficiaries,
} from "./beneficiary.service";

const beneficiariesSlice = createSlice({
  name: "beneficiaries",
  initialState: [],
  reducers: {
    editBeneficiary: (state, action) => {
      const index = state.findIndex(
        (beneficiary) => beneficiary.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeBeneficiary: (state, action) => {
      const newState = state.filter(
        (beneficiary) => beneficiary.id !== action.payload
      );
      console.log(newState);
      return newState;
    },
  },
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
      });
  },
});

export const { editBeneficiary, removeBeneficiary } =
  beneficiariesSlice.actions;

export default beneficiariesSlice;
