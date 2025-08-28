import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import tesseractLogo from "@/assets/tesseract-logo.png";

const Footer = () => {
  const services = [
    "Architectural Design",
    "Structural Engineering", 
    "MEP Engineering",
    "BIM & 3D Modeling",
    "Project Management",
    "Design-Build"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={tesseractLogo} 
              alt="Tesseract Design & Engineering" 
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              From idea to engineered reality.
            </p>
            <p className="text-sm text-muted-foreground">
              Design, engineering, and project delivery for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@tesseract-lb.com"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@tesseract-lb.com</span>
              </a>
              <a 
                href="tel:+96171366339"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+961 71 366 339</span>
              </a>
              <a 
                href="https://wa.me/96171366339"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Serving Lebanon, Middle East, Cyprus, Europe, and worldwide
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tesseract Design & Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;