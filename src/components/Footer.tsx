const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-bold text-gradient-gold mb-2 sm:mb-3">Nuevo León</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tu licorería premium de confianza. La mejor selección de licores para tus momentos especiales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wider text-xs sm:text-sm">
              Navegación
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Inicio", "Catálogo", "Promociones", "Nosotros", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace("á", "a")}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wider text-xs sm:text-sm">
              Legal
            </h4>
            <p className="text-[10px] sm:text-xs text-muted-foreground/60 leading-relaxed">
              Venta exclusiva a mayores de 18 años. El consumo excesivo de alcohol es perjudicial para la salud. 
              Bebe con responsabilidad.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-4 sm:pt-6 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Licorería Nuevo León. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
