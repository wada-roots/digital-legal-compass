import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity & Privacy',
      description: 'Comprehensive protection against data breaches and privacy compliance across all jurisdictions.'
    },
    {
      icon: Award,
      title: 'Intellectual Property',
      description: 'Strategic IP portfolio management, patent prosecution, and enforcement for your innovations.'
    },
    {
      icon: Users,
      title: 'Technology Transactions',
      description: 'Expert guidance through complex technology deals, licensing, and strategic partnerships.'
    }
  ];

  const testimonials = [
    {
      quote: "TechLaw Partners provided exceptional guidance during our Series A funding. Their expertise in venture law was invaluable.",
      author: "Sarah Chen",
      role: "CEO, InnovateTech",
      rating: 5
    },
    {
      quote: "Their cybersecurity team helped us navigate a complex data breach with professionalism and efficiency.",
      author: "Michael Rodriguez",
      role: "CTO, SecureCloud",
      rating: 5
    },
    {
      quote: "Outstanding IP protection services. They've been instrumental in building our patent portfolio.",
      author: "Dr. Amanda Liu",
      role: "Founder, AI Solutions Inc.",
      rating: 5
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Specialized Legal Services for Technology Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we provide comprehensive legal support across all aspects of technology law.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center shadow-card hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2 animate-slide-up" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Trusted by Leading Technology Companies
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">20+ years of specialized technology law experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">500+ successful technology companies represented</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">$2B+ in technology transactions completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Award-winning legal team with technical backgrounds</span>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-bold text-primary mb-2 animate-float">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold text-primary mb-2 animate-float" style={{ animationDelay: '1s' }}>24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-bold text-primary mb-2 animate-float" style={{ animationDelay: '2s' }}>50+</div>
                <div className="text-muted-foreground">Expert Attorneys</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl font-bold text-primary mb-2 animate-float" style={{ animationDelay: '3s' }}>Global</div>
                <div className="text-muted-foreground">Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from technology leaders who trust us with their most important legal matters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2 animate-slide-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-accent/20 mb-4 group-hover:text-accent/40 transition-colors" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-primary group-hover:text-accent transition-colors">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Innovation?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Schedule a consultation with our technology law experts to discuss how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Download Legal Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
