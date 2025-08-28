import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/96171366339"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Button>
    </a>
  );
};

export default WhatsAppFAB;