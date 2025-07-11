import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Lock, 
  Cpu, 
  Building, 
  FileText,
  Users,
  Briefcase,
  Scale
} from 'lucide-react';

export const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Shield,
      title: 'Cybersecurity & Data Privacy',
      description: 'Comprehensive legal protection for data breaches, privacy compliance (GDPR, CCPA), and cybersecurity incidents.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      services: [
        'Data breach response and notification',
        'Privacy policy development',
        'GDPR & CCPA compliance',
        'Cybersecurity incident management'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      description: 'Protect your innovations with strategic IP portfolio management, patent prosecution, and enforcement.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      services: [
        'Patent application and prosecution',
        'Trademark registration and protection',
        'Copyright and trade secrets',
        'IP litigation and enforcement'
      ]
    },
    {
      icon: Briefcase,
      title: 'Technology Transactions',
      description: 'Navigate complex technology deals, licensing agreements, and strategic partnerships.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      services: [
        'Software licensing agreements',
        'Technology transfer deals',
        'M&A due diligence',
        'Joint venture structuring'
      ]
    },
    {
      icon: Building,
      title: 'Startup & Venture Law',
      description: 'From incorporation to IPO, we guide emerging companies through every stage of growth.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      services: [
        'Entity formation and governance',
        'Fundraising and venture capital',
        'Employee equity plans',
        'Exit strategy planning'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & SaaS Law',
      description: 'Legal framework for cloud computing, SaaS agreements, and digital service platforms.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      services: [
        'Cloud service agreements',
        'SaaS terms and conditions',
        'Data localization compliance',
        'Multi-tenant architecture issues'
      ]
    },
    {
      icon: Smartphone,
      title: 'Digital Commerce',
      description: 'E-commerce law, digital payments, platform governance, and online marketplace regulations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      services: [
        'E-commerce platform development',
        'Digital payment compliance',
        'Online marketplace terms',
        'Consumer protection compliance'
      ]
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Navigate the emerging legal landscape of artificial intelligence and automated decision-making.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      services: [
        'AI ethics and compliance',
        'Algorithmic bias assessment',
        'ML model licensing',
        'Automated decision-making governance'
      ]
    },
    {
      icon: Database,
      title: 'Data Governance',
      description: 'Establish robust data governance frameworks and ensure regulatory compliance across jurisdictions.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop',
      services: [
        'Data governance policies',
        'Cross-border data transfers',
        'Data retention strategies',
        'Regulatory compliance audits'
      ]
    },
    {
      icon: Globe,
      title: 'International Tech Law',
      description: 'Cross-border technology operations, international data flows, and multi-jurisdictional compliance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      services: [
        'International data transfer agreements',
        'Multi-jurisdictional compliance',
        'Cross-border IP protection',
        'Global expansion strategies'
      ]
    }
  ];

  const industries = [
    'Financial Technology (FinTech)',
    'Healthcare Technology',
    'Artificial Intelligence',
    'Blockchain & Cryptocurrency',
    'Software as a Service (SaaS)',
    'E-commerce Platforms',
    'Gaming & Entertainment',
    'Internet of Things (IoT)',
    'Autonomous Vehicles',
    'Renewable Energy Tech'
  ];

  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">Practice Areas</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Comprehensive Legal Services for
            <span className="text-accent"> Technology Companies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From emerging startups to established enterprises, we provide specialized legal expertise 
            across all areas of technology law.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2">
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <area.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                <div className="space-y-3">
                  <h4 className="font-medium text-primary text-sm flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Key Services:
                  </h4>
                  <ul className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-sm text-muted-foreground flex items-start group-hover:text-foreground transition-colors">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-6 w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our deep sector expertise spans across the technology ecosystem, from emerging 
              technologies to established digital platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-shadow"
              >
                <span className="text-sm font-medium text-primary">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-accent">
              <Scale className="h-6 w-6" />
              <span className="font-semibold">Why Choose TechLaw Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Unmatched Expertise in Technology Law
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">Deep Technical Understanding</h3>
                  <p className="text-muted-foreground">Our attorneys combine legal expertise with technical backgrounds in computer science, engineering, and business.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">Proactive Risk Management</h3>
                  <p className="text-muted-foreground">We anticipate legal challenges before they arise, helping you navigate regulatory changes and emerging risks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">Practical Business Solutions</h3>
                  <p className="text-muted-foreground">Our advice is always grounded in practical business realities, helping you achieve your goals efficiently.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Technology Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                    <div className="text-sm text-muted-foreground">In Transactions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Technology Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Schedule a consultation with our technology law experts to discuss your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Download Practice Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};