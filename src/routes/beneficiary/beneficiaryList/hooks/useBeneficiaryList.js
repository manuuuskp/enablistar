import { useDispatch, useSelector } from "react-redux";
import {
  deleteBeneficiaryAsync,
  fetchBeneficiaries,
} from "../../beneficiary.service";
import { useEffect, useMemo, useState } from "react";

const useBeneficiaryList = () => {
  const [showToast, setShowToast] = useState(false);
  const beneficiariesData = useSelector((state) => state.beneficiaries);
  const beneficiaries = useMemo(
    () =>
      beneficiariesData.map((row, id) => ({
        ...row,
        rowId: id + 1,
      })),
    [beneficiariesData]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeneficiaries());
  }, [dispatch]);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this beneficiary?")) {
      dispatch(deleteBeneficiaryAsync(id));
      setShowToast(true);
    }
  };

  const onToastClose = () => {
    setShowToast(false);
  };

  return { beneficiaries, showToast, onToastClose, handleRemove };
};

export { useBeneficiaryList };
