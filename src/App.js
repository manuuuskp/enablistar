import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import BeneficiaryForm from "./routes/beneficiary/beneficiaryForm/BeneficiaryForm";
import BeneficiaryView from "./routes/beneficiary/beneficiaryView/BeneficiaryView";
import BeneficiaryList from "./routes/beneficiary/beneficiaryList/BeneficiaryList";
import store from "./redux/store";
import "./index.css";
import Header from "./components/header/Header";

const App = () => (
  <Provider store={store}>
    <header>
      <Header />
    </header>
    <main>
      <Router>
        <div className="min-h-screen bg-gray-100 p-4 mt-16">
          <Routes>
            <Route path="/" element={<BeneficiaryList />} />
            <Route path="/add-beneficiary" element={<BeneficiaryForm />} />
            <Route
              path="/edit-beneficiary/:id"
              element={<BeneficiaryForm isEdit />}
            />
            <Route path="/view-beneficiary/:id" element={<BeneficiaryView />} />
          </Routes>
        </div>
      </Router>
    </main>
  </Provider>
);

export default App;
