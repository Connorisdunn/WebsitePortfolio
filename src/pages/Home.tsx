import React from 'react';
import { Link } from 'react-router-dom';
import { Pen, Briefcase, Link as LinkIcon, User, Settings } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-16 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-12 w-5 h-5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-16 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-16 right-32 w-8 h-8 border-2 border-orange-400 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-red-400 transform rotate-12 animate-pulse"></div>
      
      {/* Main grid layout */}
      <div className="h-screen p-0">
        <div className="h-full relative">
          {/* Top row - WORK (left) and CONNECT (right) */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r-4 border-b-4 border-black">
            <Link 
              to="/projects"
              className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center hover:from-blue-100 hover:to-blue-200 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-4 right-4 opacity-20">
                <Briefcase className="h-12 w-12 text-blue-600 transform rotate-12" />
              </div>
              <div className="absolute bottom-6 left-6 opacity-10">
                <Briefcase className="h-8 w-8 text-blue-500 transform -rotate-6" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-500 relative z-10">
                PROJECTS
              </h2>
            </Link>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l-4 border-b-4 border-black">
            <Link 
              to="/connect"
              className="w-full h-full bg-gradient-to-bl from-pink-50 to-pink-100 flex items-center justify-center hover:from-pink-100 hover:to-pink-200 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-6 left-4 opacity-20">
                <LinkIcon className="h-10 w-10 text-pink-600 transform -rotate-12" />
              </div>
              <div className="absolute bottom-4 right-8 opacity-15">
                <LinkIcon className="h-14 w-14 text-pink-500 transform rotate-45" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-pink-700 transition-all duration-500 relative z-10">
                CONNECT
              </h2>
            </Link>
          </div>

          {/* Bottom row - ABOUT (left) and EXPERIENCE (right) */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r-4 border-t-4 border-black">
            <Link 
              to="/about"
              className="w-full h-full bg-gradient-to-tr from-green-50 to-emerald-100 flex items-center justify-center hover:from-green-100 hover:to-emerald-200 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-8 right-6 opacity-20">
                <User className="h-16 w-16 text-green-600 transform rotate-45" />
              </div>
              <div className="absolute bottom-8 left-4 opacity-15">
                <User className="h-6 w-6 text-emerald-500 transform -rotate-12" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-green-700 transition-all duration-500 relative z-10">
                ABOUT ME
              </h2>
            </Link>
          </div>
          
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-l-4 border-t-4 border-black">
            <Link 
              to="/experience"
              className="w-full h-full bg-gradient-to-tl from-purple-50 to-violet-100 flex items-center justify-center hover:from-purple-100 hover:to-violet-200 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-4 left-8 opacity-20">
                <Settings className="h-10 w-10 text-purple-600 transform -rotate-45" />
              </div>
              <div className="absolute bottom-6 right-4 opacity-15">
                <Settings className="h-12 w-12 text-violet-500 transform rotate-12" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-gray-800 group-hover:scale-110 group-hover:text-purple-700 transition-all duration-500 relative z-10">
                EXPERIENCE
              </h2>
            </Link>
          </div>

          {/* Center yellow logo box - smaller and more compact */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-300 border-4 border-black p-3 transform hover:rotate-2 hover:scale-105 transition-all duration-300 shadow-2xl relative select-none cursor-default">
              {/* Inner decorative border */}
              <div className="border-2 border-black p-2 bg-yellow-300/50 backdrop-blur-sm">
                <div className="flex items-center justify-center relative">
                  {/* Static decorative dots */}
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  
                  <Pen className="h-6 w-6 text-black transform rotate-12 hover:rotate-45 transition-transform duration-300" strokeWidth={3} />
                  <div className="ml-2 text-black font-black text-sm tracking-wider">
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