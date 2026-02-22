import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["San Jose Mz.E - Lt.9 #15011", "Lima, Nuevo León, Perú"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+51 944088559","+51 957 811 357","+51 994 680 820"]
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 10:00 AM - 12:00 AM", "Sab - Dom: 11:00 AM - 4:00 AM"],
  },
];

const ContactSection = () => {
  const whatsappNumber = "51944088559";
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa hacer un pedido en Licorería Nuevo León.");

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.4em] uppercase text-sm font-medium mb-3">
            Encuéntranos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Contacto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estamos para atenderte. Visítanos o contáctanos por WhatsApp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-background border border-border rounded-sm"
              >
                <div className="p-3 bg-primary/10 rounded-sm h-fit">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.details.map((d, j) => (
                    <p key={j} className="text-sm text-muted-foreground">{d}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-700/20 text-green-400 px-5 py-3 rounded-sm font-medium hover:bg-green-700/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
               {/*
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary text-foreground/80 px-5 py-3 rounded-sm font-medium hover:text-primary transition-colors"
              >
              <Instagram className="w-5 h-5" />
                Instagram
              </a>
              */} 
               {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary text-foreground/80 px-5 py-3 rounded-sm font-medium hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              */} 
            </motion.div>
          </div>

          {/* Map placeholder / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-sm overflow-hidden flex flex-col"
          >
            <div className="flex-1 bg-secondary/30 flex items-center justify-center min-h-[300px]">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Visítanos</h3>
                <p className="text-muted-foreground mb-6">
                  San Jose Mz.E - Lt.9<br />
                  Lima, Nuevo León
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3 rounded-sm font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity shadow-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
