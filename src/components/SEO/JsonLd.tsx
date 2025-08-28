import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  data: object;
}

const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

// Organization Schema for Tesseract Design & Engineering
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tesseract Design & Engineering",
  "description": "Professional design and engineering services for residential, commercial, and industrial projects",
  "url": "https://tesseract-lb.com",
  "logo": "https://tesseract-lb.com/assets/tesseract-logo.png",
  "email": "info@tesseract-lb.com",
  "telephone": "+96171366339",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LB",
    "addressRegion": "Lebanon"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Lebanon"
    },
    {
      "@type": "Place",
      "name": "Middle East"
    },
    {
      "@type": "Country", 
      "name": "Cyprus"
    },
    {
      "@type": "Place",
      "name": "Europe"
    },
    {
      "@type": "Place",
      "name": "Worldwide"
    }
  ],
  "serviceType": [
    "Architectural Design",
    "Structural Engineering", 
    "MEP Engineering",
    "BIM & 3D Modeling",
    "Project Management",
    "Design-Build Services"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+96171366339",
    "email": "info@tesseract-lb.com",
    "contactType": "customer service",
    "availableLanguage": ["en", "ar"]
  }
};

export default JsonLd;