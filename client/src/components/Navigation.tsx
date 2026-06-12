import { Link, useLocation } from "wouter";
import styled from "styled-components";
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
    <Wrapper>
      <nav className="menu">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link key={link.href} href={link.href}>
              <a className={location === link.href ? "active" : ""}>
                <Icon size={22} />
                <span>{link.label}</span>
              </a>
            </Link>
          );
        })}
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 999;

  .menu {
    width: calc(100vw - 24px);
    max-width: 700px;
    backdrop-filter: blur(12px) saturate(180%) contrast(200%);
    -webkit-backdrop-filter: blur(12px) saturate(180%) contrast(200%);
    background: rgba(59, 130, 246, 0.25);
    border: 1px solid rgba(255,255,255,.2);
    box-shadow: 0 10px 30px rgba(0,0,0,.15);
    padding: 8px;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .menu a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    color: rgba(255,255,255,.85);
    text-decoration: none;
    padding: 10px 6px;
    border-radius: 999px;
    transition: all .3s ease;
    cursor: pointer;
  }

  .menu a:hover {
    background: rgba(255,255,255,.25);
    color: #fff;
    transform: translateY(-2px);
  }

  .menu a.active {
    background: rgba(255,255,255,.4);
    color: #2563eb;
  }

  .menu svg {
    margin-bottom: 4px;
  }

  .menu span {
    font-size: .75rem;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .menu span {
      font-size: .65rem;
    }

    .menu {
      gap: 4px;
    }
  }
`;
