import { Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { About } from "../pages/About.jsx";
import Methodology from "../pages/Methodology.jsx";
import CaseStudies from "../pages/CaseStudies.jsx";
import CaseStudyDetail from "../pages/CaseStudyDetail.jsx";
import NewTermsOfService from "../pages/NewTermsOfService.jsx";
import NewPrivacyPolicy from "../pages/NewPrivacyPolicy.jsx";
import Contact from "../pages/Contact.jsx";
import Insights from "../pages/Insights.jsx";
import InsightDetail from "../pages/InsightDetail.jsx";

const NEW_HOME_ROUTE_CONFIG = [
  { key: "index", index: true, element: <Home /> },
  { key: "methodology", path: "methodology", element: <Methodology /> },
  { key: "case-studies", path: "case-studies", element: <CaseStudies /> },
  { key: "case-study-detail", path: "case-studies/:slug", element: <CaseStudyDetail /> },
  { key: "terms", path: "terms-of-services", element: <NewTermsOfService /> },
  { key: "privacy", path: "privacy-policy", element: <NewPrivacyPolicy /> },
  { key: "about", path: "about", element: <About /> },
  { key: "contact", path: "contact", element: <Contact /> },
  { key: "insights", path: "insights", element: <Insights /> },
  { key: "insight-detail", path: "insights/:slug", element: <InsightDetail /> },
];

export function newHomeRouteElements() {
  return NEW_HOME_ROUTE_CONFIG.map((route) =>
    route.index ? (
      <Route key={route.key} index element={route.element} />
    ) : (
      <Route key={route.key} path={route.path} element={route.element} />
    ),
  );
}
