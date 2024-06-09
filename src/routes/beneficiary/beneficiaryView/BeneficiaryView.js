import React from "react";
import { useBeneficiaryView } from "./hooks/useBeneficiaryView";
import PageWrapper from "../../../components/pageWrapper/PageWrapper";
import { useNavigate } from "react-router-dom";

const BeneficiaryView = () => {
  const { beneficiary } = useBeneficiaryView();
  const navigate = useNavigate();

  if (!beneficiary) {
    return <div className="max-w-md mx-auto p-4">Beneficiary not found</div>;
  }

  return (
    <PageWrapper handleBack={() => navigate("/manage-beneficiary")}>
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
    </PageWrapper>
  );
};

export default BeneficiaryView;
