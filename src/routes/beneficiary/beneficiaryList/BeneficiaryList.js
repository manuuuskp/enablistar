import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useBeneficiaryList } from "./hooks/useBeneficiaryList";
import { FaEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Toaster from "../../../components/toaster/Toaster";
import { TOAST_TYPE } from "../../../constants/constants";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

const BeneficiaryList = () => {
  const { beneficiaries, showToast, onToastClose, handleRemove } =
    useBeneficiaryList();

  const LoadInput = useCallback(
    ({ row }) => (
      <div className="space-x-2 flex">
        <Link to={`/edit-beneficiary/${row.original.id}`}>
          <FaEdit />
        </Link>
        <Link to={`/view-beneficiary/${row.original.id}`}>
          <IoMdEye />
        </Link>
        <button>
          <RiDeleteBin6Line onClick={() => handleRemove(row.original.id)} />
        </button>
      </div>
    ),
    []
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "List Of Beneficiaries", href: "/" },
  ];

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "rowId",
        header: "#",
      },
      {
        accessorKey: "fullName",
        header: "Full Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "country",
        header: "Country",
      },
      {
        accessorKey: "pincode",
        header: "Pincode",
      },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: LoadInput,
      },
    ],
    [handleRemove]
  );

  const data = React.useMemo(() => beneficiaries, [beneficiaries]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mx-auto p-4">
      <div className="flex justify-between">
        <Breadcrumb items={breadcrumbItems} />
        <Link
          to="/add-beneficiary"
          className="mb-4 inline-block bg-green-500 rounded-full text-white py-2 px-4 hover:bg-green-700"
        >
          Add Beneficiary
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {beneficiaries.length === 0 && (
        <div className="flex justify-center mt-8">
          <h1>Please Add New Beneficiary</h1>
        </div>
      )}
      <div>
        {showToast && (
          <Toaster
            message={"Beneficiary removed successfully"}
            duration={1}
            onClose={onToastClose}
            type={TOAST_TYPE.success}
          ></Toaster>
        )}
      </div>
    </div>
  );
};

export default BeneficiaryList;
