import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet.jsx';
import leapLogo from '../../assets/images/home/Leap_hero/leap_logo.svg';

export function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f1f5f9]">
      <div className="flex w-full max-w-[1280px] mx-auto px-4 md:px-8 py-6 items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-3 hover:opacity-90">
        <img
          src={leapLogo}
          alt="Leap AI"
          className="h-8 w-[127px]"
        />
      </Link>
      <nav className="hidden items-center gap-4 text-sm font-medium text-muted-foreground md:flex">
        {/* <Link
          to="/"
          className={`hover:text-foreground ${isActive('/') ? 'text-foreground' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-foreground ${isActive('/about') ? 'text-foreground' : ''}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`hover:text-foreground ${isActive('/contact') ? 'text-foreground' : ''}`}
        >
          Contact
        </Link> */}
      </nav>
      <div className="hidden items-center gap-4 md:flex">
        <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#64748b]">
          Strategic Guide for Executives
        </p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          {/* <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" aria-hidden />
          </Button> */}
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col gap-6">
          <SheetHeader className="text-left">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-3 text-sm font-medium text-foreground">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <SheetClose asChild key={link.to}>
                <Link
                  to={link.to}
                  className={`rounded px-1 py-1 transition-colors hover:text-foreground ${
                    isActive(link.to) ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <SheetClose asChild>
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button size="sm">Get started</Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      </div>
    </header>
  );
}
