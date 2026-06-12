import { Link, useLocation } from "wouter";
import {
  Home,
  User,
  FolderGit2,
  Award,
  Mail,
} from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/certificates", label: "Certificates", icon: Award },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-20px)] max-w-4xl">
      <nav
        className="
          flex items-center justify-center gap-2
          rounded-full
          border border-white/20
          bg-primary/20
          backdrop-blur-xl
          px-2 py-2
          shadow-xl
        "
      >
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.href;

          return (
            <Link key={link.href} href={link.href}>
              <div
                className={`
                  flex flex-1 min-w-0 cursor-pointer
                  flex-col items-center justify-center
                  rounded-full px-4 py-2
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/40 text-primary"
                      : "text-foreground/80 hover:bg-white/20 hover:text-primary"
                  }
                `}
              >
                <Icon size={20} />
                <span className="mt-1 text-xs font-medium">
                  {link.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
