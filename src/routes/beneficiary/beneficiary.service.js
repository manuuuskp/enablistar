import { createAsyncThunk } from "@reduxjs/toolkit";

// Initial mock data (simulates `beneficiaries.json`)
let beneficiariesData = [
  {
    id: 1,
    fullName: "John Doe",
    address: "123 Main St",
    country: "USA",
    pincode: "12345",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    address: "456 Elm St",
    country: "Canada",
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
