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
      <div className="pt-8 pb-8 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Link 
              to="/" 
              className="flex items-center text-black hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="h-6 w-6 mr-2" />
              <span className="font-medium uppercase tracking-wider">Back to Home</span>
            </Link>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider text-center">
              ABOUT ME
            </h1>
            <div></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border-2 border-black p-8">
                <h2 className="text-3xl font-bold uppercase tracking-wider mb-6">
                  Data Analyst & Problem Solver
                </h2>
                
                <p className="text-lg leading-relaxed mb-4">
                  I'm a data analyst with a passion for uncovering insights that make a difference. With a bachelor's degree in computer science and a minor in statistics from Brigham Young University. I combine technical precision with a strong sense for visual storytelling; making complex data not just understandable, but impactful.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  Before diving into data, I served as a full-time volunteer representative for The Church of Jesus Christ of Latter-Day Saints in Mexico, where I led and trained teams of up to 50 individuals, conducted humanitarian service, and became fluent in Spanish. That experience shaped my ability to lead with empathy, think strategically, and communicate across cultures; skills I bring into every data-driven project.
                </p>
                
                <p className="text-lg leading-relaxed mb-4">
                  I thrive on the analytical side of data, but I'm equally drawn to the visual narrative it creates. My goal is simple: use data to drive smart decisions, spark innovation, and help shape a better future.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I'm not analyzing data, you'll likely find me on the golf course; enjoying the challenge, focus, and strategy that both data and golf have in common.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border-2 border-black p-8">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-6">
              Skills & Expertise
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-yellow-300 text-black px-4 py-2 font-medium uppercase tracking-wider border-2 border-black text-sm"
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