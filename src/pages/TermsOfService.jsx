import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Loader2, CheckCircle2 } from 'lucide-react';
export default function TermsOfService() {
    const navigate = useNavigate();
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
          <h1 className="text-[36px] font-[800] leading-[39px] text-[#2b2b76] md:text-[60px] md:leading-[52px]">
            Terms Of Service
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
                These terms and conditions outline the rules and regulations for the use of Leap AI's website and services, including the free consultation and AI services. By accessing or using our website, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our services.
                </p>
            </div>

            {/* 2 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                1. Services
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                Leap AI offers AI integration, strategy consulting, and business assessments to help organizations leverage artificial intelligence. Services provided are subject to the specific terms outlined in individual contracts or agreements with Leap AI.
                </p>

            </div>

            {/* 3 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                2. Use of Website
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                You may use the Leap AI website for lawful purposes only. You agree not to use the website in any way that could damage, disable, or impair the site or interfere with others' use of the website.
                </p>
            </div>

            {/* 4 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                3. Privacy Policy
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                    Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.
                </p>
            </div>

            {/* 5 */}
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                4. Intellectual Property
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                All content on this website, including text, images, and logos, are the property of Leap AI and are protected by intellectual property laws. You are not permitted to reproduce, distribute, or display any content from the website without our prior written consent.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                5. Free Consultation Offer
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                Leap AI offers free consultations that may include an evaluation of your AI strategy and business processes. This consultation is subject to availability and does not obligate you to purchase any services. We reserve the right to limit or withdraw this offer at any time.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                6. Disclaimers and Limitation of Liability
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                While Leap AI makes every effort to ensure the accuracy and reliability of the information on our website, we make no guarantees regarding the completeness, accuracy, or reliability of the content or services provided. You agree to use the website and services at your own risk.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                7. Modifications
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                Leap AI reserves the right to modify or replace these terms and conditions at any time. You are advised to review these terms periodically for changes. Continued use of the website after any modifications constitutes acceptance of the revised terms.
                </p>
            </div>
            <div>
                <h4 className="text-[#2B2B76] font-[Nunito] text-[18px] sm:text-[24px] font-extrabold leading-[28px] mb-3">
                8. Governing Law
                </h4>

                <p className="text-[#475569] font-[Nunito] text-[16px] leading-[24px] mb-7">
                These terms and conditions are governed by the laws of the jurisdiction in which Leap AI operates. Any disputes arising from the use of the website or services shall be resolved in the appropriate courts in that jurisdiction.
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
