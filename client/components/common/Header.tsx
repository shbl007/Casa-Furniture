import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const categories = [
    { name: "Living Room", href: "/shop?category=living" },
    { name: "Bedroom", href: "/shop?category=bedroom" },
    { name: "Office", href: "/shop?category=office" },
    { name: "Outdoor", href: "/shop?category=outdoor" },
    { name: "Dining", href: "/shop?category=dining" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm text-center">
        <p>Free shipping on orders over $100 | Spring Collection Available Now</p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-primary">
              Casa<span className="text-accent">Furnish</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-1 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground font-medium text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-foreground font-medium text-sm hover:text-primary transition-colors flex items-center gap-1">
                Categories
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* Mega Menu */}
              <div className="absolute left-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-4 pb-4 mt-0">
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    to={category.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors hidden sm:flex">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <Link to="/cart" className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-xs text-accent-foreground rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-foreground font-medium hover:bg-secondary rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Categories */}
            <div className="px-4 py-2">
              <button
                onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                className="w-full text-left text-foreground font-medium hover:text-primary transition-colors flex items-center justify-between"
              >
                Categories
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isCategoryMenuOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {isCategoryMenuOpen && (
                <div className="mt-2 space-y-1 pl-4 border-l-2 border-secondary animate-slide-up">
                  {categories.map((category) => (
                    <Link
                      key={category.href}
                      to={category.href}
                      className="block py-1 text-sm text-foreground hover:text-primary transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsCategoryMenuOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
