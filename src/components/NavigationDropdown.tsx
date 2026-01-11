import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Mail, User, Settings } from 'lucide-react';

const NavigationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home, color: 'text-gray-700' },
    { path: '/projects', label: 'Projects', icon: Briefcase, color: 'text-blue-700' },
    { path: '/connect', label: 'Connect', icon: Mail, color: 'text-pink-700' },
    { path: '/about', label: 'About Me', icon: User, color: 'text-green-700' },
    { path: '/experience', label: 'Experience', icon: Settings, color: 'text-purple-700' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const currentPage = navItems.find(item => item.path === location.pathname);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-black hover:text-gray-600 transition-colors group"
      >
        {isOpen ? (
          <X className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
        ) : (
          <Menu className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
        )}
        <span className="font-bold uppercase tracking-wider text-lg sm:text-xl">
          Navigation
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white border-2 border-black shadow-lg z-50">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-5 py-4 border-b border-gray-200 last:border-b-0 transition-colors ${
                  isActive 
                    ? 'bg-yellow-300 font-bold' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <Icon className={`h-5 w-5 mr-3 ${item.color}`} strokeWidth={2} />
                <span className={`uppercase tracking-wider text-base ${item.color}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavigationDropdown;
