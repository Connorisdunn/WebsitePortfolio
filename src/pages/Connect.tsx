import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from 'lucide-react';

const Connect: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgooenew', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-4 sm:pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header - PINK THEME */}
          <div className="bg-gradient-to-bl from-pink-50 to-pink-100 border-2 border-black p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link 
                to="/" 
                className="flex items-center text-black hover:text-pink-700 transition-colors"
              >
                <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                <span className="font-bold uppercase tracking-wider text-lg sm:text-xl">Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-wider text-center sm:text-right text-pink-700">
                CONNECT
              </h1>
              <div className="hidden sm:block"></div>
            </div>
          </div>

          <div className="max-w-none mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Contact Form */}
              <div className="bg-white border-2 border-black p-6 sm:p-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 sm:mb-8 text-gray-900 text-center">
                  Send a Message
                </h3>
              
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-base sm:text-lg font-bold uppercase tracking-wider mb-2 text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-black text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base sm:text-lg font-bold uppercase tracking-wider mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-black text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-base sm:text-lg font-bold uppercase tracking-wider mb-2 text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border-2 border-black text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base sm:text-lg font-bold uppercase tracking-wider mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-black text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {formStatus === 'success' && (
                    <div className="bg-green-100 border-2 border-green-600 text-green-800 px-5 py-4 font-semibold text-lg">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="bg-red-100 border-2 border-red-600 text-red-800 px-5 py-4 font-semibold text-lg">
                      Oops! Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full flex items-center justify-center px-8 py-4 bg-pink-600 text-white hover:bg-pink-700 transition-colors border-2 border-black font-bold uppercase tracking-wider text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-6 w-6 mr-3" />
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Right Column - Contact Info & Social */}
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Details */}
                <div className="bg-white border-2 border-black p-6 sm:p-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 sm:mb-8 text-gray-900 text-center">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex flex-col items-center text-center group hover:text-gray-600 transition-colors"
                      >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors">
                          <info.icon className="h-7 w-7 sm:h-8 sm:w-8 text-black" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-600 mb-1">
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
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 sm:mb-8 text-gray-900 text-center">
                    Follow Me
                  </h3>
                  
                  <div className="flex justify-center gap-4 sm:gap-5">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors border-2 border-black"
                        aria-label={social.label}
                      >
                        <social.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-yellow-300 border-2 border-black p-6 sm:p-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-4 sm:mb-5 text-gray-900 text-center">
                    Availability
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-gray-800 leading-relaxed text-center">
                    Currently available for new roles and collaborations. 
                    Let's create something special!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
