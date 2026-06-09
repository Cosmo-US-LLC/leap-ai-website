import ContactFormSection from "../components/PageComponent/Contact/ContactFormSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const CONTACT_META = {
  title: "Contact Leap AI | Book an AI Consultation",
  description: "Get in touch with Leap AI to discuss your AI transformation.",
};

export default function Contact() {
  usePageMeta(CONTACT_META);

  return <ContactFormSection />;
}
