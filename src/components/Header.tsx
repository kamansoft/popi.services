
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    
    const debouncedScrollHandler = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
        handleScroll();
      }, 10); // Reduced delay for smoother response
    };
    
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`bg-card shadow-sm border-b border-primary/20 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} flex justify-between items-center`}>
        <div className="flex items-center space-x-3">
          {/* Mobile hamburger menu - only visible on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Desktop layout */}
          <div className="hidden md:flex items-center space-x-3">
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

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col items-start">
            <img 
              src="/lovable-uploads/beb88fc3-292f-41b6-9623-6c8272e1fd23.png" 
              alt="Poultry & Pigs Services LLC" 
              className={`transition-all duration-300 ${scrolled ? 'h-8 w-8' : 'h-10 w-10'} mb-1`}
            />
            <div>
              <h1 className={`font-bold text-foreground transition-all duration-300 ${scrolled ? 'text-xs' : 'text-sm'}`}>Poultry & Pigs Services LLC</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors">News</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <ThemeToggle />
          <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Get Quote
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-primary/20 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#news" 
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
