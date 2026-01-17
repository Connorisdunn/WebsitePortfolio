import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "AP Engineer",
      company: "Tesla",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      location: "Draper, UT",
      period: "April 2025 - Current",
      bullets: [
        "Annotate high-volume visual data to support machine learning model training for Tesla's Autopilot and FSD systems, ensuring accuracy and consistency across datasets.",
        "Analyzed edge cases and labeling patterns to improve data quality, contributing to cleaner inputs for AI model evaluation and iteration.",
        "Partnered with cross-functional teams to refine annotation tools and streamline data workflows, enhancing efficiency and downstream analytics."
      ]
    },
    {
      title: "IT Technician & Analyst",
      company: "BYU OIT Dept.",
      companyLogo: `${import.meta.env.BASE_URL}byu_monogram.svg`,
      location: "Provo, UT",
      period: "August 2023 - April 2025",
      bullets: [
        "Monitored critical online services across BYU and affiliated universities, ensuring uptime and resolving technical issues promptly.",
        "Collaborated with engineers to troubleshoot system failures, minimizing downtime and ensuring seamless service delivery.",
        "Utilized data-driven approaches to identify and address recurring issues, improving system reliability and efficiency."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science, Major of Computer Science, Minor of Statistics",
      school: "Brigham Young University, Provo",
      schoolLogo: `${import.meta.env.BASE_URL}byu_monogram.svg`,
      location: "Provo, UT",
      period: "2020 - 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header - PURPLE THEME */}
          <div className="bg-gradient-to-tl from-purple-50 to-violet-100 border-2 border-black p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link 
                to="/" 
                className="flex items-center text-black hover:text-purple-700 transition-colors"
              >
                <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                <span className="font-bold uppercase tracking-wider text-lg sm:text-xl">Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right leading-tight text-purple-700">
                EXPERIENCE
              </h1>
              <div className="hidden sm:block"></div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 sm:mb-8 pb-2 sm:pb-4 border-b-2 border-black text-gray-900">
              Education
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white border-2 border-black p-8 sm:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Logo - MUCH BIGGER */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white border-2 border-black p-6 flex items-center justify-center">
                        <img 
                          src={edu.schoolLogo} 
                          alt={`${edu.school} logo`}
                          className="w-[150%] h-[150%] object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-gray-900 mb-3 leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
                        {edu.school}
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center text-lg sm:text-xl font-semibold uppercase tracking-wider text-gray-600">
                        <Calendar className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-lg sm:text-xl font-semibold uppercase tracking-wider text-gray-600">
                        <MapPin className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 sm:mb-8 pb-2 sm:pb-4 border-b-2 border-black text-gray-900">
              Professional Experience
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white border-2 border-black p-8 sm:p-12 relative">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
                    {/* Logo - MUCH BIGGER */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white border-2 border-black p-6 flex items-center justify-center">
                        <img 
                          src={exp.companyLogo} 
                          alt={`${exp.company} logo`}
                          className="w-[150%] h-[150%] object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-gray-900 mb-3 leading-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
                        <ExternalLink className="h-7 w-7 sm:h-8 sm:w-8 mr-3" />
                        {exp.company}
                      </div>
                    </div>
                    
                    {/* Dates and Location */}
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center text-lg sm:text-xl font-semibold uppercase tracking-wider text-gray-600">
                        <Calendar className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-lg sm:text-xl font-semibold uppercase tracking-wider text-gray-600">
                        <MapPin className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bullets - LARGER TEXT & SPACING */}
                  <ul className="space-y-6">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <div className="w-3 h-3 bg-yellow-300 border border-black mt-2.5 mr-5 flex-shrink-0"></div>
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
