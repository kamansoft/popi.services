
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`bg-card shadow-sm border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/beb88fc3-292f-41b6-9623-6c8272e1fd23.png" 
            alt="Poultry & Pigs Services LLC" 
            className={`transition-all duration-300 ${scrolled ? 'h-12 w-12' : 'h-16 w-16'}`}
          />
          <div>
            <h1 className={`font-bold text-foreground transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>Poultry & Pigs Services LLC</h1>
            <p className={`text-muted-foreground transition-all duration-300 ${scrolled ? 'text-xs' : 'text-sm'}`}>Engineering Excellence Since 2024</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#news" className="text-foreground hover:text-primary transition-colors">News</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;
