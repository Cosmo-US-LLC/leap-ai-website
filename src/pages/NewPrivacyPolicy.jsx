import { usePageMeta } from "../hooks/usePageMeta.js";

const META = {
  title: "Privacy Policy | Leap 41",
  description:
    "Learn how Leap AI collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    heading: "Our commitment",
    content: (
      <p>
        We are committed to protecting your privacy. This Privacy Statement
        explains our current practices regarding what information we may
        collect, use, and secure your personal information when you visit our
        website.
      </p>
    ),
  },
  {
    heading: "Collection",
    content: (
      <p>
        When you browse our website, limited amounts of standard information are
        automatically collected for traffic monitoring and statistical purposes.
        The information is analyzed for operational trends, performance, and for
        ways to improve our website. We cannot identify you from this
        information. See &ldquo;Analytics &amp; Cookies&rdquo; below.
      </p>
    ),
  },
  {
    heading: "Use",
    content: (
      <p>
        We only use personal information for the purpose it has been collected,
        or for a consistent purpose, or any other use specifically authorized by
        law.
      </p>
    ),
  },
  {
    heading: "Disclosure",
    content: <p>We do not disclose personal information to anyone.</p>,
  },
  {
    heading: "Analytics & Cookies",
    content: (
      <>
        <p>
          In order to serve you better, we use Google Analytics to help analyse
          the use of our website. These tools use cookies to collect and
          generate information about your visits to our site (including your IP
          address) that is transmitted to their servers in an anonymous form for
          processing. We study patterns of website activity so we can improve
          the experience of visitors to our site.
        </p>
        <p className="mt-6">
          The use of these tools does not allow us or our analytics service
          provider to identify individuals.
        </p>
        <p className="mt-6">
          You can opt-out of analytics activity by setting your browser to
          notify you when a cookie is sent and block analytics cookies if
          desired. Please consult your browser&apos;s Help Menu for
          instructions. Visiting our website with analytics cookies disabled
          will have no significant impact on your browsing experience. Google
          currently offers a free{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2b2b76] underline"
          >
            Google Analytics opt-out tool.
          </a>
        </p>
      </>
    ),
  },
  {
    heading: "How to unsubscribe",
    content: (
      <p>
        If you do not want to continue to receive e-mail from Leap AI, please
        note that every time we send you an email, we will give you the option
        to unsubscribe from our e-mail list, so you&apos;ll be able to stop
        receiving our e-mails at any time. Your email address will be
        immediately removed from our email list.
      </p>
    ),
  },
  {
    heading: "Who to contact?",
    content: (
      <p>
        Questions or comments regarding these practices may be directed to:{" "}
        <a
          href="mailto:info@leap41.ca"
          className="font-medium text-[#2b2b76] underline"
        >
          info@leap41.ca
        </a>
        .
      </p>
    ),
  },
  {
    heading: "Security",
    content: (
      <p>
        Our security practices are continually evolving to ensure that the
        integrity and confidentiality of information and systems are maintained.
        We use up-to-date security safeguards to protect our network and website
        from misuse, alteration, copying, disclosure, destruction, monitoring or
        unauthorized sharing of information and damage.
      </p>
    ),
  },
];

export default function NewPrivacyPolicy() {
  usePageMeta(META);

  return (
    <section className="bg-white px-5 py-12 md:px-20 md:py-20 mt-20">
      <div className="mx-auto max-w-200">
        <h1 className="mb-6 text-[40px] leading-11.5 text-[#201463] md:text-[56px] md:leading-14.5">
          <span className="font-bold">Privacy </span>
          <span className="font-normal text-[rgba(32,20,99,0.7)]">Policy</span>
        </h1>

        <div className="flex flex-col gap-6 md:gap-8">
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
