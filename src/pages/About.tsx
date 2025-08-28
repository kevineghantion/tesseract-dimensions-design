import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  Zap,
  Shield,
  Leaf,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const capabilities = [
    "Advanced BIM modeling and coordination",
    "Structural analysis (ETABS, SAP2000, Robot)",
    "AutoCAD and Revit design workflows", 
    "MEP system design and optimization",
    "Project management and site supervision",
    "Value engineering and cost optimization"
  ];

  const regions = [
    "Lebanon (Headquarters)",
    "Middle East Region", 
    "Cyprus",
    "Europe",
    "Worldwide (Remote)"
  ];

  const values = [
    {
      icon: Target,
      title: "Engineering Clarity",
      description: "We bring precision and clarity to every aspect of the design and engineering process."
    },
    {
      icon: Zap,
      title: "Design to Delivery",
      description: "Seamless integration from initial concept through construction completion and handover."
    },
    {
      icon: Shield,
      title: "Quality & Safety",
      description: "Rigorous quality assurance and safety compliance in all our engineering solutions."
    },
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Environmental responsibility integrated into our design and engineering approach."
    }
  ];

  return (
    <Layout 
      title="About Tesseract Design & Engineering"
      description="Learn about Tesseract Design & Engineering - our team, capabilities, and commitment to delivering precision engineering and design solutions across Lebanon, Middle East, Cyprus, Europe and worldwide."
    >
      {/* Hero Section */}
      <section className="hero-gradient geometric-pattern section-padding">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Engineering clarity.<br />
            <span className="text-accent">Designing possibilities.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We are a multidisciplinary engineering consultancy specializing in architectural design, structural engineering, MEP systems, and project delivery across diverse industries and regions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Tesseract Design & Engineering was founded on the principle that exceptional engineering requires both technical precision and creative vision. We believe that the best solutions emerge when architectural design, structural engineering, and building systems work in perfect harmony.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our multidisciplinary approach allows us to see projects from multiple dimensions - like a tesseract transcends three-dimensional space. This perspective enables us to identify opportunities for optimization, innovation, and value creation that single-discipline approaches might miss.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we serve clients across Lebanon, the Middle East, Cyprus, Europe, and worldwide through remote collaboration, delivering projects that range from residential developments to complex industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary section-padding">
        <div className="container-section">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-t-4 border-t-accent">
                <CardHeader>
                  <div className="mx-auto p-3 bg-accent/10 rounded-full w-fit mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Capabilities & Tools</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team leverages industry-leading tools and methodologies to deliver precise, coordinated, and buildable solutions.
              </p>
              <ul className="space-y-3">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Reach</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We serve clients across multiple regions, combining local knowledge with international best practices.
              </p>
              <div className="space-y-4">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{region}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-accent/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Remote Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced digital tools enable us to deliver the same level of service and quality to international clients through secure, efficient remote collaboration platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary section-padding">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our multidisciplinary team brings together expertise in architecture, structural engineering, MEP systems, and project management to deliver comprehensive solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Architectural Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Experienced architects specializing in residential, commercial, and industrial design.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Engineering Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Structural and MEP engineers with deep expertise in analysis, design, and coordination.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Certified project managers ensuring quality delivery and client satisfaction.</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Professional Certifications & Affiliations
            </Badge>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team maintains professional certifications and affiliations with leading engineering and architectural institutions to ensure we deliver solutions that meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to explore how our multidisciplinary approach can add value to your next project? Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;