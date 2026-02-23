import chivasImg from "@/assets/chivas-regal.jpg";
import ballantinesImg from "@/assets/ballantines.jpg";
import somethingSpecialImg from "@/assets/something-special.jpg";
import oldTimesRedImg from "@/assets/old-times-red.webp";
import oldTimesBlackImg from "@/assets/old-times-black.webp";
import jwBlackImg from "@/assets/BLACK.png";
import jackDanielsImg from "@/assets/jack-daniels.png";
import jwRedImg from "@/assets/jw-red-label.jpg";
import rumImg from "@/assets/rum.jpg";
import casilleroImg from "@/assets/casillero-del-diablo.webp";
import tacamaRoseImg from "@/assets/tacama-rose.jpg";
import queiroloRoseImg from "@/assets/queirolo-rose.jpg";
import queiroloBorgonaImg from "@/assets/queirolo-borgona.webp";
import taberneroBorgonaImg from "@/assets/tabernero-borgona.jpg";
import taberneroRoseImg from "@/assets/tabernero-rose.webp";
import JoseCuervoAzul from "@/assets/Tequila Jose Cuervo Azul.png";
import JoseCuervoDorado from "@/assets/Tequila Jose cuervo dorado.png";
import cusquenaTrigo6packImg from "@/assets/cusquena-trigo-6pack.webp";
import cusquenaTrigoCaja12Img from "@/assets/cusquena-trigo-caja12.jpg";
import pilsen6pack355Img from "@/assets/pilsen-6pack-355.jpg";
import pilsen6pack473web from "@/assets/pilsen-6pack 473.webp"
import pilsenCaja12Img from "@/assets/pilsen-caja12.jpg";
import pilsen330Img from "@/assets/pilsen-330.jpg";
import smirnoffClasicoImg from "@/assets/smirnoff-clasico.webp";
import absolutVodkaImg from "@/assets/absolut-vodka.webp";
import skyyVodkaImg from "@/assets/skyy-vodka.webp";
import smirnoffIceGreenAppleImg from "@/assets/smirnoff-ice-green-apple.webp";
import smirnoffAppleImg from "@/assets/smirnoff-apple.webp";
import russkayaVodkaImg from "@/assets/russkaya-vodka.webp";
import RUSSKAYAPING from "@/assets/RUSSKAYAPING.png";
// Agrega estas importaciones en la parte superior junto a las demás
import cartavioBlackBarrelImg from "@/assets/RON CARTAVIO BLACK BARREL.png";
import cartavioBlancoImg from "@/assets/Ron Cartavio BLANCO 720.png";
import cartavioBlackImg from "@/assets/Ron Cartavio Black 720.png";
import barceloAnejoImg from "@/assets/download (1).png"; // Te sugiero renombrar la imagen a barcelo-anejo.png en tu carpeta
import ComboRussKaya from "@/assets/RusskayaCombo.png";
import ComboRedLabel from "@/assets/ComboRedLabel.webp";
import ComboRonCartavio from "@/assets/combo-pack-cartavio.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isPromo?: boolean;
}

export const categories = [
  "Todos",
  "Whiskies",
  "Rones",
  "Vinos",
  "Cervezas",
  "Tequilas",
  "Vodkas",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: 1,
    name: "Johnnie Walker Black Label",
    price: 120,
    image: jwBlackImg,
    category: "Whiskies",
    description: "Whisky escocés premium 750ml, 12 años de maduración",
  },
  {
    id: 2,
    name: "Johnnie Walker Red Label",
    price: 60,
    image: jwRedImg,
    category: "Whiskies",
    description: "Whisky escocés 750ml, ideal para cócteles",
  },
  {
    id: 13,
    name: "Chivas Regal 12 Años",
    price: 80,
    image: chivasImg,
    category: "Whiskies",
    description: "Blended Scotch Whisky 750ml, suave y refinado",
  },
  {
    id: 14,
    name: "Ballantine's Finest",
    price: 50,
    image: ballantinesImg,
    category: "Whiskies",
    description: "Blended Scotch Whisky 750ml, equilibrado y versátil",
  },
  {
    id: 15,
    name: "Something Special",
    price: 50,
    image: somethingSpecialImg,
    category: "Whiskies",
    description: "Blended Scotch Whisky 750ml, madurado a la perfección",
  },
  {
    id: 16,
    name: "Old Times Red",
    price: 24,
    image: oldTimesRedImg,
    category: "Whiskies",
    description: "Blended Whisky 750ml, selección especial Nº1",
  },
  {
    id: 17,
    name: "Old Times Black",
    price: 30,
    image: oldTimesBlackImg,
    category: "Whiskies",
    description: "Blended Whisky 750ml, selección rara Nº2",
  },
  {
    id: 18,
    name: "Jack Daniel's Old ",
    price: 110,
    image: jackDanielsImg,
    category: "Whiskies",
    description: "Tennessee Whiskey 750ml, filtrado en carbón de arce",
  },
  {
    id: 3,
    name: "Ron Cartavio Black Barrel",
    price: 30,
    image: cartavioBlackBarrelImg,
    category: "Rones",
    description: "Ron peruano premium, añejado 3 años con notas intensas a madera y especias.",
  },
  {
    id: 4,
  name: "Ron Cartavio Blanco",
    price: 25,
    image: cartavioBlancoImg,
    category: "Rones",
    description: "Ron original peruano, suave y versátil. Ideal para preparar mojitos y cócteles.",
  },
  {
    id: 32,
    name: "Ron Cartavio Black",
    price: 28, // Ajusta el precio según tu tienda 
    image: cartavioBlackImg, category: "Rones",
    description: "Ron oscuro peruano, con profundo sabor a caramelo y notas tostadas.",
 },
  {
     id: 33,
    name: "Ron Barceló Añejo",
    price: 55, // Ajusta el precio según tu tienda
    image: barceloAnejoImg,
    category: "Rones",
    description: "Ron dominicano añejado en barricas de roble, 37.5% vol. Sabor suave con toques de vainilla.",
  },

  {
    id: 5,
    name: "Casillero del Diablo Reserva",
    price: 40,
    image: casilleroImg,
    category: "Vinos",
    description: "Vino tinto Cabernet Sauvignon 750ml, Concha y Toro, Chile",
  },
  {
    id: 6,
    name: "Tacama Rosé Semi Seco",
    price: 35,
    image: tacamaRoseImg,
    category: "Vinos",
    description: "Vino rosé semi seco De la Viña 750ml, Ica, Perú",
  },
  {
    id: 28,
    name: "Santiago Queirolo Rosé",
    price: 20,
    image: queiroloRoseImg,
    category: "Vinos",
    description: "Vino Rosé Shiraz 750ml, 11.5% vol, tradición peruana",
  },
  {
    id: 29,
    name: "Santiago Queirolo Borgoña",
    price: 20,
    image: queiroloBorgonaImg,
    category: "Vinos",
    description: "Vino Borgoña Gran Vino 750ml, clásico peruano",
  },
  {
    id: 30,
    name: "Tabernero Borgoña",
    price: 20,
    image: taberneroBorgonaImg,
    category: "Vinos",
    description: "Vino Borgoña semi seco 750ml, 11% vol, Ica, Perú",
  },
  {
    id: 31,
    name: "Tabernero Gran Rosé",
    price: 20,
    image: taberneroRoseImg,
    category: "Vinos",
    description: "Vino Gran Rosé semi seco afrutado 750ml, Ica, Perú",
  },
  {
    id: 7,
    name: "Cusqueña Trigo Six Pack Lata 473ml",
    price: 36,
    originalPrice: 40,
    image: cusquenaTrigo6packImg,
    category: "Cervezas",
    description: "Six pack de cerveza de trigo 100% malta, latas de 473ml",
    isPromo: true,
  },
  {
    id: 8,
    name: "Cusqueña Trigo Caja x12",
    price: 95,
    originalPrice: 87,
    image: cusquenaTrigoCaja12Img,
    category: "Cervezas",
    description: "Caja de 12 botellas de cerveza de trigo premium 620ml",
    isPromo: true,
  },
  {
    id: 24,
    name: "Pilsen Callao Six Pack 355ml",
    price: 25,
    image: pilsen6pack355Img,
    category: "Cervezas",
    description: "Six pack de latas 355ml, reuniendo amigos desde 1863",
  },
  {
    id: 25,
    name: "Pilsen Callao Six Pack 473ml",
    price: 36,
    image: pilsen6pack473web,
    category: "Cervezas",
    description: "Six pack de latas grandes 473ml, la cerveza del Perú",
  },
  {
    id: 26,
    name: "Pilsen Callao Caja x12",
    price: 84,
    originalPrice: 90,
    image: pilsenCaja12Img,
    category: "Cervezas",
    description: "Caja de 12 botellas 620ml, ideal para reuniones",
    isPromo: true,
  },
  {
    id: 27,
    name: "Pilsen Callao Botella 330ml",
    price: 5,
    image: pilsen330Img,
    category: "Cervezas",
    description: "Botella individual 330ml, cerveza lager clásica peruana",
  },
  {
    id: 9,
    name: "Jose Cuervo Especial Silver",
    price: 80,
    image: JoseCuervoAzul,
    category: "Tequilas",
    description: "Tequila blanco 750ml, sabor suave, fresco y con ligeras notas de agave.",
  },
  {
    id: 10,
    name: "Jose Cuervo Especial Gold",
    price: 80,
    image: JoseCuervoDorado,
    category: "Tequilas",
    description: "Tequila dorado 750ml, reposado con notas dulces de vainilla y roble",
  },
  {
    id: 11,
    name: "Smirnoff Nº21 Clásico",
    price: 35,
    image: smirnoffClasicoImg,
    category: "Vodkas",
    description: "Vodka clásico 750ml, triple destilación, filtrado 10 veces",
  },
  {
    id: 12,
    name: "Absolut Vodka",
    price: 60,
    image: absolutVodkaImg,
    category: "Vodkas",
    description: "Vodka sueco premium 700ml, destilación continua desde 1879",
  },
  {
    id: 19,
    name: "Skyy Vodka",
    price: 50,
    image: skyyVodkaImg,
    category: "Vodkas",
    description: "Vodka americano 750ml, cuádruple destilación y triple filtración",
  },
  {
    id: 20,
    name: "Smirnoff Ice Green Apple",
    price: 8,
    image: smirnoffIceGreenAppleImg,
    category: "Vodkas",
    description: "Bebida con vodka sabor manzana verde 355ml, refrescante y ligera",
  },
  {
    id: 21,
    name: "Smirnoff Green Apple",
    price: 40,
    image: smirnoffAppleImg,
    category: "Vodkas",
    description: "Vodka saborizado manzana verde 700ml, infusión natural de sabores",
  },
  {
    id: 22,
    name: "Russkaya Vodka",
    price: 25,
    image: russkayaVodkaImg,
    category: "Vodkas",
    description: "Vodka triple destilado 750ml, suave y cristalino",
  },
  {
    id: 23,
    name: "Russkaya Pink Strawberry",
    price: 25,
    image: RUSSKAYAPING,
    category: "Vodkas",
    description: "Vodka saborizado fresa 750ml, sabor dulce y refrescante",
  },
];

export const promoProducts = products.filter((p) => p.isPromo);

export const combos = [
  {
    id: 101,
    name: "Combo RussKaya",
    price: 35,
    originalPrice: 45,
    description: "1 RussKaya + Guarana de 2 Lt + 1 Hielo",
    image: ComboRussKaya,
    category: "Combos",
    isPromo: true,
  },
  {
    id: 102,
    name: "Combo RedLabel",
    price: 70,
    originalPrice: 80,
    description: "1 Red Label + Hielo + Guarana",
    image: ComboRedLabel,
    category: "Combos",
    isPromo: true,
  },
  {
    id: 103,
    name: "Combo RonCartavio",
    price: 35,
    originalPrice: 40,
    description: "1 Ron de 720 + 1 Hielo + 1 CocaCola",
    image: ComboRonCartavio,
    category: "Combos",
    isPromo: true,
  },
];
