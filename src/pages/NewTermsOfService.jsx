import { usePageMeta } from "../hooks/usePageMeta.js";

const META = {
  title: "Terms of Services | Leap 41",
  description:
    "Read the terms and conditions for using the Leap AI website and services.",
};

const SECTIONS = [
  {
    heading: "Acceptable use of this website",
    content: (
      <>
        <p>
          We require you to follow several simple rules when accessing or using
          this website. You must not:
        </p>
        <ol className="mt-3 list-decimal space-y-4 pl-6">
          <li>use this website in violation of any law, rule or regulation</li>
          <li>
            interfere with or disrupt this website or any of our computer
            systems, servers, networks, databases, software, hardware or
            equipment used by or for this website
          </li>
          <li>interfere with the use or enjoyment of this website by others</li>
          <li>introduce code which is disruptive or harmful</li>
          <li>
            attempt to gain unauthorized access to our computer systems,
            servers, networks, databases, software, hardware or equipment,
            including to: user-restricted areas of this website; logins and
            passwords of others; or personal information and personal accounts
            of others
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Privacy",
    content: (
      <p>
        Your privacy is important to us. If you provide any personal information
        to us through this website, we will handle it according to what we say
        in our{" "}
        <a
          href="https://www.leapai.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#2b2b76] underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    ),
  },
  {
    heading: "Copyright & trademarks",
    content: (
      <>
        <p>
          The website design, the content on this website and its arrangement is
          protected by our copyright.
        </p>
        <p className="mt-6">
          The name, trademarks and official marks of Leap AI may not be
          reproduced, whether for commercial or non-commercial purposes, without
          our prior authorization which you must receive in writing from us.
        </p>
      </>
    ),
  },
  {
    heading: "User contributed content",
    content: (
      <p>
        By submitting your content, you agree to give us a right to do what we
        want with the content that you submit and to permit others to do the
        same; in both cases, without the need to give you notice,
        acknowledgement or payment, subject to terms of our Privacy Policy. You
        also agree to waive your moral rights as an author under copyright law
        in the submitted content.
      </p>
    ),
  },
  {
    heading: "Password protected information",
    content: (
      <p>
        Portions of this website require a user ID and a password to access and
        may require you to agree to additional terms and conditions. To apply
        for a user ID and a password, follow the instructions on the
        password-protected pages. You alone are responsible for keeping your
        user ID and password confidential, and for any and all activity that
        occurs on this Website under your user ID or password. You agree to
        immediately notify Leap AI of any unauthorized use of your user ID or
        password or any other breach of security.
      </p>
    ),
  },
  {
    heading: "Links to other websites and social media platforms",
    content: (
      <>
        <p>
          You may see links on this website to other websites and some widely
          used social media platforms. We have included them because they may be
          of interest to you. Just to be clear, providing a link to them
          doesn&apos;t mean that we endorse or recommend them to you.
        </p>
        <p className="mt-6">
          Also, since these other websites and social media platforms are
          controlled and maintained by other people, we can&apos;t be sure that
          the link will still work when you click on it or that the service or
          content is useful, appropriate, virus-free or reliable. Therefore, you
          need to decide for yourself whether you want to follow any link or to
          agree to receive or rely on any service or content that is made
          available to you.
        </p>
      </>
    ),
  },
  {
    heading: "Your privacy and third party sites",
    content: (
      <p>
        Any information that you provide to or through a social media platform
        or other website is not collected or controlled by Leap AI. Social media
        platforms or other websites are not bound by our Privacy Policy. You
        should review the privacy policies of any linked website or social media
        platform before providing any personal or other information. Others may
        not comply with the same privacy laws, policies and practices that we
        do.
      </p>
    ),
  },
  {
    heading: "Warranty disclaimer",
    content: (
      <p>
        USE OF THIS WEBSITE AND ITS CONTENTS IS AT YOUR OWN RISK. THIS WEBSITE
        AND ALL OF ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo;. YOU MUST NOT
        RELY ON ANY CONTENT PUBLISHED ON OR LINKED TO THIS WEBSITE WITHOUT
        FIRST MAKING YOUR OWN ENQUIRIES TO VERIFY IT IS ACCURATE, CURRENT AND
        COMPLETE. WE DO NOT MAKE, AND EXPRESSLY DISCLAIM, ANY REPRESENTATIONS,
        WARRANTIES, COVENANTS AND CONDITIONS, EXPRESS OR IMPLIED, ARISING OUT OF
        OPERATION OF LAW, COURSE OF PERFORMANCE, COURSE OF DEALING, USAGE OF
        TRADE OR OTHERWISE, INCLUDING ANY EXPRESS OR IMPLIED WARRANTIES AND
        CONDITIONS OF: MERCHANTABILITY; MERCHANTABLE QUALITY; FITNESS FOR A
        PARTICULAR PURPOSE; NON-INFRINGEMENT; SAFETY; QUALITY; FREEDOM FROM
        DEFECTS OR THAT DEFECTS WILL BE CORRECTED; UNINTERRUPTED, VIRUS-FREE OR
        ERROR-FREE USE OF THIS WEBSITE; OR ACCURACY, CURRENCY, RELIABILITY,
        COMPLETENESS OR APPROPRIATENESS RELATING TO THE CONTENT OF THIS WEBSITE.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    content: (
      <p>
        Under no circumstances will Leap AI or its directors, employees, agents
        and independent contractors have any responsibility or liability for any
        loss or damage whatsoever (including without limitation direct, indirect,
        special, incidental, consequential, punitive, exemplary or other
        damages, and including without limitation to any loss of profit, costs,
        expenses, harm to business, business interruption, reputation, loss of
        information or programs or data, loss of savings, loss of revenue, loss
        of goodwill, loss of tangible or intangible property, legal fees or
        legal costs, wasted management or office time or damages of any kind
        whatsoever), whether based in contract, tort, negligence or any other
        legal basis, arising out of or in connection with this website, any
        linked website or linked social media platform (including without
        limitation any damages suffered as a result of the use, inability to
        use, failure of, or any omissions or inaccuracies in, this website, any
        linked websites or linked social media platforms, or any of the services
        or content of the foregoing), even if Leap AI has been specifically
        advised of the possibility of such damage or loss, or if such damage or
        loss was foreseeable.
      </p>
    ),
  },
  {
    heading: "General",
    content: (
      <>
        <p>
          Leap AI reserves the right to supplement, remove or modify these terms
          and conditions at any time and from time to time without notice.
          Please check this website regularly for any changes. If you continue
          to use this website following a change to these terms and conditions,
          you will be deemed to have accepted the changes.
        </p>
        <p className="mt-6">
          If any term or condition set out in these terms and conditions is held
          to be invalid, unenforceable or illegal for any reason, the remaining
          terms and conditions will continue in full force.
        </p>
        <p className="mt-6">
          The website&apos;s content and use, and these terms and conditions are
          governed by the laws of the Province of Alberta, without giving effect
          to any conflict of law principles or rules. These terms and conditions
          are deemed to be entered into by you in the Province of Alberta.
        </p>
        <p className="mt-6">
          Leap AI maintains and controls this website from the Province of
          Alberta, Canada. Leap AI makes no representation that this website is
          appropriate or available for use outside Canada. Access to this
          website from territories where the website&apos;s contents are illegal
          is prohibited. If you access this website from outside Canada, you are
          responsible for complying with all local laws.
        </p>
      </>
    ),
  },
];

export default function NewTermsOfService() {
  usePageMeta(META);

  return (
    <section className="bg-white px-4 py-10 md:px-15 md:py-20 mt-20">
      <div className="mx-auto max-w-200">
        <h1 className="mb-6 text-[40px] leading-11.5 text-[#201463] md:text-[56px] md:leading-14.5">
          <span className="font-bold">Terms </span>
          <span className="font-normal text-[rgba(32,20,99,0.7)]">
            of Services
          </span>
        </h1>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="text-base leading-6 text-[#373737]">
            <p>
              By accessing this website, you are agreeing to these terms and
              conditions, so we suggest that you review them carefully.
            </p>
            <p className="mt-6">
              When we say &ldquo;we&rdquo;, &ldquo;us&rdquo; or
              &ldquo;our&rdquo;, we mean Leap AI Solutions (or more commonly
              known as Leap AI).
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold leading-7 text-[#0f172a]">
                {section.heading}
              </h2>
              <div className="text-base leading-6 text-[#373737]">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
