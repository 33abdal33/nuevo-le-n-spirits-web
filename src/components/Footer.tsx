const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-gradient-gold mb-3">Nuevo León</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu licorería premium de confianza. La mejor selección de licores para tus momentos especiales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-sm">
              Navegación
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Catálogo", "Promociones", "Nosotros", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace("á", "a")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Venta exclusiva a mayores de 6 años. El consumo excesivo de alcohol es perjudicial para la salud. 
              Bebe con responsabilidad.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Licorería Nuevo León. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
