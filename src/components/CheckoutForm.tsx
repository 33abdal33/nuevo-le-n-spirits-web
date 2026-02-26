import { useState } from "react";
import { MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

interface CheckoutFormProps {
  onBack: () => void;
}

const WHATSAPP_NUMBER = "51944088559";

const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Tu navegador no soporta geolocalización");
      return;
    }
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`
          );
          const data = await res.json();
          setAddress(data.display_name || `${latitude}, ${longitude}`);
        } catch {
          setAddress(`${latitude}, ${longitude}`);
        }
        setLoadingLocation(false);
      },
      () => {
        toast.error("No se pudo obtener tu ubicación. Permite el acceso.");
        setLoadingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    if (phone.trim().length < 9) {
      toast.error("Ingresa un número de celular válido");
      return;
    }

    const orderLines = items
      .map((i) => `• ${i.name} x${i.quantity} - S/${(i.price * i.quantity).toFixed(2)}`)
      .join("\n");

    const message = encodeURIComponent(
      `¡Hola! Quiero hacer un pedido:\n\n` +
        `${orderLines}\n\n` +
        `*Total: S/${totalPrice.toFixed(2)}*\n\n` +
        `📋 *Datos de entrega:*\n` +
        `👤 Nombre: ${name.trim()}\n` +
        `📱 Celular: ${phone.trim()}\n` +
        `📍 Dirección: ${address.trim()}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    clearCart();
    setIsCartOpen(false);
    toast.success("¡Pedido enviado! Te atenderemos por WhatsApp");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
        >
          ← Volver al carrito
        </button>

        <h3 className="font-serif text-lg font-bold text-foreground">Datos de entrega</h3>

        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Nombre completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            maxLength={100}
            className="w-full px-3 py-2.5 rounded-sm bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Número de celular</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ""))}
            placeholder="999 999 999"
            maxLength={15}
            className="w-full px-3 py-2.5 rounded-sm bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

        {/* Address */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Dirección de entrega</label>
          <div className="relative">
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Av. Ejemplo 123, Distrito"
              maxLength={300}
              rows={2}
              className="w-full px-3 py-2.5 pr-12 rounded-sm bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="button"
              onClick={getLocation}
              disabled={loadingLocation}
              className="absolute right-2 top-2 p-1.5 rounded-sm text-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
              title="Usar mi ubicación"
            >
              {loadingLocation ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <MapPin className="w-4 h-4" />
              )}
            </button>
          </div>
          <button
            type="button"
            onClick={getLocation}
            disabled={loadingLocation}
            className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            <MapPin className="w-3 h-3" />
            {loadingLocation ? "Obteniendo ubicación..." : "Usar mi ubicación actual"}
          </button>
        </div>

        {/* Order summary */}
        <div className="mt-4 p-3 bg-background border border-border rounded-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Resumen</p>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm text-foreground py-0.5">
              <span className="truncate mr-2">{item.name} x{item.quantity}</span>
              <span className="text-primary font-medium whitespace-nowrap">S/{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary">S/{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="border-t border-border p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <button
          type="submit"
          className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-sm font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity shadow-gold active:scale-95"
        >
          Enviar Pedido por WhatsApp
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
