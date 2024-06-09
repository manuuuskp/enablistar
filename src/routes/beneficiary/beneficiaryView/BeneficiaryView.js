import React from "react";
import { useBeneficiaryView } from "./hooks/useBeneficiaryView";

const BeneficiaryView = () => {
  const { beneficiary } = useBeneficiaryView();

  if (!beneficiary) {
    return <div className="max-w-md mx-auto p-4">Beneficiary not found</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Beneficiary Details</h2>
      <p>
        <strong>Full Name:</strong> {beneficiary.fullName}
      </p>
      <p>
        <strong>Address:</strong> {beneficiary.address}
      </p>
      <p>
        <strong>Country:</strong> {beneficiary.country}
      </p>
      <p>
        <strong>Pincode:</strong> {beneficiary.pincode}
      </p>
    </div>
  );
};

export default BeneficiaryView;