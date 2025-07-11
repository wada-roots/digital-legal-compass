import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Building, Briefcase, Scale } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Scale,
      title: 'Excellence',
      description: 'Delivering exceptional legal services with unwavering attention to detail and strategic thinking.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with clients based on trust, transparency, and shared success.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Staying ahead of technology trends to provide cutting-edge legal solutions.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Tech Companies' },
    { number: '95%', label: 'Success Rate' },
    { number: '$2B+', label: 'Deals Closed' }
  ];

  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">About Our Firm</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Pioneering Legal Excellence in the
            <span className="text-accent"> Digital Age</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            For over two decades, TechLaw Partners has been at the forefront of technology law, 
            helping innovators navigate complex legal landscapes with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-accent">
              <Building className="h-6 w-6" />
              <span className="font-semibold">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Founded on Innovation and Integrity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Established in 2003, TechLaw Partners emerged from a vision to bridge the gap between 
              rapidly evolving technology and traditional legal frameworks. Our founders recognized 
              that the digital revolution required a new approach to legal services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to serve as trusted advisors to some of the world's most innovative 
              companies, from emerging startups to Fortune 500 enterprises. Our deep understanding 
              of technology combined with legal expertise makes us the go-to firm for complex tech law matters.
            </p>
          </div>
          <div className="relative">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Industry Recognition</h3>
                      <p className="text-sm text-muted-foreground">Consistently ranked among top tech law firms</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Global Reach</h3>
                      <p className="text-sm text-muted-foreground">Serving clients across multiple jurisdictions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Expert Team</h3>
                      <p className="text-sm text-muted-foreground">50+ specialized attorneys and professionals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and colleagues.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our expertise can help protect and advance your technology initiatives.
          </p>
          <Button size="lg" className="mt-8">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};