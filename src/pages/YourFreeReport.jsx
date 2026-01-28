import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Loader2, CheckCircle2 } from 'lucide-react';
// Import the PDF file from assets
import pdfFile from '../assets/pdf/7 Pillars Report.pdf';

export function YourFreeReport() {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleDownload = async () => {
    const fileName = '7 Pillars Report.pdf';
    
    setIsDownloading(true);

    try {
      // Fetch the local PDF file
      const response = await fetch(pdfFile);
      
      if (!response.ok) {
        throw new Error('Failed to fetch PDF file');
      }

      // Convert response to blob
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Detect iOS Safari
      const userAgent = navigator.userAgent;
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      const isSafari = /Safari/i.test(userAgent) && !/CriOS|FxiOS|EdgiOS/i.test(userAgent);
      const isIOSSafari = isIOS && isSafari;

      if (isIOSSafari) {
        // For iOS Safari, convert blob to base64 data URL to force download
        // Data URLs sometimes work better than blob URLs on iOS Safari
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result;
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = fileName;
          link.setAttribute('download', fileName);
          link.target = '_self';
          link.style.display = 'none';
          
          document.body.appendChild(link);
          
          // Trigger click immediately
          link.click();
          
          // Clean up
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
          }, 500);
          
          setIsDownloading(false);
          setIsSuccessful(true);
          
          // Navigate to consultation page after 2 seconds
          setTimeout(() => {
            navigate('/meet'); 
          }, 2000);
        };
        reader.onerror = () => {
          // Fallback to blob URL if data URL conversion fails
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          link.target = '_self';
          link.style.display = 'none';
          
          document.body.appendChild(link);
          link.click();
          
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
          }, 500);
          
          setIsDownloading(false);
          setIsSuccessful(true);
          
          setTimeout(() => {
            navigate('/meet'); 
          }, 2000);
        };
        reader.readAsDataURL(blob);
      } else {
        // For other browsers, use standard blob download
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        link.style.display = 'none';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up blob URL
        window.URL.revokeObjectURL(blobUrl);
        
        // Show successful state
        setIsDownloading(false);
        setIsSuccessful(true);
        
        // Navigate to consultation page after 2 seconds
        setTimeout(() => {
          navigate('/meet'); 
        }, 2000);
      }
      
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download the report. Please try again later.');
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 opacity-50" style={{ 
        backgroundImage: "linear-gradient(90deg, rgba(241, 245, 249, 1) 1.1625%, rgba(241, 245, 249, 0) 1.5625%), linear-gradient(180deg, rgba(241, 245, 249, 1) 1.5625%, rgba(241, 245, 249, 0) 1.5625%)" 
      }} /> */}
      
      {/* Blur overlay - responsive size */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(62,109,181,0.2)] blur-[30px] md:h-[600px] md:w-[600px] md:blur-[50px]" />
      
      {/* Main content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-128px-67px)] w-full max-w-[1280px] flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16">
        <div className="relative z-10 flex w-full max-w-[672px] flex-col items-center">
          {/* Heading */}
          <h1 className="mb-4 text-center text-[30px] font-[800] leading-[37px] text-[#2b2b76] md:mb-[16px] md:text-[44px] md:leading-[48px]">
            Your Free Report is ready.
          </h1>
          
          {/* Description */}
          <p className="mb-8 text-center text-[20px] font-[500] text-[#475569] md:mb-[40px] md:text-[20px] leading-[32.5px]">
            This framework will help you identify where AI creates real
            <br className="hidden md:block" />
            {' '}business leverage and where it doesn't.
          </p>
          
          {/* Book cover card */}
          <div className="relative mb-8 md:mb-[50px]">
            {/* Green blur behind card - responsive size */}
            <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(5,150,105,0.3)] blur-[24px] md:h-[256px] md:w-[256px] md:blur-[32px]" />
            
            {/* Book cover - responsive sizing */}
            <div className="relative h-[240px] w-[165px] rounded-br-[4.5px] rounded-tr-[4.5px] border-l-[2.5px] border-[#3e6db5] bg-[#2b2b76] shadow-[7.52px_7.52px_22.559px_0px_rgba(0,0,0,0.3)] md:h-[303px] md:w-[209px] md:border-l-[3px]">
              {/* White overlay on left */}
              <div className="absolute left-[1.8px] top-0 bottom-0 w-[4px] bg-[rgba(255,255,255,0.2)] md:left-[2.22px] md:w-[5.23px]" />
              
              {/* Content - responsive padding and gap */}
              <div className="flex h-full flex-col items-center justify-center gap-4 px-4 py-6 md:gap-[27px] md:px-[33px] md:py-10">
                <h2 className="text-center text-[17px] font-[800] leading-[24px] text-white md:text-[18px] md:leading-[24px]">
                  The 7 Strategic Pillars Your Company Needs to Win in the Age of AI
                </h2>
                
                {/* Green divider */}
                <div className="h-[4px] w-[35px] bg-[#059669] md:h-[5.41px] md:w-[41.84px] relative z-10" />
                
                <p className="text-center text-[10px] font-[400] leading-[13px] uppercase tracking-[1px] text-[#cbd5e1] md:text-[12px] md:leading-[15px] md:tracking-[1.35px]">
                  The CEO's Guide to AI Transformation
                </p>
              </div>
              
              {/* Logo at bottom (optional - you can add if you have the asset) */}
              <div className="absolute bottom-[18px] left-1/2 h-[18px] w-[55px] -translate-x-1/2 opacity-50 md:bottom-[22px] md:h-[22px] md:w-[67px]">
                {/* Add logo image here if needed */}
              </div>
            </div>
          </div>
          
          {/* Download button - responsive sizing */}
          <button
            onClick={handleDownload}
            disabled={isDownloading || isSuccessful}
            className="btn_primary mb-4 flex  items-center justify-center gap-2 !rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] disabled:opacity-70 disabled:cursor-not-allowed md:mb-7 md:h-[68px] md:gap-3"
          >
            {isDownloading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin md:h-6 md:w-6" aria-hidden />
                <span className="text-[20px] font-[700] leading-[24px] md:text-[20px] md:leading-[20px]">Downloading...</span>
              </>
            ) : isSuccessful ? (
              <>
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                <span className="text-[20px] font-[700] leading-[24px] md:text-[20px] md:leading-[20px]">PDF downloads successfully</span>
              </>
            ) : (
              <>
                <Download className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                <span className="text-[20px] font-[700] leading-[24px] md:text-[20px] md:leading-[20px]">Download the report</span>
              </>
            )}
          </button>
          
          {/* Return to Home link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[14px] font-[700] leading-[20px] text-[#94a3b8] transition-colors hover:text-[#64748b]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
