import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Connect: React.FC = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "connorisdunn@gmail.com", href: "mailto:connorisdunn@gmail.com" },
    { icon: Phone, label: "Phone", value: "(801) 509-8258", href: "tel:+18015098258" },
    { icon: MapPin, label: "Location", value: "Salt Lake City, UT", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/connor-a-dunn/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/connor.dunn.549436/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/connor_a_dunn/" },
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
              CONNECT
            </h1>
            <div className="hidden sm:block"></div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white border-2 border-black p-4 sm:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 sm:mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center group hover:text-gray-600 transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300 border-2 border-black flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-yellow-400 transition-colors">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-600">
                        {info.label}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-black break-all sm:break-normal">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border-2 border-black p-4 sm:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 sm:mb-6">
                Follow Me
              </h3>
              
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors border-2 border-black"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-yellow-300 border-2 border-black p-4 sm:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Availability
              </h3>
              <p className="text-base sm:text-lg font-medium text-black">
                Currently available for new roles and collaborations. 
                Let's create something special!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
