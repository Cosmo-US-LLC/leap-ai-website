import DontJustAdoptAi from '../components/PageComponent/Home/DontJustAdoptAi.jsx';
import VideoCallStrategySession from '../components/PageComponent/Home/VideoCallStrategySession.jsx';
import DeliverablesSection from '../components/PageComponent/Home/DeliverablesSection.jsx';
import MeetTheAuthors from '../components/PageComponent/Home/MeetTheAuthors.jsx';
import CommonQuestions from '../components/PageComponent/Home/CommonQuestions.jsx';
import InsideTheFramework from '../components/PageComponent/Home/InsideTheFramework.jsx';
import GuideFitSection from '../components/PageComponent/Home/GuideFitSection.jsx';
import StopGuessingSection from '../components/PageComponent/Home/StopGuessingSection.jsx';
import TrustedBySection from '../components/PageComponent/Home/TrustedBySection.jsx';
import FreeReportHero from '../components/PageComponent/Home/FreeReportHero.jsx';
import ImplementationJourneySection from '../components/PageComponent/Home/ImplementationJourneySection.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

const HOME_META = {
  title: 'Leap AI: Transform Your Business with Strategic AI Solutions',
  description:
    'Discover how Leap AI helps businesses drive growth, streamline operations, and lead with AI. Book your free consultation today to explore AI-powered solutions tailored for your company\'s success.',
};

export function Home() {
  usePageMeta(HOME_META);

  return (
    <>
      <FreeReportHero />
      <TrustedBySection />
      <StopGuessingSection />
      <GuideFitSection />
      <InsideTheFramework />
      <ImplementationJourneySection />
      <CommonQuestions />
      <MeetTheAuthors />
      {/* <DeliverablesSection /> */}
      {/* <VideoCallStrategySession /> */}
      <DontJustAdoptAi />
    </>
  );
}
