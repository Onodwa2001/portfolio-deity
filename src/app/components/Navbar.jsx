"use client"
import { useState } from 'react';
import { MenuIcon, XIcon, HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHQ7UACrThCdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718780218377?e=1729123200&v=beta&t=ASuggHKxArC1ay1QCyiPrXuX6CtjhXmg_eDPNHDyrRU"
            alt="Profile Photo"
            className="w-12 h-12 rounded-full border-2 border-neon"
          />
          <div className="ml-4 text-3xl font-bold text-neon">
            <Link href="/">
              The Codex Citadel
            </Link>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="#home" className="hover:text-neon transition-colors">
            <div className="group relative">
              <HomeIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                Home
              </span>
            </div>
          </Link>
          <Link href="#about" className="hover:text-neon transition-colors">
            <div className="group relative">
              <UserIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                About
              </span>
            </div>
          </Link>
          <Link href="#projects" className="hover:text-neon transition-colors">
            <div className="group relative">
              <BriefcaseIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                Projects
              </span>
            </div>
          </Link>
          <Link href="#contact" className="hover:text-neon transition-colors">
            <div className="group relative">
              <MailIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                Contact
              </span>
            </div>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="w-8 h-8 text-neon" />
            ) : (
              <MenuIcon className="w-8 h-8 text-neon" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-gradient-to-r from-gray-900 to-gray-800 text-lg">
          <Link href="#home" className="hover:text-neon transition-colors">
            <div className="group relative">
              <HomeIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                Home
              </span>
            </div>
          </Link>
          <Link href="#about" className="hover:text-neon transition-colors">
            <div className="group relative">
              <UserIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                About
              </span>
            </div>
          </Link>
          <Link href="#projects" className="hover:text-neon transition-colors">
            <div className="group relative">
              <BriefcaseIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                Projects
              </span>
            </div>
          </Link>
          <Link href="#contact" className="hover:text-neon transition-colors">
            <div className="group relative">
              <MailIcon className="w-6 h-6 text-neon hover:text-white transition-colors" />
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-gray-700 text-white px-2 py-1 rounded transition-opacity">
                Contact
              </span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
