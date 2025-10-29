import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ArrowRight,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RotateCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Index() {
  const [selectedCollection, setSelectedCollection] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const collections = [
    {
      id: 1,
      name: "Living Room",
      description: "Comfortable and stylish seating for your living space",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&h=600&fit=crop",
      href: "/shop?category=living",
      color: "bg-red-100",
    },
    {
      id: 2,
      name: "Bedroom",
      description: "Transform your bedroom into a sanctuary of comfort",
      image:
        "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1000&h=600&fit=crop",
      href: "/shop?category=bedroom",
      color: "bg-blue-100",
    },
    {
      id: 3,
      name: "Office",
      description: "Create a productive and inspiring workspace",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&h=600&fit=crop",
      href: "/shop?category=office",
      color: "bg-yellow-100",
    },
    {
      id: 4,
      name: "Outdoor",
      description: "Extend your comfort to your outdoor living areas",
      image:
        "https://images.unsplash.com/photo-1576228369-2537f842bac9?w=1000&h=600&fit=crop",
      href: "/shop?category=outdoor",
      color: "bg-green-100",
    },
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Minimalist Floor Lamp",
      price: 189,
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1565636192335-14375e1030aa?w=400&h=400&fit=crop",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Premium Wooden Chair",
      price: 349,
      rating: 5,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Modern Coffee Table",
      price: 299,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop",
      isFavorite: false,
    },
    {
      id: 4,
      name: "Elegant Bookshelf",
      price: 429,
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1575990315968-9e8dba5c0e5e?w=400&h=400&fit=crop",
      isFavorite: false,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Interior Designer",
      content:
        "CasaFurnish transformed my home office into a beautiful, functional workspace. The quality is exceptional and the designs are truly timeless.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      name: "James Chen",
      title: "Homeowner",
      content:
        "I was impressed by the attention to detail and the premium quality of every piece. Highly recommend for anyone looking for sophisticated furniture.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Architect",
      content:
        "The minimalist designs from CasaFurnish perfectly complement modern architecture. Delivery and customer service were outstanding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% encrypted transactions",
    },
    {
      icon: RotateCw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 3000);
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=800&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl animate-fade-in">
              <p className="text-secondary font-serif text-lg mb-4">
                Welcome to CasaFurnish
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                Design Your <span className="text-secondary">Comfort</span>
              </h2>
              <p className="text-white text-opacity-90 text-lg mb-8 max-w-md">
                Discover premium furniture that combines elegance with
                functionality. Create spaces that reflect your unique style.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:gap-4"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-primary-foreground text-opacity-80 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-serif text-lg mb-2">
              Our Collections
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Explore by Room
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our carefully curated collections designed for every space
              in your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                to={collection.href}
                className={cn(
                  "group relative h-[300px] rounded-xl overflow-hidden cursor-pointer",
                  index === 0 && "md:col-span-2"
                )}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">
                    {collection.name}
                  </h4>
                  <p className="text-white text-opacity-90 mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-semibold text-opacity-0 group-hover:text-opacity-100 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 md:py-24 bg-secondary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-serif text-lg mb-2">
              Best Sellers
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Trending Products
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what our customers love the most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-secondary transition-all opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5 text-primary" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h4 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < Math.floor(product.rating)
                              ? "fill-secondary text-secondary"
                              : "text-muted-foreground"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-primary">
                      ${product.price}
                    </span>
                    <button className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-serif text-lg mb-2">
              Customer Stories
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              What Our Customers Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 text-opacity-80 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentTestimonial
                    ? "bg-primary w-8"
                    : "bg-muted-foreground bg-opacity-40 hover:bg-opacity-60"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-serif text-lg mb-2">Stay Updated</p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-primary-foreground text-opacity-90 mb-8 text-lg">
            Get exclusive offers, new arrivals, and design inspiration delivered
            to your inbox
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded text-foreground bg-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded hover:bg-opacity-90 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <p className="mt-4 text-secondary font-semibold animate-fade-in">
              ✓ Thank you for subscribing!
            </p>
          )}

          <p className="text-primary-foreground text-opacity-70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-serif text-lg mb-2">
                About CasaFurnish
              </p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Crafted with Care
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every piece in our collection is carefully selected and crafted
                to bring comfort and elegance into your home. We believe in
                timeless design that transcends trends.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
