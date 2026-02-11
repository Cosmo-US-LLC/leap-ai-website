import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/layouts/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { YourFreeReport } from "./pages/YourFreeReport.jsx";
import { BookYourConsultation } from "./pages/BookYourConsultation.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Insurance from "./pages/Insurance.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/your-free-report" element={<YourFreeReport />} />
          <Route path="/meet" element={<BookYourConsultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services" element={<TermsOfService />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
