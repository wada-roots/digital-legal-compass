import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop',
      alt: 'Modern laptop with technology interface',
      title: 'Cybersecurity & Data Privacy',
      subtitle: 'Protecting your digital assets'
    },
    {
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop',
      alt: 'Java programming on monitor',
      title: 'Intellectual Property',
      subtitle: 'Safeguarding your innovations'
    },
    {
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop',
      alt: 'Person using MacBook Pro',
      title: 'Technology Transactions',
      subtitle: 'Strategic legal partnerships'
    },
    {
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=800&fit=crop',
      alt: 'People around video screens display',
      title: 'Digital Commerce',
      subtitle: 'E-commerce and platform law'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-accent w-8' 
                : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-3 text-accent animate-fade-in">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">Leading Tech Law Specialists</span>
          </div>

          {/* Dynamic Content Based on Current Slide */}
          <div className="space-y-4 animate-fade-in">
            <div className="text-accent font-semibold text-lg tracking-wide uppercase">
              {carouselImages[currentSlide].title}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Your Legal Partner in
              <span className="text-accent block">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {carouselImages[currentSlide].subtitle} - Navigate complex technology law with confidence. 
              We protect innovators, startups, and enterprises in the digital age.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg shadow-elegant hover:shadow-card transition-all hover:-translate-y-1">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-elegant hover:shadow-card transition-all hover:-translate-y-1">
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-16 text-primary-foreground/60 animate-fade-in">
            <div className="flex items-center space-x-2 group">
              <Shield className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-primary-foreground transition-colors">20+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Users className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-primary-foreground transition-colors">500+ Tech Companies Served</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Award className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-primary-foreground transition-colors">Award-Winning Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};