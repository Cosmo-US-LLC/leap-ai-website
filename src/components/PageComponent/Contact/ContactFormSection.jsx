import { useState } from "react";
import contactTeamPhoto from "../../../assets/images/contact/contact-team.webp";
import { submitToGHL } from "../../../lib/ghlService.js";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function ContactField({ id, label, children }) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <label
        htmlFor={id}
        className="text-lg font-semibold leading-7 text-black"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClassName =
  "w-full rounded-lg border-0 bg-white px-4 py-5 text-base leading-[26px] text-black outline-none ring-0 placeholder:text-black/50 focus:ring-2 focus:ring-[#18a3e6]/30";

export default function ContactFormSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    if (submitError) setSubmitError(null);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await submitToGHL(
        {
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          companyName: "",
        },
        {
          source: formData.message.trim()
            ? `Contact Page — ${formData.message.trim().slice(0, 180)}`
            : "Contact Page",
          tags: ["Website Form", "Contact"],
        },
      );
      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      setSubmitError(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-5 pb-12 pt-[124px] lg:px-20 lg:pb-20 lg:pt-[150px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:gap-12">
        <div className="flex w-full max-w-[800px] flex-col gap-5 text-center">
          <h1 className="text-[40px] capitalize leading-[46px] text-[#201463] lg:text-[56px] lg:leading-[58px]">
            <span className="font-bold">Contact </span>
            <span className="font-normal text-[rgba(32,20,99,0.7)]">Us</span>
          </h1>
          <p className="text-base leading-[26px] text-[#4e546c]">
            Get in touch with us to explore how we can assist you in transforming your
            business with innovative AI solutions. Our team is here to answer your
            questions and provide the support you need.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 rounded-2xl bg-[#f8f9fc] p-6 lg:p-8"
            noValidate
          >
            <div className="flex flex-col gap-4">
              <ContactField id="contact-full-name" label="Full Name">
                <input
                  id="contact-full-name"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(event) => handleChange("fullName", event.target.value)}
                  className={inputClassName}
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName ? (
                  <p className="text-sm text-red-600">{errors.fullName}</p>
                ) : null}
              </ContactField>

              <ContactField id="contact-email" label="Email Address">
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  className={inputClassName}
                  aria-invalid={!!errors.email}
                />
                {errors.email ? (
                  <p className="text-sm text-red-600">{errors.email}</p>
                ) : null}
              </ContactField>

              <ContactField id="contact-phone" label="Phone Number">
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  className={inputClassName}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone ? (
                  <p className="text-sm text-red-600">{errors.phone}</p>
                ) : null}
              </ContactField>

              <ContactField id="contact-message" label="Message">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  className={`${inputClassName} min-h-[180px] resize-y`}
                  aria-invalid={!!errors.message}
                />
                {errors.message ? (
                  <p className="text-sm text-red-600">{errors.message}</p>
                ) : null}
              </ContactField>
            </div>

            {submitError ? (
              <p className="text-sm text-red-600">{submitError}</p>
            ) : null}

            {isSuccess ? (
              <p className="text-sm font-medium text-[#201463]">
                Thank you. Your message has been sent successfully.
              </p>
            ) : null}

            <PrimaryCtaButton
              type="submit"
              to={null}
              disabled={isSubmitting}
              className="w-fit px-6 py-3.5 text-sm font-semibold leading-[22px] disabled:cursor-not-allowed disabled:opacity-70"
              capitalize={false}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </PrimaryCtaButton>
          </form>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-0 lg:self-stretch">
            <img
              src={contactTeamPhoto}
              alt="Leap 41 team in conversation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
