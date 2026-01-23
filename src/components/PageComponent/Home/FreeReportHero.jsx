import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building2, Mail, Phone, ArrowRight, Lock } from "lucide-react";
import overlayBlue from '../../../assets/images/home/Leap_hero/overlay_blue.svg';
import overlayGreen from '../../../assets/images/home/Leap_hero/overlay_green.svg';
import CheckGreen from '../../../assets/images/home/Leap_hero/check_green.svg';
import StarBlue from '../../../assets/images/home/Leap_hero/star_blue.svg';

export default function FreeReportHero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    countryCode: 'US/CA (+1)',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Console log the form data
      console.log('Form submitted with data:', {
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
        navigate('/your-free-report');
      }, 1000);
    }
  };
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-16">

<div className="absolute inset-0 opacity-50" style={{ 
        backgroundImage: "linear-gradient(90deg, rgba(241, 245, 249, 1) 1.0625%, rgba(241, 245, 249, 0) 1.5625%), linear-gradient(180deg, rgba(241, 245, 249, 1) 1.5625%, rgba(241, 245, 249, 0) 1.5625%)" 
      }} />
<div className='relative max-w-[1640px] mx-auto h-full w-full'>
      <img src={overlayBlue} alt="overlayBlue" className="absolute right-[0px] top-[-100px]" />
      <img src={overlayGreen} alt="overlayGreen" className="absolute left-0 bottom-[-100px]" />
      {/* <div className="pointer-events-none absolute rounded-full left-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_55%)]" /> */}
      {/* <div className="pointer-events-none absolute right-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.18),_transparent_55%)]" /> */}
      
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:flex-row md:items-start md:justify-between md:px-8">
        {/* Left copy */}
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white/70 px-4 py-[6px] justify-center text-[#3e6db5] shadow-sm">
             <img src={StarBlue} alt="StarBlue" className="h-[14px] w-[14px]" />
            <span className="text-[12px] font-[700] leading-[16px] uppercase tracking-[0.6px] pt-[1px] text-[#2B2B76]">Free 7 Pillars Report</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-[36px] font-[800] leading-[39px] text-[#2b2b76] md:text-[60px] md:leading-[52px]">
              <span className="block">Make the Right AI</span>
              <span className="block">Decisions</span>
              <span className="block bg-gradient-to-r from-[#3E6DB5] to-[#2B2B76] bg-clip-text text-transparent">Before You Spend.</span>
            </h1>
            <p className="text-[18px] font-[700] uppercase tracking-[0.12em] text-[#3e6db5] md:text-[20px] md:leading-[25px]">
              The free 7 pillars of AI implementation written for executive
            </p>
          </div>

          <p className="text-[20px] font-[500] leading-[26px] text-[#475569] md:text-[20px] md:leading-[28px]">
            A practical, business-first framework that shows mid-market leaders where AI actually
            creates ROI before investing in tools, vendors, or pilots.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Badge text="No Credit Card Required" />
            <Badge text="Instant PDF Access" />
            <Badge text="Read in 60 Minutes" />
          </div>
        </div>

        {/* Right form card */}
        <div className="w-full max-w-md">
          <div className="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-white shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)]">
            <div className="h-2 bg-gradient-to-r from-[#3e6db5] to-[#059669]" />
            <div className="space-y-6 px-6 py-6 md:px-8 md:py-8">
              <div className="space-y-1">
                <h3 className="text-[24px] font-[800] leading-[28px] text-[#2b2b76]">
                  Get the Report
                </h3>
                <p className="text-[14px] font-[600] leading-[16px] text-[#64748b]">
                  Join 2,000+ executives leading the AI era.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Field
                  label="Name"
                  icon={User}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  error={errors.name}
                />
                <Field
                  label="Company Name"
                  icon={Building2}
                  placeholder="Acme Corp"
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  error={errors.companyName}
                />
                <Field
                  label="Work Email"
                  icon={Mail}
                  placeholder="john@company.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                />

                <div className="space-y-2">
                  <Label icon={Phone} text="Phone Number" />
                  <div className="flex gap-3">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleChange('countryCode', e.target.value)}
                      className="w-32 rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-[14px] font-[500] text-[#1e293b] outline-none"
                    >
                      <option>US/CA (+1)</option>
                      <option>UK (+44)</option>
                      <option>EU (+49)</option>
                    </select>
                    <div className="flex-1">
                      <input
                        type="tel"
                        placeholder="555-0123"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full rounded-[8px] border px-3 py-2 text-[14px] font-[500] text-[#0f172a] outline-none ${
                          errors.phone
                            ? 'border-red-300 bg-red-50'
                            : 'border-[#e2e8f0] bg-[#f8fafc]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[12px] text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn_primary mt-2 flex w-full items-center justify-center gap-2 !py-2 !rounded-[8px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Get Your Free Report'}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>

                <div className="flex items-center justify-center gap-2 pt-1 text-[14px] font-[600] leading-[16px] text-[#3e6db5]">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  <span>100% secure. No spam.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function Label({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-[14px] font-[700] leading-[16px] uppercase tracking-[0.1em] text-[#2b2b76]">
      <Icon className="h-4 w-4 text-[#3e6db5]" aria-hidden />
      <span>{text}</span>
    </div>
  );
}

function Field({ label, icon, placeholder, type = "text", value, onChange, error }) {
  return (
    <div className="space-y-2">
      <Label icon={icon} text={label} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-[8px] border px-3 py-2 text-[14px] font-[500] leading-[20px] placeholder:text-[#94A3B8] outline-none ${
          error
            ? 'border-red-300 bg-red-50 focus-visible:ring-2 focus-visible:ring-red-200'
            : 'border-[#e2e8f0] bg-[#f8fafc] focus-visible:ring-2 focus-visible:ring-[#3e6db5]'
        }`}
      />
      {error && <p className="text-[12px] text-red-600">{error}</p>}
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-flex relative h-5 w-5 items-center justify-center">
        <img src={CheckGreen} alt="CheckGreen" className="h-full w-full" />
      </span>
      <span className="text-[#64748b] text-[14px] md:text-[16px] font-[500] leading-[20px]">{text}</span>
    </div>
  );
}

