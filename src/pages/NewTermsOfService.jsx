import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";
import { LegalDocument } from "../components/legal/LegalDocument.jsx";

export default function NewTermsOfService() {
  usePageMetaI18n("terms");

  return <LegalDocument namespace="terms" />;
}
