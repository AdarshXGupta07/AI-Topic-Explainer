import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: Array<{ name: string; link: string }>;
  className?: string;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

interface NavbarLogoProps {
  className?: string;
}

interface NavbarButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ children, className = "" }) => {
  return (
    <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#1a1a1a]/90 backdrop-blur-lg border border-[#333333]/50 rounded-full shadow-2xl transition-all duration-300 hover:bg-[#1a1a1a]/90 hover:shadow-3xl hover:scale-[1.02] max-w-6xl mx-auto ${className}`}>
      {children}
    </nav>
  );
};

export const NavBody: React.FC<NavBodyProps> = ({ children, className = "" }) => {
  return (
    <div className={`px-8 sm:px-12 lg:px-16 flex items-center justify-between h-20 ${className}`}>
      {children}
    </div>
  );
};

export const NavItems: React.FC<NavItemsProps> = ({ items, className = "" }) => {
  return (
    <div className={`hidden md:flex space-x-10 ${className}`}>
      {items.map((item, idx) => (
        <Link 
          key={idx} 
          href={item.link} 
          className="text-[#b3b3b3] hover:text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative group"
        >
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export const MobileNav: React.FC<MobileNavProps> = ({ children, className = "" }) => {
  return (
    <div className={`md:hidden ${className}`}>
      {children}
    </div>
  );
};

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex-shrink-0 text-white font-bold text-2xl mr-8 ${className}`}>
      Logo
    </div>
  );
};

export const NavbarButton: React.FC<NavbarButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = "" 
}) => {
  const baseClasses = "px-6 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5";
  const variantClasses = variant === 'primary' 
    ? "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl" 
    : "text-[#b3b3b3] hover:text-white font-semibold";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const MobileNavHeader: React.FC<MobileNavHeaderProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center justify-between h-16 ${className}`}>
      {children}
    </div>
  );
};

export const MobileNavToggle: React.FC<MobileNavToggleProps> = ({ isOpen, onClick, className = "" }) => {
  return (
    <button 
      className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${className}`}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      {!isOpen ? (
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ) : (
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  );
};

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;
  
  return (
    <div className={`md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 ${className}`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {children}
      </div>
    </div>
  );
};

export default Navbar;