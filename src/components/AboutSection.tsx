import { motion } from "framer-motion";
import { Award, Wine, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "6+", label: "Años de experiencia" },
  { icon: Wine, value: "100+", label: "Productos disponibles" },
  { icon: Users, value: "10k+", label: "Clientes satisfechos" },
  { icon: Award, value: "100%", label: "Calidad garantizada" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-12 sm:py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm font-medium mb-2 sm:mb-3">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold mb-4 sm:mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-3 sm:space-y-4 text-foreground/70 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-foreground">Licorería Nuevo León</strong> nació con la misión de ofrecer 
                la mejor selección de licores premium. Con más de 6 años de 
                experiencia, nos hemos consolidado como referencia en calidad y servicio.
              </p>
              <p>
                Trabajamos directamente con las mejores destilerías y bodegas para traerte 
                productos auténticos a precios competitivos.
              </p>
              <p className="hidden sm:block">
                Nuestro compromiso es brindarte una experiencia de compra inigualable, con asesoría 
                personalizada y entrega rápida para tus momentos especiales.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-4 sm:p-6 text-center hover:border-gold transition-colors duration-300"
              >
                <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-2 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-gradient-gold mb-0.5 sm:mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
