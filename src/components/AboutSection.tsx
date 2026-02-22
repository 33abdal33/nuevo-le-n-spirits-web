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
    <section id="nosotros" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-[0.4em] uppercase text-sm font-medium mb-3">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                <strong className="text-foreground">Licorería Nuevo León</strong> nació con la misión de ofrecer 
                la mejor selección de licores premium a los conocedores más exigentes. Con más de 6 años de 
                experiencia, nos hemos consolidado como referencia en calidad, variedad y servicio excepcional.
              </p>
              <p>
                Trabajamos directamente con las mejores destilerías y bodegas del mundo para traerte 
                productos auténticos a precios competitivos. Cada botella que ofrecemos ha sido 
                cuidadosamente seleccionada por nuestro equipo.
              </p>
              <p>
                Nuestro compromiso es brindarte una experiencia de compra inigualable, con asesoría 
                personalizada y entrega rápida para que siempre tengas el mejor acompañamiento para 
                tus momentos especiales.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-6 text-center hover:border-gold transition-colors duration-300"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-serif text-3xl font-bold text-gradient-gold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
