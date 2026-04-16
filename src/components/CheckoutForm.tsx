import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
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
        `👤 Nombre: ${name.trim()}\n` +
        `📱 Celular: ${phone.trim()}`
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

        <h3 className="font-serif text-lg font-bold text-foreground">Datos de contacto</h3>

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
