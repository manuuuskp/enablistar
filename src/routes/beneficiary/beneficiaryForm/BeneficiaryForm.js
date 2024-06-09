import React from "react";
import { useForm } from "react-hook-form";
import { useBeneficiary } from "./hooks/useBeneficiaryForm";

const BeneficiaryForm = ({ isEdit = false }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { onSubmit } = useBeneficiary(isEdit, setValue);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          {...register("fullName", { required: "Full Name is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.fullName && (
          <span className="text-red-500 text-sm">
            {errors.fullName.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          {...register("address", { required: "Address is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          {...register("country", { required: "Country is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
        {errors.country && (
          <span className="text-red-500 text-sm">{errors.country.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Pincode
        </label>
        <input
          {...register("pincode", { required: "Pincode is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.pincode && (
          <span className="text-red-500 text-sm">{errors.pincode.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {isEdit ? "Update" : "Add"} Beneficiary
      </button>
    </form>
  );
};

export default BeneficiaryForm;
