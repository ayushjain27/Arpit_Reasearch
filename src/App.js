import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/" element={<Dashboard />} />
  {/* <Route path="/disclosure" element={<StandardDisclosures />} />
  <Route path="/grievance" element={<GrievanceRedressal />} />
  <Route path="/internalPolicies" element={<InternalPolicies />} />
  <Route path="/codeOfConduct" element={<CodeOfConduct />} />
  <Route path="/researchAndServices" element={<ResearchServices />} />
  <Route path="/investorCharter" element={<InvestorCharter />} />
  <Route path="/complaintData" element={<ComplaintData />} />
  <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
  <Route path="/termsAndConditions" element={<TermsAndConditions />} />
  <Route path="/refundPolicy" element={<RefundPolicy />} />
  <Route path="/contact" element={<ContactUs />} /> */}
</Routes>
  );
}

export default App;
