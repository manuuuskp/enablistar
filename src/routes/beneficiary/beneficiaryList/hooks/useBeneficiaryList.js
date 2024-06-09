import { useDispatch, useSelector } from "react-redux";
import {
  deleteBeneficiaryAsync,
  fetchBeneficiaries,
} from "../../beneficiary.service";
import { removeBeneficiary } from "../../beneficiary.slice";
import { useEffect } from "react";

const useBeneficiaryList = () => {
  const beneficiariesData = useSelector((state) => state.beneficiaries);
  const beneficiaries = beneficiariesData.map((row, id) => ({
    ...row,
    rowId: id + 1,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeneficiaries());
  }, [dispatch]);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this beneficiary?")) {
      dispatch(deleteBeneficiaryAsync(id));
    }
  };

  return { beneficiaries, handleRemove };
};

export { useBeneficiaryList };
