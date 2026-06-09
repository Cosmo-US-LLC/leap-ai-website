import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/layouts/Layout.jsx";
import { NewHomeLayout } from "./components/layouts/NewHomeLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { OldHome } from "./pages/OldHome.jsx";
import { YourFreeReport } from "./pages/YourFreeReport.jsx";
import { BookYourConsultation } from "./pages/BookYourConsultation.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import NewTermsOfService from "./pages/NewTermsOfService.jsx";
import NewPrivacyPolicy from "./pages/NewPrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Insurance from "./pages/Insurance.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";
import Methodology from "./pages/Methodology.jsx";
import Contact from "./pages/Contact.jsx";
import Insights from "./pages/Insights.jsx";
import InsightDetail from "./pages/InsightDetail.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<NewHomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/terms-of-services" element={<NewTermsOfService />} />
          <Route path="/privacy-policy" element={<NewPrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/old-home" element={<OldHome />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/your-free-report" element={<YourFreeReport />} />
          <Route path="/meet" element={<BookYourConsultation />} />
          <Route path="/privacy-policy-old" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services-old" element={<TermsOfService />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
