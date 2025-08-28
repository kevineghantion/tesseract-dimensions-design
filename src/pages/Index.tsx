import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calculator, 
  Zap, 
  Box, 
  ClipboardCheck, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Award,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Concept to construction documents with aesthetic and functional excellence."
    },
    {
      icon: Calculator,
      title: "Structural Engineering", 
      description: "Safe, efficient structural solutions with value engineering optimization."
    },
    {
      icon: Zap,
      title: "MEP Engineering",
      description: "Mechanical, electrical, and plumbing systems for optimal performance."
    },
    {
      icon: Box,
      title: "BIM & 3D Modeling",
      description: "Advanced coordination, visualization, and clash detection services."
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end oversight ensuring on-time, on-budget delivery."
    },
    {
      icon: Wrench,
      title: "Design-Build & Fit-Out",
      description: "Turnkey solutions from concept through construction completion."
    }
  ];

  const projects = [
    {
      title: "Modern Residential Complex",
      category: "Residential",
      outcome: "Reduced structural weight by 12% while maintaining safety standards",
      image: "/placeholder.svg"
    },
    {
      title: "Office Tower Development", 
      category: "Commercial",
      outcome: "Achieved 25% energy savings through optimized MEP design",
      image: "/placeholder.svg"
    },
    {
      title: "Sustainable Warehouse",
      category: "Industrial", 
      outcome: "BREEAM Excellent rating with 30% construction cost savings",
      image: "/placeholder.svg"
    }
  ];

  const trustSignals = [
    {
      icon: Target,
      title: "Precision-first engineering",
      description: "Every calculation verified, every detail coordinated"
    },
    {
      icon: ArrowRight,
      title: "Design to delivery",
      description: "Seamless workflow from concept to construction"
    },
    {
      icon: Box,
      title: "BIM-driven coordination", 
      description: "Advanced 3D modeling eliminates costly conflicts"
    },
    {
      icon: CheckCircle,
      title: "Value engineering optimization",
      description: "Cost-effective solutions without compromising quality"
    },
    {
      icon: Award,
      title: "On-time, on-budget execution",
      description: "Proven track record of successful project delivery"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and requirements",
      description: "Understanding your vision, constraints, and objectives"
    },
    {
      number: "02", 
      title: "Concept and feasibility",
      description: "Initial design concepts with technical feasibility analysis"
    },
    {
      number: "03",
      title: "Detailed design and coordination", 
      description: "Comprehensive documentation with full system coordination"
    },
    {
      number: "04",
      title: "Delivery and support",
      description: "Construction support and post-completion assistance"
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional engineering precision and attention to detail.",
      author: "Sarah Ahmed",
      role: "Project Director",
      company: "Gulf Development Corp"
    },
    {
      quote: "Professional team delivered on time and within budget.",
      author: "Michael Stavros", 
      role: "Construction Manager",
      company: "Mediterranean Construction"
    },
    {
      quote: "Innovative solutions that exceeded our expectations.",
      author: "Elena Rossi",
      role: "Facilities Director", 
      company: "European Manufacturing Ltd"
    }
  ];

  return (
    <Layout 
      title="Engineering & Design Services - Lebanon, Middle East, Cyprus, Europe"
      description="Tesseract Design & Engineering provides comprehensive architectural design, structural engineering, MEP systems, BIM modeling, and project management services across Lebanon, Middle East, Cyprus, Europe, and worldwide."
    >
      {/* Hero Section */}
      <section className="hero-gradient geometric-pattern section-padding">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Designing across dimensions—<br />
            <span className="text-accent">delivering real-world results.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            We provide end-to-end design and engineering services for residential, commercial, and industrial projects across Lebanon, the Middle East, Cyprus, Europe, and worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+96171366339">Call +961 71 366 339</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Comprehensive Engineering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept sketches to coordinated construction documents, we align aesthetics, safety, and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent hover:border-t-primary">
                <CardHeader>
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-secondary section-padding">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've delivered value through innovative engineering and design solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/5 p-4 rounded-lg mb-4">
                    <p className="text-sm font-medium text-foreground">{project.outcome}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/projects">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Tesseract */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Tesseract
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring multidimensional thinking to every project, ensuring optimal outcomes across all aspects of design and engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustSignals.slice(0, 3).map((signal, index) => (
              <Card key={index} className="text-center border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                    <signal.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{signal.title}</h3>
                  <p className="text-muted-foreground">{signal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {trustSignals.slice(3).map((signal, index) => (
              <Card key={index} className="text-center border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <signal.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{signal.title}</h3>
                  <p className="text-muted-foreground">{signal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary section-padding">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures project success from initial concept to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="text-4xl font-bold text-accent mb-4">{step.number}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from clients who have experienced our engineering excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-section text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tell us about your project
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Ready to transform your vision into engineered reality? Our team is standing by to discuss your requirements and develop the optimal solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://wa.me/96171366339" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners/Logos Row - Placeholder */}
      <section className="py-12 border-t border-border">
        <div className="container-section">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8">Trusted by leading organizations across multiple industries</p>
            <div className="flex justify-center items-center space-x-12 opacity-50">
              <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Partner 1</span>
              </div>
              <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Partner 2</span>
              </div>
              <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Partner 3</span>
              </div>
              <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Partner 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;