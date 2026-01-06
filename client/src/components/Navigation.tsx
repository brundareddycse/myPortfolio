import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" }, // Add this line
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl hover:opacity-80 transition-opacity">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <span>Brunda<span className="text-primary">.dev</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
                    ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
                  `}>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
            <Button variant="default" className="ml-4 rounded-full px-6" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-border"
      >
        <nav className="flex flex-col p-4 space-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div 
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg text-base font-medium cursor-pointer
                  ${location === link.href 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'}
                `}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="pt-2">
            <Button className="w-full justify-center" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
