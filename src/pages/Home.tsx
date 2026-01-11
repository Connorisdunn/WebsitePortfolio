import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Briefcase, User, Settings } from 'lucide-react';

// Define LinkIcon separately to avoid import issues
const LinkIcon = ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
  <svg 
    className={className} 
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Floating decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-20 left-16 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="hidden md:block absolute top-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute bottom-40 left-12 w-5 h-5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="hidden md:block absolute bottom-20 right-16 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Geometric shapes - hidden on mobile */}
      <div className="hidden md:block absolute top-16 right-32 w-8 h-8 border-2 border-orange-400 rotate-45 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-32 left-20 w-6 h-6 bg-red-400 transform rotate-12 animate-pulse"></div>
      
      {/* Main grid layout */}
      <div className="h-screen p-0">
        <div className="h-full relative">
          {/* Top row - WORK (left) and CONNECT (right) */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r-2 md:border-r-4 border-b-2 md:border-b-4 border-black">
            <Link 
              to="/projects"
              className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center hover:from-blue-100 hover:to-blue-200 transition-all duration-500 group relative overflow-hidden p-2"
            >
              {/* Background pattern - smaller on mobile */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-20">
                <Briefcase className="h-6 md:h-12 w-6 md:w-12 text-blue-600 transform rotate-12" />
              </div>
              <div className="absolute bottom-2 md:bottom-6 left-2 md:left-6 opacity-10">
                <Briefcase className="h-4 md:h-8 w-4 md:w-8 text-blue-500 transform -rotate-6" />
              </div>
              
              <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-500 relative z-10 text-center leading-tight">
                PROJECTS
              </h2>
            </Link>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l-2 md:border-l-4 border-b-2 md:border-b-4 border-black">
            <Link 
              to="/connect"
              className="w-full h-full bg-gradient-to-bl from-pink-50 to-pink-100 flex items-center justify-center hover:from-pink-100 hover:to-pink-200 transition-all duration-500 group relative overflow-hidden p-2"
            >
              {/* Background pattern - smaller on mobile */}
              <div className="absolute top-2 md:top-6 left-2 md:left-4 opacity-20">
                <LinkIcon className="h-5 md:h-10 w-5 md:w-10 text-pink-600 transform -rotate-12" />
              </div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-8 opacity-15">
                <LinkIcon className="h-7 md:h-14 w-7 md:w-14 text-pink-500 transform rotate-45" />
              </div>
              
              <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-pink-700 transition-all duration-500 relative z-10 text-center leading-tight">
                CONNECT
              </h2>
            </Link>
          </div>

          {/* Bottom row - ABOUT (left) and EXPERIENCE (right) */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r-2 md:border-r-4 border-t-2 md:border-t-4 border-black">
            <Link 
              to="/about"
              className="w-full h-full bg-gradient-to-tr from-green-50 to-emerald-100 flex items-center justify-center hover:from-green-100 hover:to-emerald-200 transition-all duration-500 group relative overflow-hidden p-2"
            >
              {/* Background pattern - smaller on mobile */}
              <div className="absolute top-2 md:top-8 right-2 md:right-6 opacity-20">
                <User className="h-8 md:h-16 w-8 md:w-16 text-green-600 transform rotate-45" />
              </div>
              <div className="absolute bottom-2 md:bottom-8 left-2 md:left-4 opacity-15">
                <User className="h-3 md:h-6 w-3 md:w-6 text-emerald-500 transform -rotate-12" />
              </div>
              
              <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-green-700 transition-all duration-500 relative z-10 text-center leading-tight">
                ABOUT ME
              </h2>
            </Link>
          </div>
          
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-l-2 md:border-l-4 border-t-2 md:border-t-4 border-black">
            <Link 
              to="/experience"
              className="w-full h-full bg-gradient-to-tl from-purple-50 to-violet-100 flex items-center justify-center hover:from-purple-100 hover:to-violet-200 transition-all duration-500 group relative overflow-hidden p-2"
            >
              {/* Background pattern - smaller on mobile */}
              <div className="absolute top-2 md:top-4 left-2 md:left-8 opacity-20">
                <Settings className="h-5 md:h-10 w-5 md:w-10 text-purple-600 transform -rotate-45" />
              </div>
              <div className="absolute bottom-2 md:bottom-6 right-2 md:right-4 opacity-15">
                <Settings className="h-6 md:h-12 w-6 md:w-12 text-violet-500 transform rotate-12" />
              </div>
              
              <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-purple-700 transition-all duration-500 relative z-10 text-center leading-tight">
                EXPERIENCE
              </h2>
            </Link>
          </div>

          {/* Center yellow logo box - FIXED RESPONSIVE VERSION */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[35vw] max-w-2xl">
            <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-300 border-3 sm:border-4 md:border-6 lg:border-8 border-black p-4 sm:p-6 md:p-10 lg:p-14 xl:p-16 transform hover:rotate-2 hover:scale-105 transition-all duration-300 shadow-2xl relative select-none cursor-default">
              {/* Inner decorative border */}
              <div className="border-2 sm:border-3 md:border-4 border-black p-3 sm:p-5 md:p-8 lg:p-10 bg-yellow-300/50 backdrop-blur-sm">
                <div className="flex items-center justify-center relative">
                  {/* Static decorative dots - responsive sizing */}
                  <div className="absolute -top-1.5 sm:-top-2 md:-top-3 -right-1.5 sm:-right-2 md:-right-3 w-2.5 sm:w-4 md:w-5 h-2.5 sm:h-4 md:h-5 bg-red-500 rounded-full"></div>
                  <div className="absolute -bottom-1.5 sm:-bottom-2 md:-bottom-3 -left-1.5 sm:-left-2 md:-left-3 w-2.5 sm:w-4 md:w-5 h-2.5 sm:h-4 md:h-5 bg-blue-500 rounded-full"></div>
                  
                  {/* Changed to BarChart3 icon for data analyst theme */}
                  <BarChart3 className="h-10 sm:h-14 md:h-20 lg:h-24 xl:h-28 w-10 sm:w-14 md:w-20 lg:w-24 xl:w-28 text-black transform rotate-12 hover:rotate-0 transition-transform duration-300 flex-shrink-0" strokeWidth={2.5} />
                  <div className="ml-3 sm:ml-4 md:ml-5 lg:ml-6 text-black font-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-wider leading-tight">
                    CONNOR DUNN'S<br />PORTFOLIO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
