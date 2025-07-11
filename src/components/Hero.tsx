import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 text-accent">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Leading Tech Law Specialists</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Your Legal Partner in
            <span className="text-accent block">Technology</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Navigate complex technology law with confidence. We protect innovators, 
            startups, and enterprises in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-16 text-primary-foreground/60">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent" />
              <span>500+ Tech Companies Served</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <span>Award-Winning Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};