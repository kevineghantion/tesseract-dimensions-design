import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Home, Factory, Hotel, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: null },
    { name: "Residential", icon: Home },
    { name: "Commercial", icon: Building2 },
    { name: "Industrial", icon: Factory },
    { name: "Hospitality", icon: Hotel },
    { name: "Fit-Out", icon: Wrench },
  ];

  const projects = [
    {
      title: "Modern Residential Complex",
      category: "Residential",
      location: "Beirut, Lebanon",
      type: "Multi-story residential building",
      size: "5,200 m²",
      scope: "Full architectural and structural design",
      image: "/placeholder.svg",
      challenges: "Complex site constraints and seismic requirements",
      solution: "Innovative foundation design and optimized structural layout",
      outcome: "Reduced structural weight by 12% while maintaining safety standards",
      testimonial: "Exceptional engineering precision and attention to detail.",
      services: ["Architectural Design", "Structural Engineering", "BIM Modeling"]
    },
    {
      title: "Office Tower Development",
      category: "Commercial", 
      location: "Dubai, UAE",
      type: "Mixed-use commercial tower",
      size: "15,000 m²",
      scope: "MEP engineering and project management",
      image: "/placeholder.svg",
      challenges: "High-rise MEP coordination and energy efficiency targets",
      solution: "Advanced BIM coordination and sustainable HVAC systems",
      outcome: "Achieved 25% energy savings compared to baseline design",
      testimonial: "Professional team delivered on time and within budget.",
      services: ["MEP Engineering", "BIM Modeling", "Project Management"]
    },
    {
      title: "Manufacturing Facility",
      category: "Industrial",
      location: "Limassol, Cyprus",
      type: "Food processing plant",
      size: "8,000 m²",
      scope: "Complete design-build delivery",
      image: "/placeholder.svg",
      challenges: "Specialized hygiene requirements and process integration",
      solution: "Custom structural systems and integrated process design",
      outcome: "Facility operational 2 months ahead of schedule",
      testimonial: "Innovative solutions that exceeded our expectations.",
      services: ["Structural Engineering", "MEP Engineering", "Design-Build"]
    },
    {
      title: "Boutique Hotel Interior",
      category: "Hospitality",
      location: "Mykonos, Greece", 
      type: "Luxury hotel renovation",
      size: "2,500 m²",
      scope: "Interior fit-out and MEP upgrades",
      image: "/placeholder.svg",
      challenges: "Heritage building constraints and luxury standards",
      solution: "Sensitive restoration with modern systems integration",
      outcome: "Increased occupancy rate by 40% post-renovation",
      testimonial: "Transformed our space beyond what we imagined possible.",
      services: ["Design-Build", "MEP Engineering", "Project Management"]
    },
    {
      title: "Corporate Headquarters",
      category: "Fit-Out",
      location: "London, UK",
      type: "Office interior design",
      size: "3,200 m²", 
      scope: "Complete interior fit-out",
      image: "/placeholder.svg",
      challenges: "Open-plan acoustics and flexible workspace requirements",
      solution: "Modular systems design with advanced acoustic treatment",
      outcome: "Improved employee satisfaction scores by 35%",
      testimonial: "A workspace that truly reflects our company culture.",
      services: ["Design-Build", "MEP Engineering", "BIM Modeling"]
    },
    {
      title: "Sustainable Warehouse",
      category: "Industrial",
      location: "Amsterdam, Netherlands",
      type: "Logistics and distribution center",
      size: "12,000 m²",
      scope: "Structural design and sustainability consulting",
      image: "/placeholder.svg",
      challenges: "Large span requirements and carbon footprint reduction",
      solution: "Steel frame optimization and renewable energy integration",
      outcome: "Achieved BREEAM Excellent rating and 30% cost savings",
      testimonial: "Engineering excellence combined with environmental responsibility.",
      services: ["Structural Engineering", "BIM Modeling", "Project Management"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout 
      title="Engineering Projects Portfolio"
      description="Explore our portfolio of successful engineering and design projects including residential, commercial, industrial, and hospitality developments across Lebanon, Middle East, Cyprus, and Europe."
    >
      {/* Hero Section */}
      <section className="hero-gradient geometric-pattern section-padding">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how we've helped clients across industries achieve their vision through innovative engineering and design solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container-section">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.name}
                variant={activeFilter === filter.name ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.name)}
                className="flex items-center space-x-2"
              >
                {filter.icon && <filter.icon className="h-4 w-4" />}
                <span>{filter.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex flex-wrap gap-1">
                      {project.services.slice(0, 2).map((service, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription>
                    {project.location} • {project.type}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Size:</span>
                      <p className="text-muted-foreground">{project.size}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Scope:</span>
                      <p className="text-muted-foreground">{project.scope}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="bg-accent/5 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm text-accent mb-1">Result</h4>
                      <p className="text-sm text-foreground">{project.outcome}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground">
                    "{project.testimonial}"
                  </blockquote>

                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="group">
                      View Project Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
            Join our growing portfolio of successful projects. Let's discuss how we can bring your vision to reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;