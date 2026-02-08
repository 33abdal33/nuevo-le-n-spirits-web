import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "51944088559";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, no encuentro un producto en su catálogo. ¿Podrían ayudarme?");

const WhatsAppFloatingButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="text-sm font-medium whitespace-nowrap">
        Si no encuentras tus productos escríbenos
      </span>
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
