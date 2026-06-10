import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";
import { LegalDocument } from "../components/legal/LegalDocument.jsx";

export default function NewPrivacyPolicy() {
  usePageMetaI18n("privacy");

  return <LegalDocument namespace="privacyPolicy" />;
}
