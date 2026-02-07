import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { products, categories, type Category } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold transition-colors duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isPromo && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
            Oferta
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-primary tracking-[0.2em] uppercase mb-1">{product.category}</p>
        <h3 className="font-serif text-lg font-semibold mb-1 text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="bg-gradient-gold text-primary-foreground p-2.5 rounded-sm hover:opacity-90 transition-opacity"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filtered =
    activeCategory === "Todos" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.4em] uppercase text-sm font-medium mb-3">
            Nuestra Selección
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Catálogo Premium
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubre nuestra exclusiva colección de licores seleccionados para los paladares más exigentes
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
