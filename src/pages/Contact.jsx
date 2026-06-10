import ContactFormSection from "../components/PageComponent/Contact/ContactFormSection.jsx";
import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";

export default function Contact() {
  usePageMetaI18n("contact");

  return <ContactFormSection />;
}
