import React from 'react';

const NotFound = () => {
  return (
    /* fixed inset-0 ensures full screen coverage over header/footer */
    <div className="fixed inset-0 z-[10000] bg-[#3498DB] text-white font-['Montserrat',sans-serif] flex flex-col justify-center overflow-hidden">
      
      {/* Main Content Container - Align Start (Left) */}
      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-20 lg:px-32 flex flex-col items-start">
        
        {/* The Sad Face - Big and Thin */}
        <div className="text-[20vh] md:text-[30vh] font-light leading-none mb-6 select-none">
          :(
        </div>

        {/* The Error Message - Left Aligned with precise spacing */}
        <div className="w-full">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-normal max-w-[90%] mb-12">
            A <span className="text-4xl md:text-6xl font-semibold">404</span> error occurred, 
            <br />
            Page not found, check the URL and try again.
          </h2>

          {/* Action Links - Inline with separator */}
          <div className="flex items-center gap-6 text-lg md:text-xl font-light opacity-90">
            <a 
              href="/" 
              className="hover:underline underline-offset-8 decoration-1"
            >
              Return to home
            </a>
            
            <span className="opacity-40 select-none">|</span>
            
            <button 
              onClick={() => window.history.back()} 
              className="hover:underline underline-offset-8 decoration-1 cursor-pointer bg-transparent border-none text-white p-0"
            >
              Go Back
            </button>
          </div>
        </div>

      </div>

      {/* Global Style Fixes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600');
        body { 
          margin: 0 !important; 
          padding: 0 !important; 
          overflow: hidden !important; 
        }
      `}} />
    </div>
  );
};

export default NotFound;