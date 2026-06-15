import { useTranslation } from "react-i18next";

import footerLogoWhite from "../../assets/images/new-home/icons/footer-logo-white.svg";

import footerGridDeco from "../../assets/images/new-home/footer-grid-deco.webp";

import footerTeam from "../../assets/images/new-home/footer-team.webp";

import iconEmail from "../../assets/images/new-home/icons/social-email.svg";

import iconFacebook from "../../assets/images/new-home/icons/social-facebook.png";

import iconInstagram from "../../assets/images/new-home/icons/social-instagram.png";

import iconLinkedin from "../../assets/images/new-home/icons/social-linkedin.png";

import iconTiktok from "../../assets/images/new-home/icons/social-tiktok.png";

import iconX from "../../assets/images/new-home/icons/social-x.svg";

import { PrimaryCtaButton } from "../PageComponent/NewHome/PrimaryCtaButton.jsx";

import { ArrowRightIcon } from "../PageComponent/NewHome/icons/ArrowRightIcon.jsx";

import { LocaleLink } from "./LocaleLink.jsx";

import { LanguageSwitcher } from "./LanguageSwitcher.jsx";



const COMPANY_LINKS = [

  { labelKey: "nav.about", to: "/about" },

  { labelKey: "nav.methodology", to: "/methodology" },

  { labelKey: "nav.caseStudies", to: "/case-studies" },

  { labelKey: "nav.insights", to: "/insights" },

  { labelKey: "nav.contact", to: "/contact" },

];



const SOCIAL_LINKS = [

  {

    label: "LinkedIn",

    href: "https://linkedin.com/company/leapaisolutions",

    icon: iconLinkedin,

    iconClass: "h-4 w-4 object-contain lg:h-4 lg:w-4",

    iconClassMobile: "h-3 w-3 object-contain",

  },

  // {

  //   label: "Instagram",

  //   href: "https://www.instagram.com/leapaisolutions/",

  //   icon: iconInstagram,

  //   iconClass: "h-4 w-4 object-contain",

  //   iconClassMobile: "h-3 w-3 object-contain",

  // },

  // {

  //   label: "Facebook",

  //   href: "https://www.facebook.com/leapaisolutions",

  //   icon: iconFacebook,

  //   iconClass: "h-4 w-[9px] object-contain",

  //   iconClassMobile: "h-3 w-[7px] object-contain",

  // },

  // {

  //   label: "TikTok",

  //   href: "https://www.tiktok.com/leapaisolutions/",

  //   icon: iconTiktok,

  //   iconClass: "h-4 w-[14px] object-contain",

  //   iconClassMobile: "h-3 w-[11px] object-contain",

  // },

  // {

  //   label: "X",

  //   href: "https://twitter.com/leapaisolutions",

  //   icon: iconX,

  //   iconClass: "size-[12.8px]",

  //   iconClassMobile: "size-[10.24px]",

  // },

  {

    label: "Email",

    href: "mailto:info@leap41.ca",

    icon: iconEmail,

    iconClass: "h-4 w-4",

    iconClassMobile: "h-3 w-3",

  },

];



const FOOTER_MOBILE_CTA =

  "max-lg:gap-2 max-lg:self-start max-lg:!px-5 max-lg:!py-3.5 max-lg:text-sm max-lg:font-semibold max-lg:leading-[22px] max-lg:whitespace-nowrap max-lg:[&>span:last-child]:!size-6 max-lg:[&>span:last-child]:!min-w-6 max-lg:[&>span:last-child]:!rounded-xl max-lg:[&>span:last-child_svg]:!h-3 max-lg:[&>span:last-child_svg]:!w-3";



export function NewHomeFooter() {

  const { t } = useTranslation("common");

  const year = new Date().getFullYear();



  return (

    <footer className="flex w-full flex-col items-center bg-[#02010c] text-[#f2f6fb]">

      <div className="relative w-full overflow-hidden">

        <div className="nh-footer-gradient" aria-hidden />



        <div className="relative w-full px-5 lg:px-20">

          <div className="mx-auto max-w-[1280px]">

            <div className="flex flex-col gap-8 py-12 max-lg:pt-4 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:py-20">

              <div className="flex flex-col gap-6 pt-4 lg:gap-8">

                <h2 className="nh-footer-title">

                  <span className="lg:hidden">

                    <span className="font-bold">{t("footer.titleBold")}</span>

                    <span className="nh-footer-muted">{t("footer.titleMuted")}</span>

                  </span>

                  <span className="hidden lg:contents">

                    <span className="nh-footer-title-line">{t("footer.titleLine")}</span>

                    <span>

                      <span className="font-bold">{t("footer.titleBoldDesktop")}</span>

                      <span className="nh-footer-muted">{t("footer.titleMuted")}</span>

                    </span>

                  </span>

                </h2>

                <div className="flex flex-col items-start gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4">

                  <PrimaryCtaButton

                    capitalize

                    className={`${FOOTER_MOBILE_CTA} footer-desktop-cta`}

                  >

                    {t("common:cta.scheduleConsultation")}

                  </PrimaryCtaButton>

                  <p className="nh-footer-cta-note lg:whitespace-nowrap">

                    {t("footer.ctaNote")}

                  </p>

                </div>

              </div>



              <div className="nh-footer-image-wrap relative w-full shrink-0">

                <div className="nh-footer-grid-deco" aria-hidden>

                  <img src={footerGridDeco} alt="" />

                </div>

                <div className="relative z-10 overflow-hidden rounded-[20px] border border-[rgba(242,246,251,0.1)] p-px">

                  <img

                    src={footerTeam}

                    alt={t("footer.teamImageAlt")}

                    className="aspect-[522/392] w-full object-cover"

                  />

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="relative mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-0 lg:py-16">

          <div className="flex flex-col gap-8 lg:gap-16">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-24">

              <div className="flex w-full flex-col gap-6 lg:max-w-[363px] lg:shrink-0 lg:gap-8">

                <div className="flex flex-col gap-6 lg:gap-8">

                  <LocaleLink to="/" aria-label={t("aria.home")}>

                    <img

                      src={footerLogoWhite}

                      alt="Leap 41"

                      className="h-[30px] w-[117px] lg:h-9 lg:w-[140px]"

                    />

                  </LocaleLink>

                  <p className="nh-footer-address">{t("footer.address")}</p>

                </div>

                <div className="flex flex-col gap-4 lg:gap-[13px]">

                  <p className="nh-footer-label">{t("footer.followUs")}</p>

                  <div className="flex flex-wrap gap-2">

                    {SOCIAL_LINKS.map((social) => (

                      <a

                        key={social.label}

                        href={social.href}

                        aria-label={social.label}

                        {...(social.href.startsWith("mailto:")

                          ? {}

                          : { target: "_blank", rel: "noopener noreferrer" })}

                        className="flex size-8 cursor-pointer items-center justify-center rounded-2xl border border-white transition hover:bg-white/10 lg:h-10 lg:w-10 lg:rounded-[20px] lg:border-[0.8px]"

                      >

                        <img

                          src={social.icon}

                          alt=""

                          className={`${social.iconClassMobile} lg:hidden`}

                          aria-hidden

                        />

                        <img

                          src={social.icon}

                          alt=""

                          className={`hidden lg:block ${social.iconClass}`}

                          aria-hidden

                        />

                      </a>

                    ))}

                  </div>

                </div>

              </div>



              <div className="flex w-full flex-col gap-4 lg:min-w-0 lg:flex-1">

                <p className="nh-footer-label">{t("footer.company")}</p>

                <ul className="flex flex-col gap-2 lg:gap-3">

                  {COMPANY_LINKS.map((item) => (

                    <li key={item.labelKey}>

                      <LocaleLink to={item.to} className="nh-footer-link cursor-pointer">

                        {t(item.labelKey)}

                      </LocaleLink>

                    </li>

                  ))}

                </ul>

              </div>



              <div className="flex w-full flex-col gap-4 lg:min-w-0 lg:flex-1">

                <p className="nh-footer-label">{t("footer.newsletter")}</p>

                <div className="flex flex-col gap-4 lg:gap-3">

                  <p className="nh-footer-newsletter-text">{t("footer.newsletterText")}</p>

                  <form

                    className="flex w-full items-center gap-2 rounded-full border border-[rgba(242,246,251,0.15)] bg-[rgba(242,246,251,0.05)] p-[6.8px] lg:p-[7px]"

                    onSubmit={(e) => e.preventDefault()}

                  >

                    <input

                      type="email"

                      placeholder={t("footer.emailPlaceholder")}

                      className="nh-footer-text min-w-0 flex-1 bg-transparent px-3 py-2 text-[#f2f6fb] placeholder:text-[rgba(242,246,251,0.4)] outline-none lg:py-2.5"

                    />

                    <button

                      type="submit"

                      className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f2f6fb] text-[#201463] transition hover:opacity-90 lg:h-9 lg:w-9"

                      aria-label={t("aria.subscribe")}

                    >

                      <ArrowRightIcon className="h-4 w-4" dark />

                    </button>

                  </form>

                </div>

              </div>

            </div>



            <div className="flex flex-col gap-4 border-t border-[rgba(242,246,251,0.1)] pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:pt-6">

              <p className="nh-footer-legal">{t("footer.copyright", { year })}</p>

              <div className="flex flex-wrap items-center gap-5 lg:gap-5">

                <LocaleLink

                  to="/terms-of-services"

                  className="nh-footer-legal-link cursor-pointer transition hover:text-white"

                >

                  {t("footer.terms")}

                </LocaleLink>

                <LocaleLink

                  to="/privacy-policy"

                  className="nh-footer-legal-link cursor-pointer transition hover:text-white"

                >

                  {t("footer.privacy")}

                </LocaleLink>

                <LanguageSwitcher variant="footer" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}

