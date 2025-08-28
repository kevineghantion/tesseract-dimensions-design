import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  // Update document title and meta description
  if (title) {
    document.title = `${title} | Tesseract Design & Engineering`;
  }
  
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Layout;