import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import BeneficiaryList from "../BeneficiaryList";

const mockStore = configureStore([]);

describe("BeneficiaryList", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      beneficiaries: [
        {
          id: 1,
          fullName: "Sachin Tendulkar",
          address: "Mumbai",
          country: "India",
          pincode: "12345",
        },
        {
          id: 2,
          fullName: "Virat Kohli",
          address: "Delhi",
          country: "India",
          pincode: "54321",
        },
      ],
    });
    store.dispatch = jest.fn();
  });

  test("renders BeneficiaryList and fetches beneficiaries", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <BeneficiaryList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Sachin Tendulkar")).toBeInTheDocument();
    expect(screen.getByText("Virat Kohli")).toBeInTheDocument();
  });
});
