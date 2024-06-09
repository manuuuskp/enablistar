import { MdHome } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";

export const TOAST_TYPE = {
  success: "SUCCESS",
  error: "ERROR",
  warning: "WARNING",
};

export const PAGE_NAME = {
  home: {
    name: "Home",
    icon: <MdHome size={25} />,
  },
  "/manage-beneficiary": {
    name: "Manage Beneficiary",
    icon: <GrDocumentUser size={25} />,
  },
  "/add-beneficiary": {
    name: "Manage Beneficiary",
    icon: <GrDocumentUser size={25} />,
  },
  "/view-beneficiary": {
    name: "Manage Beneficiary",
    icon: <GrDocumentUser size={25} />,
  },
  "/edit-beneficiary": {
    name: "Manage Beneficiary",
    icon: <GrDocumentUser size={25} />,
  },
};
