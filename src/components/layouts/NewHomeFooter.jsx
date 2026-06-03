import { Link } from "react-router-dom";
import footerLogoWhite from "../../assets/images/new-home/icons/footer-logo-white.png";
import footerGridDeco from "../../assets/images/new-home/footer-grid-deco.png";
import footerTeam from "../../assets/images/new-home/footer-team.webp";
import iconEmail from "../../assets/images/new-home/icons/social-email.svg";
import iconFacebook from "../../assets/images/new-home/icons/social-facebook.svg";
import iconInstagram from "../../assets/images/new-home/icons/social-instagram.svg";
import iconLinkedin from "../../assets/images/new-home/icons/social-linkedin.svg";
import iconTiktok from "../../assets/images/new-home/icons/social-tiktok.svg";
import iconX from "../../assets/images/new-home/icons/social-x.svg";
import { PrimaryCtaButton } from "../PageComponent/NewHome/PrimaryCtaButton.jsx";
import { ArrowRightIcon } from "../PageComponent/NewHome/icons/ArrowRightIcon.jsx";

const COMPANY_LINKS = [
  { label: "About", href: "#about" },
  { label: "Methodology", href: "#methodology" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/leapaisolutions",
    icon: iconLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leapaisolutions/",
    icon: iconInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/leapaisolutions",
    icon: iconFacebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/leapaisolutions/",
    icon: iconTiktok,
  },
  {
    label: "X",
    href: "https://twitter.com/leapaisolutions",
    icon: iconX,
  },
  { label: "Email", href: "mailto:info@leap41.ca", icon: iconEmail },
];

export function NewHomeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#02010c] text-[#f2f6fb]">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 15% 80%, rgba(0,165,236,0.5) 0%, transparent 65%), radial-gradient(ellipse 50% 45% at 50% 100%, rgba(61,81,160,0.55) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 85% 80%, rgba(2,152,95,0.45) 0%, transparent 65%)",
          }}
          aria-hidden
        />
        <img
          src={footerGridDeco}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[7%] top-[1%] hidden h-auto w-[38%] max-w-[555px] opacity-100 lg:block"
        />

        <div className="relative mx-auto max-w-[1280px] px-4 md:px-0">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:py-20">
            <div className="flex flex-col gap-8 pt-4">
              <h2 className="nh-footer-title">
                <span className="block font-bold">Make AI work for</span>
                <span>
                  <span className="font-bold">your </span>
                  <span className="nh-footer-muted">business.</span>
                </span>
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCtaButton capitalize>Schedule Your Free Consultation</PrimaryCtaButton>
                <p className="nh-footer-cta-note whitespace-nowrap">
                  No fluff. No obligation.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-[rgba(242,246,251,0.1)] p-px">
              <img
                src={footerTeam}
                alt="Leap 41 team in conversation"
                className="aspect-[522/392] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 md:px-0">
        <div className="flex flex-col gap-16 py-16 lg:flex-row lg:gap-24">
          <div className="flex w-full max-w-[363px] flex-col gap-6">
            <div className="flex flex-col gap-8">
              <Link to="/" aria-label="Leap 41 home">
                <img src={footerLogoWhite} alt="Leap 41" className="h-9 w-[140px]" />
              </Link>
              <p className="nh-footer-text text-[rgba(242,246,251,0.65)]">
                140 2nd Ave West Cardston, AB T0K0K0 Canada
              </p>
            </div>
            <div>
              <p className="nh-label-sm mb-[13px] text-[rgba(242,246,251,0.5)]">
                Follow us on
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    {...(social.href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[20px] border border-white/80 transition hover:bg-white/10"
                  >
                    <img src={social.icon} alt="" className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="nh-label-sm mb-4 text-[rgba(242,246,251,0.5)]">Company</p>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nh-footer-link cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 flex-1">
            <p className="nh-label-sm mb-4 text-[rgba(242,246,251,0.5)]">Newsletter</p>
            <div className="flex flex-col gap-3">
              <p className="nh-footer-text text-[rgba(242,246,251,0.7)]">
                Field notes from real engagements. No fluff.
              </p>
              <form
                className="flex items-center gap-2 rounded-full border border-[rgba(242,246,251,0.15)] bg-[rgba(242,246,251,0.05)] p-[7px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="nh-footer-text min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[#f2f6fb] placeholder:text-[rgba(242,246,251,0.4)] outline-none"
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f2f6fb] text-[#201463] transition hover:opacity-90"
                  aria-label="Subscribe"
                >
                  <ArrowRightIcon className="h-4 w-4" dark />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="nh-footer-legal flex flex-col items-center justify-between gap-4 border-t border-[rgba(242,246,251,0.1)] pt-6 text-[rgba(242,246,251,0.55)] md:flex-row">
          <p>© {year} Leap 41 AI Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/terms-of-services" className="cursor-pointer hover:text-white">
              Terms
            </Link>
            <Link to="/privacy-policy" className="cursor-pointer hover:text-white">
              Privacy
            </Link>
            <button type="button" className="cursor-pointer hover:text-white">
              EN
            </button>
            <button type="button" className="cursor-pointer hover:text-white">
              FR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
