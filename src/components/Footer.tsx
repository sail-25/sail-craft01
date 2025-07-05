import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import compassIcon from "@/assets/compass-icon.png";

const Footer = () => {
  const services = [
    "Financial Planning",
    "Marketing Optimization", 
    "Operational Streamlining",
    "HR Solutions",
    "Technology Development",
    "Legal Compliance",
    "Customer Support Enhancement"
  ];

  return (
    <footer className="bg-sailcraft-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={compassIcon} alt="Sailcraft Solutions" className="h-8 w-8" />
              <span className="text-xl font-bold">Sailcraft Solutions</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering East African SMEs with innovative solutions for sustainable growth and strategic excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sailcraft-orange">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-white/80 hover:text-sailcraft-teal transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sailcraft-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-sailcraft-teal transition-colors">About Us</Link></li>
              <li><Link to="/success" className="text-white/80 hover:text-sailcraft-teal transition-colors">Success Stories</Link></li>
              <li><Link to="/work-with-us" className="text-white/80 hover:text-sailcraft-teal transition-colors">Work With Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-sailcraft-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sailcraft-orange">Contact</h3>
            <div className="space-y-2 text-sm text-white/80 mb-6">
              <p>+254 704 201 545</p>
              <p>+254 731 060 641</p>
              <p>info.sailcraft@gmail.com</p>
            </div>
            <Button 
              asChild 
              className="bg-sailcraft-orange hover:bg-sailcraft-orange/90 w-full"
            >
              <Link to="/contact">Launch My Growth Plan</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Sailcraft Solutions. All rights reserved. Engineering growth for East African SMEs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;