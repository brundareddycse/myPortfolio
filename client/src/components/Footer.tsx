import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-xl mb-4">Brunda Reddy</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Aspiring Computer Science Engineer building the future with code. 
              Focused on full-stack development and innovative solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ybrundareddy2006@gmail.com" className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link></li>
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About</span></Link></li>
              <li><Link href="/projects"><span className="hover:text-primary cursor-pointer transition-colors">Projects</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ybrundareddy2006@gmail.com</li>
              <li>Tirupati, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brunda Reddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
