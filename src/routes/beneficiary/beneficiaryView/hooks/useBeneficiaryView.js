import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useBeneficiaryView = () => {
  const { id } = useParams();
  const beneficiaries = useSelector((state) => state.beneficiaries);
  const beneficiary = beneficiaries.find((b) => b.id === parseInt(id));

  return { beneficiary };
};

export { useBeneficiaryView };
