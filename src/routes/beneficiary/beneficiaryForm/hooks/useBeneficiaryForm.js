import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBeneficiary } from "../../beneficiary.slice";
import { addBeneficiaryAsync } from "../../beneficiary.service";

const useBeneficiary = (isEdit, setValue) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const beneficiaries = useSelector((state) => state.beneficiaries);
  const beneficiary = isEdit
    ? beneficiaries.find((b) => b.id === parseInt(id))
    : {};

  useEffect(() => {
    if (isEdit) {
      for (const [key, value] of Object.entries(beneficiary)) {
        setValue(key, value);
      }
    }
  }, [isEdit, beneficiary, setValue]);

  const onSubmit = (data) => {
    if (isEdit) {
      dispatch(editBeneficiary({ ...data, id: parseInt(id) }));
    } else {
      dispatch(addBeneficiaryAsync({ ...data, id: Date.now() }));
    }
    navigate("/");
  };

  return { onSubmit };
};

export { useBeneficiary };
