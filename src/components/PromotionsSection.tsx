import { motion } from "framer-motion";
import { ShoppingCart, Percent, Gift } from "lucide-react";
import { combos } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const PromotionsSection = () => {
  const { addItem } = useCart();

  const handleAdd = (combo: (typeof combos)[0]) => {
    addItem({
      id: combo.id,
      name: combo.name,
      price: combo.price,
      image: combo.image,
      category: combo.category,
    });
    toast.success(`${combo.name} agregado al carrito`);
  };

  return (
    <section id="promociones" className="py-12 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm font-medium mb-2 sm:mb-3">
            Ofertas Especiales
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold mb-3 sm:mb-4">
            Promociones
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base px-2">
            Aprovecha nuestros combos exclusivos y ofertas de temporada
          </p>
        </motion.div>

        {/* Benefits bar - horizontal scroll on mobile */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 pb-2 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { icon: Percent, title: "Hasta 30% OFF", desc: "En productos seleccionados" },
            { icon: Gift, title: "Combos Exclusivos", desc: "Paquetes para toda ocasión" },
            { icon: ShoppingCart, title: "Envío Rápido", desc: "Entrega en tu puerta" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-3.5 sm:p-5 border border-border rounded-sm bg-secondary/30 min-w-[240px] sm:min-w-0 flex-shrink-0"
            >
              <div className="p-2.5 sm:p-3 bg-primary/10 rounded-sm">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {combos.map((combo, i) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-gold rounded-sm overflow-hidden group"
            >
              <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm uppercase">
                  -{Math.round(((combo.originalPrice - combo.price) / combo.originalPrice) * 100)}%
                </span>
              </div>
              <div className="p-3.5 sm:p-5">
                <h3 className="font-serif text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2 line-clamp-2">
                  {combo.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {combo.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-primary">S/{combo.price}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground line-through">
                      S/{combo.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAdd(combo)}
                    className="bg-gradient-gold text-primary-foreground px-3 sm:px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 sm:gap-2 active:scale-95 transition-transform"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
