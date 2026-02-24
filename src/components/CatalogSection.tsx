import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Search, X } from "lucide-react";
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
      <div className="relative aspect-square sm:aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isPromo && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm uppercase tracking-wider">
            Oferta
          </span>
        )}
      </div>

      <div className="p-2.5 sm:p-4">
        <p className="text-[10px] sm:text-xs text-primary tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-0.5 sm:mb-1">{product.category}</p>
        <h3 className="font-serif text-sm sm:text-lg font-semibold mb-0.5 sm:mb-1 text-foreground leading-tight line-clamp-2">{product.name}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 line-clamp-1 sm:line-clamp-2 hidden sm:block">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <span className="text-base sm:text-xl font-bold text-primary">S/{product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-sm text-muted-foreground line-through">
                S/{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="bg-gradient-gold text-primary-foreground p-2 sm:p-2.5 rounded-sm hover:opacity-90 transition-opacity"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = activeCategory === "Todos" ? products : products.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalogo" className="py-12 sm:py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-12"
        >
          <p className="text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm font-medium mb-2 sm:mb-3">
            Nuestra Selección
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold mb-3 sm:mb-4">
            Catálogo Premium
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base px-2">
            Descubre nuestra exclusiva colección de licores seleccionados
          </p>
        </motion.div>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-6 sm:mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar producto..."
            className="w-full pl-10 pr-10 py-2.5 rounded-sm bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-12 pb-2 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-sm text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No se encontraron productos</p>
            <p className="text-muted-foreground/60 text-sm mt-1">Intenta con otro término de búsqueda</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;
