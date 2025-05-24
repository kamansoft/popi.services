
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    setScrolled(prevScrolled => {
      // Use hysteresis: different thresholds for going up vs down
      // This prevents flickering when hovering around the threshold
      if (!prevScrolled && scrollY > 25) {
        return true; // Switch to compact when scrolling down past 25px
      } else if (prevScrolled && scrollY < 15) {
        return false; // Switch to expanded when scrolling up past 15px
      }
      return prevScrolled; // Keep current state in the buffer zone (15-25px)
    });
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;
    
    const throttledScrollHandler = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
        handleScroll();
      }, 10); // Small delay to prevent excessive calls
    };
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  return (
    <header className={`bg-card shadow-sm border-b border-primary/20 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} flex justify-between items-center`}>
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
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors">News</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
