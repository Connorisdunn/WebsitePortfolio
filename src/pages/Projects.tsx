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
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header - BLUE THEME */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-black p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link 
                to="/" 
                className="flex items-center text-black hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                <span className="font-bold uppercase tracking-wider text-lg sm:text-xl">Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right text-blue-700">
                PROJECTS
              </h1>
              <div className="hidden sm:block"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider mb-4 sm:mb-5 leading-tight text-gray-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-5 leading-relaxed text-base sm:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 mb-6 sm:mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-yellow-300 text-black px-4 sm:px-5 py-2 text-sm sm:text-base font-bold uppercase tracking-wider border border-black"
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
                      className="flex items-center px-5 sm:px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors border-2 border-black font-bold uppercase tracking-wider text-base sm:text-lg"
                    >
                      <Github className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
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
