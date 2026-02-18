import React from "react";
import InsuranceHero from "../components/PageComponent/Insurance/InsuranceHero";
import TheReality from "../components/PageComponent/Insurance/TheReality";
import WhyThisApproach from "../components/PageComponent/Insurance/WhyThisApproach";
import ItsNotTheTechnplogy from "../components/PageComponent/Insurance/ItsNotTheTechnplogy";
import TheSevenPillars from "../components/PageComponent/Insurance/TheSevenPillars";
import WhoIsThisFor from "../components/PageComponent/Insurance/WhoIsThisFor";
import WhatIsThisReport from "../components/PageComponent/Insurance/WhatIsThisReport";
import InsuranceCommonQuestions from "../components/PageComponent/Insurance/InsuranceCommonQuestions";
import InsuranceDontJustAdoptAi from "../components/PageComponent/Insurance/InsuranceDontJustAdoptAi";
import { usePageMeta } from "../hooks/usePageMeta.js";

const INSURANCE_META = {
  title: "Transform Your Insurance Strategy with AI | Leap AI Solutions",
  description:
    "Unlock the power of AI for your insurance business. Discover how Leap AI’s tailored strategies can streamline operations, reduce costs, and enhance customer satisfaction.",
};

function Insurance() {
  usePageMeta(INSURANCE_META);

  return (
    <>
      <InsuranceHero />
      <TheReality />
      <WhyThisApproach />
      <ItsNotTheTechnplogy />
      <TheSevenPillars />
      <WhoIsThisFor />
      <WhatIsThisReport />
      <InsuranceCommonQuestions />
      <InsuranceDontJustAdoptAi />
    </>
  );
}

export default Insurance;
