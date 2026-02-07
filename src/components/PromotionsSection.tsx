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
    <section id="promociones" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.4em] uppercase text-sm font-medium mb-3">
            Ofertas Especiales
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Promociones
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Aprovecha nuestros combos exclusivos y ofertas de temporada
          </p>
        </motion.div>

        {/* Benefits bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Percent, title: "Hasta 30% OFF", desc: "En productos seleccionados" },
            { icon: Gift, title: "Combos Exclusivos", desc: "Paquetes armados para toda ocasión" },
            { icon: ShoppingCart, title: "Envío Gratis", desc: "En compras mayores a $1,500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 border border-border rounded-sm bg-secondary/30"
            >
              <div className="p-3 bg-primary/10 rounded-sm">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {combos.map((combo, i) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background border border-gold rounded-sm overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-sm uppercase">
                  -
                  {Math.round(
                    ((combo.originalPrice - combo.price) / combo.originalPrice) * 100
                  )}
                  %
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{combo.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{combo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">${combo.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${combo.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAdd(combo)}
                    className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
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
