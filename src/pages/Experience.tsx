import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "AP Engineer",
      company: "Tesla",
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
      location: "Provo, UT",
      period: "2020 - 2025"
    }
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
              EXPERIENCE
            </h1>
            <div></div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-8 pb-4 border-b-2 border-black">
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white border-2 border-black p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wider text-black mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-lg font-semibold text-gray-700 mb-2">
                        {edu.school}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center text-sm font-medium uppercase tracking-wider text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-sm font-medium uppercase tracking-wider text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
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
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-8 pb-4 border-b-2 border-black">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white border-2 border-black p-8 relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-wider text-black mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-lg font-semibold text-gray-700 mb-2">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center text-sm font-medium uppercase tracking-wider text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm font-medium uppercase tracking-wider text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-300 border border-black mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{bullet}</span>
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