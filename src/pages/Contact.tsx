import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock,
  Upload,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    message: "",
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        projectType: "",
        budgetRange: "",
        timeline: "",
        message: "",
        acceptTerms: false
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed message",
      value: "info@tesseract-lb.com",
      href: "mailto:info@tesseract-lb.com",
      cta: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Speak directly with our team",
      value: "+961 71 366 339",
      href: "tel:+96171366339",
      cta: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat and file sharing",
      value: "+961 71 366 339",
      href: "https://wa.me/96171366339",
      cta: "Open WhatsApp"
    }
  ];

  return (
    <Layout 
      title="Contact Us"
      description="Get in touch with Tesseract Design & Engineering for engineering consultancy, architectural design, structural engineering, MEP services, and project management. Serving Lebanon, Middle East, Cyprus, Europe, and worldwide."
    >
      {/* Hero Section */}
      <section className="hero-gradient geometric-pattern section-padding">
        <div className="container-section text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Tell Us About Your Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to start your next engineering or design project? We're here to help bring your vision to reality with precision and expertise.
          </p>
        </div>
      </section>

      <div className="container-section py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project Inquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your project requirements and we'll provide a detailed proposal within 48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+961 XX XXX XXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Project Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                      placeholder="City, Country"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Project Type *</Label>
                    <RadioGroup 
                      value={formData.projectType} 
                      onValueChange={(value) => setFormData({...formData, projectType: value})}
                      className="grid grid-cols-2 gap-4"
                    >
                      {["Residential", "Commercial", "Industrial", "Hospitality", "Fit-Out", "Other"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <RadioGroupItem value={type} id={type} />
                          <Label htmlFor={type} className="text-sm">{type}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budgetRange} onValueChange={(value) => setFormData({...formData, budgetRange: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="500k+">Over $500,000</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">ASAP (Rush project)</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6-12months">6-12 months</SelectItem>
                          <SelectItem value="12months+">12+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      placeholder="Please describe your project requirements, goals, and any specific challenges or constraints..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border border-dashed border-border rounded-lg text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Optional:</strong> Upload project files (PDF, DWG, ZIP up to 25MB)
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the terms and conditions and consent to Tesseract Design & Engineering contacting me about this project inquiry. *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Project Inquiry
                        <CheckCircle className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Quick Response</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We typically respond to project inquiries within 24 hours with an initial assessment and next steps.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Initial consultation call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Project scope assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Detailed proposal within 48hrs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <method.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{method.title}</h3>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                        <p className="text-sm font-medium">{method.value}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      >
                        <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined}>
                          {method.cta}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Service Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🇱🇧 Lebanon (Headquarters)</li>
                  <li>🌍 Middle East Region</li>
                  <li>🇨🇾 Cyprus</li>
                  <li>🇪🇺 Europe</li>
                  <li>🌐 Worldwide (Remote)</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Remote collaboration available for international projects using secure digital platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;