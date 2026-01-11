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
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Changed from max-w-6xl mx-auto to w-full */}
        <div className="w-full">
          {/* Header - PINK THEME */}
          <div className="bg-gradient-to-bl from-pink-50 to-pink-100 border-2 border-black p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link 
                to="/" 
                className="flex items-center text-black hover:text-pink-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <span className="font-bold uppercase tracking-wider text-base sm:text-lg">Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right text-pink-700">
                CONNECT
              </h1>
              <div className="hidden sm:block"></div>
            </div>
          </div>

          {/* Added max-w-3xl mx-auto to center the content cards but still wider than before */}
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white border-2 border-black p-6 sm:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider mb-6 sm:mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-5 sm:space-y-7">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center group hover:text-gray-600 transition-colors"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-300 border-2 border-black flex items-center justify-center mr-4 sm:mr-5 group-hover:bg-yellow-400 transition-colors">
                      <info.icon className="h-6 w-6 sm:h-7 sm:w-7 text-black" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-medium uppercase tracking-wider text-gray-600">
                        {info.label}
                      </div>
                      <div className="text-lg sm:text-xl font-semibold text-black break-all sm:break-normal">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border-2 border-black p-6 sm:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider mb-6 sm:mb-8">
                Follow Me
              </h3>
              
              <div className="flex gap-4 sm:gap-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors border-2 border-black"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-yellow-300 border-2 border-black p-6 sm:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4 sm:mb-5">
                Availability
              </h3>
              <p className="text-lg sm:text-xl font-medium text-black leading-relaxed">
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
