import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "Python", "SQL", "R", "HTML/CSS", "Javascript", "REACT", "MS Office", 
    "AI PROMPTING", "Git", "Power BI", "Redis", "Tableau", "Supabase", 
    "Tensorflow", "MongoDB / PostgreSQL", "Node.js", "DATABASE DESIGN", "DATA MODELING"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header - GREEN THEME */}
          <div className="bg-gradient-to-tr from-green-50 to-emerald-100 border-2 border-black p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link 
                to="/" 
                className="flex items-center text-black hover:text-green-700 transition-colors"
              >
                <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                <span className="font-bold uppercase tracking-wider text-lg sm:text-xl">Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right leading-tight text-green-700">
                ABOUT ME
              </h1>
              <div className="hidden sm:block"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 mb-12 sm:mb-16">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-yellow-300 border-4 border-black p-2 flex items-center justify-center overflow-hidden max-w-md mx-auto lg:max-w-none">
                <img 
                  src={`${import.meta.env.BASE_URL}image.png`}
                  alt="Connor Dunn" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-white border-2 border-black p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 sm:mb-8">
                  Data Analyst & Problem Solver
                </h2>
                
                <div className="space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-2xl leading-relaxed">
                  <p>
                    I'm a data analyst with a passion for uncovering insights that make a difference. With a bachelor's degree in computer science and a minor in statistics from Brigham Young University. I combine technical precision with a strong sense for visual storytelling; making complex data not just understandable, but impactful.
                  </p>
                  
                  <p>
                    Before diving into data, I served as a full-time volunteer representative for The Church of Jesus Christ of Latter-Day Saints in Mexico, where I led and trained teams of up to 50 individuals, conducted humanitarian service, and became fluent in Spanish. That experience shaped my ability to lead with empathy, think strategically, and communicate across cultures; skills I bring into every data-driven project.
                  </p>
                  
                  <p>
                    I thrive on the analytical side of data, but I'm equally drawn to the visual narrative it creates. My goal is simple: use data to drive smart decisions, spark innovation, and help shape a better future.
                  </p>
                  
                  <p>
                    When I'm not analyzing data, you'll likely find me on the golf course; enjoying the challenge, focus, and strategy that both data and golf have in common.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border-2 border-black p-6 sm:p-10 mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 sm:mb-8">
              Skills & Expertise
            </h3>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-yellow-300 text-black px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-medium uppercase tracking-wider border-2 border-black text-base sm:text-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="bg-yellow-300 border-2 border-black p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
                  Download Resume
                </h3>
                <p className="text-lg sm:text-xl font-medium text-black">
                  Get a copy of my full resume with detailed experience and qualifications.
                </p>
              </div>
              <a
                href={`${import.meta.env.BASE_URL}Resume.pdf`}
                download="Connor_Dunn_Resume.pdf"
                className="flex items-center px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white hover:bg-gray-800 transition-colors border-2 border-black font-medium uppercase tracking-wider text-lg sm:text-xl whitespace-nowrap"
              >
                <svg 
                  className="h-6 w-6 sm:h-7 sm:w-7 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
