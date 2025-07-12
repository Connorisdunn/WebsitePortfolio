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
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <Link 
              to="/" 
              className="flex items-center text-black hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              <span className="font-medium uppercase tracking-wider text-sm sm:text-base">Back to Home</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right leading-tight">
              ABOUT ME
            </h1>
            <div className="hidden sm:block"></div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-12 sm:mb-16">
            {/* Profile Image */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-yellow-300 border-4 border-black p-2 flex items-center justify-center overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}image.png`}
                  alt="Connor Dunn" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio */}
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-white border-2 border-black p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4 sm:mb-6">
                  Data Analyst & Problem Solver
                </h2>
                
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <p className="leading-relaxed">
                    I'm a data analyst with a passion for uncovering insights that make a difference. With a bachelor's degree in computer science and a minor in statistics from Brigham Young University. I combine technical precision with a strong sense for visual storytelling; making complex data not just understandable, but impactful.
                  </p>
                  
                  <p className="leading-relaxed">
                    Before diving into data, I served as a full-time volunteer representative for The Church of Jesus Christ of Latter-Day Saints in Mexico, where I led and trained teams of up to 50 individuals, conducted humanitarian service, and became fluent in Spanish. That experience shaped my ability to lead with empathy, think strategically, and communicate across cultures; skills I bring into every data-driven project.
                  </p>
                  
                  <p className="leading-relaxed">
                    I thrive on the analytical side of data, but I'm equally drawn to the visual narrative it creates. My goal is simple: use data to drive smart decisions, spark innovation, and help shape a better future.
                  </p>
                  
                  <p className="leading-relaxed">
                    When I'm not analyzing data, you'll likely find me on the golf course; enjoying the challenge, focus, and strategy that both data and golf have in common.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border-2 border-black p-4 sm:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 sm:mb-6">
              Skills & Expertise
            </h3>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-yellow-300 text-black px-2 sm:px-3 md:px-4 py-1 sm:py-2 font-medium uppercase tracking-wider border-2 border-black text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
