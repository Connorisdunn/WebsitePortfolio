import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Wedding Venue Booking Site",
      description: "A fully responsive website that allows users to explore wedding venues, view detailed photo galleries, select wedding packages, and book dates using a streamlined and intuitive interface. Features include dynamic venue pages, a contact form, and real-time backend integration for booking management through a database.",
      tech: ["React", "TypeScript", "SQL", "Supabase", "Tailwind CSS", "Vite", "Node.js", "Git"],
      image: `${import.meta.env.BASE_URL}files_2819202-1751148011169-image.png`,
      githubUrl: "https://github.com/Connorisdunn/WeddingVenueBookingSite"
    },
    {
      title: "Now I Can Website Redesign",
      description: "Collaborated with a nonprofit to redesign and rebuild their website for improved usability, accessibility, and visual appeal. Features include multi-step booking forms, filterable staff and schedule displays, responsive layouts, and consistent branding using a kid-friendly design system.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostCSS"],
      image: `${import.meta.env.BASE_URL}files_2819202-1751148074689-image.png`,
      githubUrl: "https://github.com/Connorisdunn/NowICan"
    },
    {
      title: "Chain Golf Store – AI Database Assistant",
      description: "Academic project focused on designing a complete database schema for a golf retail store and integrating it with OpenAI's language model to generate and execute natural language-to-SQL queries. Demonstrates schema design, data population, and intelligent query generation.",
      tech: ["Python", "SQL", "OpenAI API", "Database Design", "AI Prompting", "Data Modeling"],
      image: `${import.meta.env.BASE_URL}schema.png`,
      githubUrl: "https://github.com/Connorisdunn/ChainGolfStore"
    },
    {
      title: "BYU Course Catalog Redesign",
      description: "Redesigned the outdated BYU course catalog interface to improve clarity, searchability, and user experience. The new version features dynamic course filters, sorting, favoriting, and modern design elements to help students quickly find and compare classes.",
      tech: ["React", "Tailwind CSS", "Vite", "JavaScript", "Git", "Node.js", "PostCSS"],
      image: `${import.meta.env.BASE_URL}files_2819202-1751148180289-image.png`,
      githubUrl: "https://github.com/Connorisdunn/betterbyucatalog"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <Link 
              to="/" 
              className="flex items-center text-black hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              <span className="font-medium uppercase tracking-wider text-sm sm:text-base">Back to Home</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right">
              PROJECTS
            </h1>
            <div className="hidden sm:block"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-black group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden border-b-2 border-black">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-3 sm:mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-yellow-300 text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium uppercase tracking-wider border border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 sm:px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors border-2 border-black font-medium uppercase tracking-wider text-xs sm:text-sm"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
