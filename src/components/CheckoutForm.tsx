import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

interface CheckoutFormProps {
  onBack: () => void;
}

const WHATSAPP_NUMBER = "51944088559";

const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();

  const handleSubmit = () => {
    const orderLines = items
      .map((i) => `• ${i.name} x${i.quantity} - S/${(i.price * i.quantity).toFixed(2)}`)
      .join("\n");

    const message = encodeURIComponent(
      `¡Hola! Quiero hacer un pedido:\n\n` +
        `${orderLines}\n\n` +
        `*Total: S/${totalPrice.toFixed(2)}*`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    clearCart();
    setIsCartOpen(false);
    toast.success("¡Pedido enviado! Te atenderemos por WhatsApp");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
        >
          ← Volver al carrito
        </button>

        <h3 className="font-serif text-lg font-bold text-foreground">Resumen del pedido</h3>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 bg-secondary/50 rounded-sm p-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
              </div>
              <span className="text-sm text-primary font-semibold whitespace-nowrap">
                S/{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-3 flex justify-between items-center">
          <span className="text-base font-bold text-foreground">Total</span>
          <span className="text-lg font-bold text-primary">S/{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t border-border p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-sm font-semibold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity shadow-gold active:scale-95"
        >
          Enviar Pedido por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
