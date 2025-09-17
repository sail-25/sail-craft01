import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Compass, List as HamburgerMenu } from "phosphor-react"; // Force icon refresh v2
import logoIcon from "/lovable-uploads/c6821b89-c50d-4086-a39d-f65f45bb6a8f.png";

// Navigation component - Updated to use Phosphor icons
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Success Stories", path: "/success" },
    { name: "Work With Us", path: "/work-with-us" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 touch-manipulation">
            <img src={logoIcon} alt="Sailcraft Solutions" className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-lg sm:text-xl font-bold text-sailcraft-teal truncate">Sailcraft Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-sailcraft-teal ${
                  isActive(item.path) ? "text-sailcraft-teal" : "text-sailcraft-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="btn-cta pulse-cta"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="touch-manipulation p-2">
                  <HamburgerMenu className="h-6 w-6 text-sailcraft-dark" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px] bg-white">
                <div className="flex flex-col space-y-6 mt-8 px-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-sailcraft-teal py-2 touch-manipulation ${
                        isActive(item.path) ? "text-sailcraft-teal" : "text-sailcraft-dark"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button 
                    asChild 
                    className="btn-cta mt-6 w-full touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;