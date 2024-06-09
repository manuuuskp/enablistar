import { createAsyncThunk } from "@reduxjs/toolkit";

let beneficiariesData = [
  {
    id: 1,
    fullName: "Sachin Tendulkar",
    address: "Mumbai",
    country: "India",
    pincode: "12345",
  },
  {
    id: 2,
    fullName: "Virat Kohli",
    address: "Delhi",
    country: "India",
    pincode: "54321",
  },
];

// Async thunk to fetch beneficiaries
export const fetchBeneficiaries = createAsyncThunk(
  "beneficiaries/fetchBeneficiaries",
  async () => {
    // Simulating fetch call to get beneficiaries
    const response = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: beneficiariesData });
      }, 100);
    });
    const data = await response;
    return data.data;
  }
);

// Async thunk to add a beneficiary
export const addBeneficiaryAsync = createAsyncThunk(
  "beneficiaries/addBeneficiaryAsync",
  async (beneficiary) => {
    // Simulating a POST request to add the beneficiary
    const response = new Promise((resolve) => {
      setTimeout(() => {
        beneficiariesData = [...beneficiariesData, beneficiary];
        resolve({ data: beneficiary });
      }, 100);
    });
    const data = await response;
    return data.data;
  }
);

// Async thunk to update a beneficiary
export const updateBeneficiaryAsync = createAsyncThunk(
  "beneficiaries/updateBeneficiaryAsync",
  async (beneficiary) => {
    // Simulating a PUT request to add the beneficiary
    const response = new Promise((resolve) => {
      setTimeout(() => {
        const beneFiciaryClone = [...beneficiariesData];
        const index = beneFiciaryClone.findIndex(
          (beneficiaryData) => beneficiaryData.id === beneficiary.id
        );
        if (index !== -1) {
          beneFiciaryClone[index] = beneficiary;
        }

        beneficiariesData = [...beneFiciaryClone];
        resolve({ data: beneficiary });
      }, 100);
    });
    const data = await response;
    return data.data;
  }
);

// Async thunk to delete a beneficiary
export const deleteBeneficiaryAsync = createAsyncThunk(
  "beneficiaries/deleteBeneficiaryAsync",
  async (beneficiary) => {
    // Simulating a DELETE request to remove the beneficiary
    const response = new Promise((resolve) => {
      setTimeout(() => {
        const beneficiaryDataObj = beneficiariesData.filter(
          (beneficData) => beneficData.id !== beneficiary
        );
        beneficiariesData = [...beneficiaryDataObj];
        resolve({ data: beneficiary });
      }, 100);
    });
    const data = await response;
    return data.data;
  }
);
