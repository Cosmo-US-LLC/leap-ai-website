import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, ArrowLeft } from 'lucide-react';
import CheckLogo from '../assets/images/home/Leap_hero/check_green.svg';

export function BookYourConsultation() {
  const handleBookConsultation = () => {
    // TODO: Implement booking functionality
    // This could open a calendar widget, redirect to a booking page, etc.
    console.log('Book consultation clicked');
    window.open('https://insights.leap41.ca/consultation', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-white">
          <div className="absolute inset-0 opacity-50" style={{ 
        backgroundImage: "linear-gradient(90deg, rgba(241, 245, 249, 1) 1.1625%, rgba(241, 245, 249, 0) 1.5625%), linear-gradient(180deg, rgba(241, 245, 249, 1) 1.5625%, rgba(241, 245, 249, 0) 1.5625%)" 
      }} />
      {/* Main content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-128px-67px)] w-full max-w-[1280px] flex-col items-center justify-center px-4 py-12 md:px-8">
        <div className="relative z-10 flex w-full max-w-[576px] flex-col items-center">
          {/* Checkmark icon */}
          <div className="mb-12 flex h-24 w-24 items-center justify-center rounded-full bg-[rgba(5,150,105,0.1)] md:mb-10">
            <img src={CheckLogo} alt="Check" className="h-12 w-12" />
          </div>

          {/* Heading */}
          <h1 className="mb-8 text-center text-[28px] font-[800] leading-[36px] text-[#2b2b76] md:mb-8 md:text-[36px] md:leading-[40px]">
            Want clarity on <br className="md:hidden"/>  how this {""}
            <br className="max-md:hidden"/>
            applies to <br className="md:hidden"/> your business?
          </h1>

          {/* Description box */}
          <div className="mb-8 w-full rounded-[24px] max-w-[536px] border border-[#f1f5f9] bg-[#f8fafc] px-6 py-8 md:mb-12 md:px-8">
            <p className="text-center text-[20px] font-[500] leading-[28px] text-[#475569] md:text-[20px]">
              Book a free 30-minute strategy consultation to
              <br className="max-md:hidden"/>
              review your priorities, risks, and next best steps.
            </p>
          </div>

          {/* Book consultation button */}
          <button
            onClick={handleBookConsultation}
            className="mb-6 flex h-[60px] hover:cursor-pointer w-full max-w-[365px] items-center justify-center gap-3 rounded-[9999px] bg-[#3e6db5] px-6 text-[18px] font-[800] leading-[28px] text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#2d5a9d] md:mb-8"
          >
            <Calendar className="h-5 w-5" aria-hidden />
            <span>Book your free consultation</span>
          </button>

          {/* Back to Leap AI link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[14px] font-[700] leading-[20px] text-[#94a3b8] transition-colors hover:text-[#64748b]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            <span>Back to Leap AI</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
