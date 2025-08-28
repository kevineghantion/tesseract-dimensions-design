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
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "From concept to construction documents, we create functional and aesthetic designs that meet your vision and requirements.",
      deliverables: [
        "Conceptual design and space planning",
        "Schematic design development",
        "Detailed architectural drawings",
        "Building code compliance review",
        "Material and finish specifications"
      ]
    },
    {
      icon: Calculator,
      title: "Structural Engineering",
      description: "Safe, efficient, and cost-effective structural solutions for residential, commercial, and industrial projects.",
      deliverables: [
        "Structural analysis and design",
        "Steel, concrete, and timber design",
        "Seismic and wind load analysis",
        "Foundation design and analysis",
        "Value engineering optimization"
      ]
    },
    {
      icon: Zap,
      title: "MEP Engineering",
      description: "Mechanical, Electrical, and Plumbing systems designed for efficiency, sustainability, and occupant comfort.",
      deliverables: [
        "HVAC load calculations and design",
        "Electrical power and lighting design",
        "Plumbing and fire protection systems",
        "Energy efficiency optimization",
        "Building automation integration"
      ]
    },
    {
      icon: Box,
      title: "BIM & 3D Modeling",
      description: "Advanced Building Information Modeling for better coordination, visualization, and project delivery.",
      deliverables: [
        "3D coordinated building models",
        "Clash detection and resolution",
        "Construction sequencing",
        "3D visualization and VR",
        "Quantity takeoffs and scheduling"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project oversight ensuring on-time, on-budget delivery with quality assurance.",
      deliverables: [
        "Project planning and scheduling",
        "Construction administration",
        "Quality assurance and control",
        "Procurement support",
        "Site supervision and inspections"
      ]
    },
    {
      icon: Wrench,
      title: "Design-Build & Fit-Out",
      description: "Turnkey interior solutions combining design creativity with engineering precision and construction expertise.",
      deliverables: [
        "Interior design and space planning",
        "Custom joinery and millwork",
        "Lighting design and integration",
        "MEP coordination and installation",
        "Project delivery and handover"
      ]
    }
  ];

  return (
    <Layout 
      title="Engineering & Design Services"
      description="Comprehensive design and engineering services including architectural design, structural engineering, MEP systems, BIM modeling, and project management across Lebanon, Middle East, Cyprus, and Europe."
    >
      {/* Hero Section */}
      <section className="hero-gradient geometric-pattern section-padding">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Engineering & Design Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From concept sketches to coordinated construction documents, we align aesthetics, safety, and efficiency to deliver buildable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-t-4 border-t-accent">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Professional Service
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button variant="outline" size="sm" asChild className="group">
                        <Link to="/contact">
                          Request Proposal
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-padding">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us about your requirements and let our engineering team develop the optimal solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+96171366339">Call +961 71 366 339</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;