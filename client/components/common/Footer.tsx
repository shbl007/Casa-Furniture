import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-opacity-20 border-background py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-background text-opacity-80">
                Get updates on new collections and exclusive offers
              </p>
            </div>
            <form className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded text-foreground placeholder-opacity-50 bg-background bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">
                Casa<span className="text-accent">Furnish</span>
              </h2>
              <p className="text-background text-opacity-80 text-sm mb-4">
                Design Your Comfort. Discover premium furniture crafted with
                care and attention to detail.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all"
                >
                  <span className="text-lg">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all"
                >
                  <span className="text-lg">📷</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/shop?category=living"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Living Room
                  </a>
                </li>
                <li>
                  <a
                    href="/shop?category=bedroom"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Bedroom
                  </a>
                </li>
                <li>
                  <a
                    href="/shop?category=office"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Office
                  </a>
                </li>
                <li>
                  <a
                    href="/shop?category=outdoor"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Outdoor
                  </a>
                </li>
                <li>
                  <a
                    href="/shop?category=dining"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    Dining
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-background text-opacity-80">
                    123 Design Street, NYC 10001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="mailto:hello@casafurnish.com"
                    className="text-background text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    hello@casafurnish.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-opacity-20 border-background pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background text-opacity-70">
            <p>&copy; 2024 CasaFurnish. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-opacity-100 transition-all">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-opacity-100 transition-all">
                Terms of Service
              </a>
              <a href="#" className="hover:text-opacity-100 transition-all">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
