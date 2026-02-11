import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Building2, Mail, Phone, ShieldCheck, Lock } from "lucide-react";
import overlayBlue from "../../../assets/images/home/Leap_hero/overlay_blue.svg";
import overlayGreen from "../../../assets/images/home/Leap_hero/overlay_green.svg";
import CheckGreen from "../../../assets/images/home/Leap_hero/check_green.svg";
import StarBlue from "../../../assets/images/home/Leap_hero/star_blue.svg";
import { submitToGHL } from "../../../lib/ghlService";

export default function FreeReportHero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    // Check for multiple consecutive dots
    if (email.includes("..")) {
      return false;
    }

    // Split email to check domain part
    const parts = email.split("@");
    if (parts.length !== 2) {
      return false;
    }

    const domain = parts[1];
    // Check for invalid patterns like .com.com or multiple TLDs
    const domainParts = domain.split(".");
    if (domainParts.length < 2) {
      return false;
    }

    // Check if TLD is valid (should be the last part and only letters)
    const tld = domainParts[domainParts.length - 1];
    if (!/^[a-zA-Z]{2,}$/.test(tld)) {
      return false;
    }

    // Check for duplicate TLD patterns (e.g., .com.com)
    if (domainParts.length > 2) {
      const lastTwo = domainParts.slice(-2);
      if (lastTwo[0] === lastTwo[1]) {
        return false;
      }
    }

    // Check for multiple TLDs (e.g., .com.org, .net.com)
    // TLDs are typically 2-4 letters, so if last two parts are both short and alphabetic, it's likely invalid
    if (domainParts.length >= 3) {
      const lastTwo = domainParts.slice(-2);
      const tldPattern = /^[a-zA-Z]{2,4}$/;
      // If both last parts look like TLDs (2-4 letters), it's invalid
      if (tldPattern.test(lastTwo[0]) && tldPattern.test(lastTwo[1])) {
        return false;
      }
    }

    return true;
  };

  const validatePhone = (phone) => {
    // Phone number should be in international format (e.g., +1234567890)
    // Remove the + and country code, then check if remaining digits are between 9 and 13
    if (!phone || !phone.startsWith("+")) {
      return false;
    }
    // Remove + and get only digits
    const digitsOnly = phone.replace(/\D/g, "");
    // Check if total length (including country code) is reasonable
    // Minimum: country code (1-3 digits) + 9 digits = 10-12 total
    // Maximum: country code (1-3 digits) + 13 digits = 14-16 total
    // But we want the actual phone number part (without country code) to be 9-13 digits
    // So we'll check if the phone number has at least 10 digits total (1 country + 9 phone)
    // and at most 16 digits total (3 country + 13 phone)
    return digitsOnly.length >= 10 && digitsOnly.length <= 16;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);

      // Console log the form data
      console.log("Form submitted with data:", {
        name: formData.name.trim(),
        companyName: formData.companyName.trim(),
        email: formData.email.trim(),
        phone: `${formData.countryCode} ${formData.phone.trim()}`,
        fullPhone: formData.phone.trim(),
        countryCode: formData.countryCode,
      });

      // Simulate API call (you can replace this with actual API call)
      setTimeout(() => {
        setIsSubmitting(false);
        // Navigate to success page
        navigate("/your-free-report");
      }, 1000);
    }
  };
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-white pb-16 pt-16"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(241, 245, 249, 1) 1.0625%, rgba(241, 245, 249, 0) 1.5625%), linear-gradient(180deg, rgba(241, 245, 249, 1) 1.5625%, rgba(241, 245, 249, 0) 1.5625%)",
        }}
      />
      {/* <div className='relative max-w-[1640px] mx-auto h-full w-full'> */}
      <img
        src={overlayBlue}
        alt="overlayBlue"
        className="absolute right-[0px] top-[-100px]"
      />
      <img
        src={overlayGreen}
        alt="overlayGreen"
        className="absolute left-0 bottom-[-100px]"
      />
      {/* <div className="pointer-events-none absolute rounded-full left-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_55%)]" /> */}
      {/* <div className="pointer-events-none absolute right-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.18),_transparent_55%)]" /> */}

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:flex-row md:items-start md:justify-between md:px-8">
        {/* Left copy */}
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white/70 px-4 py-[6px] justify-center text-[#3e6db5] shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-white/90 group cursor-default">
            <img
              src={StarBlue}
              alt="StarBlue"
              className="h-[14px] w-[14px] transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-[12px] font-[700] leading-[16px] uppercase tracking-[0.6px] pt-[1px] text-[#2B2B76]">
              Free 7 Pillars Report
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-[36px] font-[800] leading-[39px] text-[#2b2b76] md:text-[60px] md:leading-[52px]">
              <span className="block">Make the Right AI</span>
              <span className="block">Decisions</span>
              <span className="block bg-gradient-to-r from-[#3E6DB5] to-[#2B2B76] bg-clip-text md:leading-[63px] text-transparent">
                Before You Spend.
              </span>
            </h1>
            <p className="text-[18px] font-[700] uppercase tracking-[0.12em] text-[#3e6db5] md:text-[20px] md:leading-[25px]">
              The free 7 pillars of AI implementation written for executive
            </p>
          </div>

          <p className="text-[20px] font-[500] leading-[26px] text-[#475569] md:text-[20px] md:leading-[28px]">
            A practical, business-first framework that shows mid-market leaders
            where AI actually creates ROI before investing in tools, vendors, or
            pilots.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Badge text="No Credit Card Required" />
            <Badge text="Instant PDF Access" />
            <Badge text="Read in 60 Minutes" />
          </div>
        </div>

        {/* Right form card */}
        <div id="get-report" className="w-full max-w-md">
          <div className="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-white shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)] transition-all duration-300 ease-in-out hover:shadow-[0_35px_60px_-12px_rgba(15,23,42,0.45)] hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-[#3e6db5] to-[#059669] transition-all duration-300" />
            <div className="space-y-6 px-6 py-6 md:px-8 md:py-8">
              <div className="space-y-1 transition-all duration-300">
                <h3 className="text-[24px] font-[800] leading-[28px] text-[#2b2b76] transition-colors duration-300">
                  Get the Report
                </h3>
                <p className="text-[14px] font-[600] leading-[16px] text-[#64748b] transition-colors duration-300">
                  Join 2,000+ executives leading the AI era.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Field
                  label="Name"
                  icon={User}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  error={errors.name}
                />
                <Field
                  label="Company Name"
                  icon={Building2}
                  placeholder="Acme Corp"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  error={errors.companyName}
                />
                <Field
                  label="Work Email"
                  icon={Mail}
                  placeholder="john@company.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={errors.email}
                />

                <div className="space-y-2">
                  <Label icon={Phone} text="Phone Number" />
                  <div
                    className={`react-international-phone ${errors.phone ? "phone-input-error" : ""}`}
                  >
                    <PhoneInput
                      value={formData.phone}
                      onChange={(phone) => handleChange("phone", phone)}
                      defaultCountry="us"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-[12px] text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="rounded-[8px] border border-red-300 bg-red-50 p-3 transition-all duration-300 transform hover:scale-[1.02]">
                    <p className="text-[14px] font-[600] text-red-700">
                      {submitError}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn_primary mt-2 flex w-full items-center justify-center gap-2 !py-2 !rounded-[8px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
                >
                  <span>
                    {isSubmitting ? "Submitting..." : "Get Your Free Report"}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </button>

                <div className="flex items-center justify-center gap-2 pt-1 md:text-[14px] text-[12px] font-[600] leading-[16px] text-[#3e6db5] transition-all duration-300 group">
                  <Lock
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                  <span className="transition-colors duration-300">
                    100% Secure. No spam.
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

function Label({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 md:text-[14px] text-[12px] font-[700] leading-[16px] uppercase tracking-[0.1em] text-[#2b2b76] group">
      <Icon
        className="h-4 w-4 text-[#3e6db5] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        aria-hidden
      />
      <span className="transition-colors duration-300">{text}</span>
    </div>
  );
}

function Field({
  label,
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="space-y-2 group">
      <Label icon={icon} text={label} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-[8px] border px-3 py-2 text-[14px] font-[500] leading-[20px] placeholder:text-[#94A3B8] outline-none transition-all duration-300 ${
          error
            ? "border-red-300 bg-red-50 focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:border-red-400"
            : "border-[#e2e8f0] bg-[#f8fafc] focus-visible:ring-2 focus-visible:ring-[#3e6db5] focus-visible:border-[#3e6db5] hover:border-[#cbd5e1] hover:bg-white"
        }`}
      />
      {error && (
        <p className="text-[12px] text-red-600 animate-pulse">{error}</p>
      )}
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 group cursor-default">
      <span className="inline-flex relative h-5 w-5 items-center justify-center transition-all duration-300 group-hover:scale-105 ">
        <img
          src={CheckGreen}
          alt="CheckGreen"
          className="h-full w-full transition-transform duration-300 group-hover:scale-110"
        />
      </span>
      <span className="text-[#64748b] text-[14px] md:text-[16px] font-[500] leading-[20px] transition-colors duration-300 group-hover:text-[#475569]">
        {text}
      </span>
    </div>
  );
}
