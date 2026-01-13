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
      companyLogo: "https://1000logos.net/wp-content/uploads/2018/06/BYU-Logo.png",
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
      schoolLogo: "https://seeklogo.com/images/B/brigham-young-university-logo-FAAB219A31-seeklogo.com.png",
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
                <div key={index} className="bg-white border-2 border-black p-6 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-2 border-black p-3 flex items-center justify-center">
                        <img 
                          src={edu.schoolLogo} 
                          alt={`${edu.school} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider text-gray-900 mb-2 leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">
                        {edu.school}
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center text-base sm:text-lg font-semibold uppercase tracking-wider text-gray-600">
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-base sm:text-lg font-semibold uppercase tracking-wider text-gray-600">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
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
                <div key={index} className="bg-white border-2 border-black p-6 sm:p-10 relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-5 sm:mb-7">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-2 border-black p-3 flex items-center justify-center">
                        <img 
                          src={exp.companyLogo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider text-gray-900 mb-2 leading-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-700 mb-2">
                        <ExternalLink className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    {/* Dates and Location */}
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center text-base sm:text-lg font-semibold uppercase tracking-wider text-gray-600">
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-base sm:text-lg font-semibold uppercase tracking-wider text-gray-600">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 sm:space-y-5">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <div className="w-2.5 h-2.5 bg-yellow-300 border border-black mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-base sm:text-lg text-gray-700 leading-relaxed">{bullet}</span>
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
