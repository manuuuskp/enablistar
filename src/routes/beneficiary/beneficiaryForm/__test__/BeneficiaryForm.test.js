import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import configureStore from "redux-mock-store";
import BeneficiaryForm from "../BeneficiaryForm";

const mockStore = configureStore([]);

describe("BeneficiaryForm", () => {
  let store;
  let mockNavigate;

  beforeEach(() => {
    store = mockStore({
      beneficiaries: [],
    });
    mockNavigate = jest.fn();
  });

  const renderComponent = (isEdit = false, beneficiaryId = null) => {
    return render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={
            isEdit
              ? [`/edit-beneficiary/${beneficiaryId}`]
              : ["/add-beneficiary"]
          }
        >
          <Routes>
            <Route path="/add-beneficiary" element={<BeneficiaryForm />} />
            <Route
              path="/edit-beneficiary/:id"
              element={<BeneficiaryForm isEdit={true} />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  test("renders Add Beneficiary form", () => {
    renderComponent();
    expect(screen.getByText("Add Beneficiary")).toBeInTheDocument();
  });

  test("renders Edit Beneficiary form", () => {
    const beneficiary = {
      id: 1,
      fullName: "Manoj Prabhu",
      address: "Mulanur",
      country: "India",
      pincode: "12345",
    };
    store = mockStore({
      beneficiaries: [beneficiary],
    });
    renderComponent(true, beneficiary.id);

    expect(screen.getByText("Update Beneficiary")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Manoj Prabhu")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Mulanur")).toBeInTheDocument();
    expect(screen.getByDisplayValue("India")).toBeInTheDocument();
    expect(screen.getByDisplayValue("12345")).toBeInTheDocument();
  });
});
