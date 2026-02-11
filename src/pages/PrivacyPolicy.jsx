import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Loader2, CheckCircle2 } from 'lucide-react';
export default function PrivacyPolicy() {
    const navigate = useNavigate();
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
          <h1 className="text-[36px] font-[800] leading-[39px] text-[#2b2b76] md:text-[60px] md:leading-[52px]">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      
      <main className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div>
            <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
              Last updated: January 2026
            </p>
          </div>
            <div>   
            <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                Introduction
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                Leap AI respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website, request a consultation, or use our services.
                </p>
            </div>

            {/* 2 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                1. Information We Collect
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-4">
                We collect the following types of personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#475569] font-[Nunito] text-[16px] leading-[24px]">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and business details when you request a consultation or contact us.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, such as IP addresses, browser types, and usage patterns.</li>
                </ul>

            </div>

            {/* 3 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3 mt-7">
                2. How We Use Your Information
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-4">
                Your personal information may be used for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#475569] font-[Nunito] text-[16px] leading-[24px]">
                  <li>To provide the services you request, such as consultations and AI assessments.</li>
                  <li>To communicate with you regarding our services, updates, or offers.</li>
                  <li>To improve the functionality and content of our website.</li>
                  <li>To protect against unauthorized access and ensure the security of our services.</li>
                </ul>
            </div>

            {/* 4 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3 mt-7">
                3. Data Protection
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                  Leap AI takes reasonable steps to protect your personal information, using industry-standard security measures. However, no data transmission over the internet can be 100% secure, and we cannot guarantee the security of your information.
                </p>
            </div>

            {/* 5 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                4. Sharing Your Information
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                  We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist in operating our business or providing our services, as long as they agree to keep the information confidential.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                5. Your Rights
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                  You have the right to access, correct, or delete your personal information held by Leap AI. If you would like to exercise these rights, please contact us at the provided contact details on our website.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                6. Cookies
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                  Our website uses cookies to enhance user experience. Cookies are small files stored on your device that help us track your preferences and activity. You can set your browser to refuse cookies or alert you when cookies are being sent.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                7. Changes to Privacy Policy
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                  Leap AI reserves the right to modify this Privacy Policy at any time. Any changes will be posted on this page, with an updated date. Please review this policy periodically to stay informed about how we are protecting your information.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                8. Contact Information
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us through the contact form on our website.
                </p>
            </div>
            <div className="flex mt-12">
                <Link
                    to="/"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#0F172A]
                    font-[Nunito]
                    text-[16px]
                    font-bold
                    leading-[24px]
                    hover:underline
                    "
                >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                    Back to Home
                </Link>
                </div>
        </div>
      </main>
    </>
  );
}
