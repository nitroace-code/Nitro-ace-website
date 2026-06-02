import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Import the logo image
import logo from "@/imports/logo.webp";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Cars", href: "/cars" },
    { name: "Our Story", href: "/our-story" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" || location.pathname === "/cars";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Image and Text */}
            <Link to="/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
              <img src={logo} alt="NITRO-ACE Racing Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl">NITRO-ACE Racing</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-red-500"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-red-500"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              {/* Footer Logo with Image and Text */}
              <div className="flex items-center gap-2 text-white mb-4">
                <img src={logo} alt="NITRO-ACE Racing Logo" className="h-8 w-auto" />
                <span className="font-bold text-lg">NITRO-ACE Racing</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Building the fastest and most innovative racing team on campus.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>Email: nitroace@aceec.ac.in</p>
                <p>Instagram: @nitroace_racing</p>
                <p>Location: ACE Engineering College, Ankushapur, Ghatkesar, Telangana 501301</p>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
            © 2026 NITRO-ACE Racing | ACE Engineering College. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}