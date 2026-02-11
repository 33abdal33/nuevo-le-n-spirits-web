import chivasImg from "@/assets/chivas-regal.jpg";
import ballantinesImg from "@/assets/ballantines.jpg";
import somethingSpecialImg from "@/assets/something-special.jpg";
import oldTimesRedImg from "@/assets/old-times-red.webp";
import oldTimesBlackImg from "@/assets/old-times-black.webp";
import jwBlackImg from "@/assets/jw-black-label.jpg";
import jackDanielsImg from "@/assets/jack-daniels.png";
import jwRedImg from "@/assets/jw-red-label.jpg";
import rumImg from "@/assets/rum.jpg";
import casilleroImg from "@/assets/casillero-del-diablo.webp";
import tacamaRoseImg from "@/assets/tacama-rose.jpg";
import queiroloRoseImg from "@/assets/queirolo-rose.jpg";
import queiroloBorgonaImg from "@/assets/queirolo-borgona.webp";
import taberneroBorgonaImg from "@/assets/tabernero-borgona.jpg";
import taberneroRoseImg from "@/assets/tabernero-rose.webp";
import tequilaImg from "@/assets/tequila.jpg";
import cusquenaTrigo6packImg from "@/assets/cusquena-trigo-6pack.webp";
import cusquenaTrigoCaja12Img from "@/assets/cusquena-trigo-caja12.jpg";
import pilsen6pack355Img from "@/assets/pilsen-6pack-355.jpg";
import pilsen6pack473Img from "@/assets/pilsen-6pack-473.webp";
import pilsenCaja12Img from "@/assets/pilsen-caja12.jpg";
import pilsen330Img from "@/assets/pilsen-330.jpg";
import smirnoffClasicoImg from "@/assets/smirnoff-clasico.webp";
import absolutVodkaImg from "@/assets/absolut-vodka.webp";
import skyyVodkaImg from "@/assets/skyy-vodka.webp";
import smirnoffIceGreenAppleImg from "@/assets/smirnoff-ice-green-apple.webp";
import smirnoffAppleImg from "@/assets/smirnoff-apple.webp";
import russkayaVodkaImg from "@/assets/russkaya-vodka.webp";
import russkayaPinkImg from "@/assets/russkaya-pink.webp";

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
    price: 899,
    image: jwBlackImg,
    category: "Whiskies",
    description: "Whisky escocés premium 750ml, 12 años de maduración",
  },
  {
    id: 2,
    name: "Johnnie Walker Red Label",
    price: 549,
    image: jwRedImg,
    category: "Whiskies",
    description: "Whisky escocés 750ml, ideal para cócteles",
  },
  {
    id: 13,
    name: "Chivas Regal 12 Años",
    price: 799,
    image: chivasImg,
    category: "Whiskies",
    description: "Blended Scotch Whisky 750ml, suave y refinado",
  },
  {
    id: 14,
    name: "Ballantine's Finest",
    price: 499,
    image: ballantinesImg,
    category: "Whiskies",
    description: "Blended Scotch Whisky 750ml, equilibrado y versátil",
  },
  {
    id: 15,
    name: "Something Special",
    price: 449,
    image: somethingSpecialImg,
    category: "Whiskies",
    description: "Blended Scotch Whisky 750ml, madurado a la perfección",
  },
  {
    id: 16,
    name: "Old Times Red",
    price: 299,
    image: oldTimesRedImg,
    category: "Whiskies",
    description: "Blended Whisky 750ml, selección especial Nº1",
  },
  {
    id: 17,
    name: "Old Times Black",
    price: 349,
    image: oldTimesBlackImg,
    category: "Whiskies",
    description: "Blended Whisky 750ml, selección rara Nº2",
  },
  {
    id: 18,
    name: "Jack Daniel's Old No.7",
    price: 749,
    image: jackDanielsImg,
    category: "Whiskies",
    description: "Tennessee Whiskey 750ml, filtrado en carbón de arce",
  },
  {
    id: 3,
    name: "Ron Diplomático Reserva",
    price: 689,
    image: rumImg,
    category: "Rones",
    description: "Ron venezolano premium 750ml, notas de caramelo y vainilla",
  },
  {
    id: 4,
    name: "Bacardí Añejo Cuatro",
    price: 399,
    image: rumImg,
    category: "Rones",
    description: "Ron dorado 750ml, 4 años de añejamiento en barrica",
  },
  {
    id: 5,
    name: "Casillero del Diablo Reserva",
    price: 35,
    image: casilleroImg,
    category: "Vinos",
    description: "Vino tinto Cabernet Sauvignon 750ml, Concha y Toro, Chile",
  },
  {
    id: 6,
    name: "Tacama Rosé Semi Seco",
    price: 25,
    image: tacamaRoseImg,
    category: "Vinos",
    description: "Vino rosé semi seco De la Viña 750ml, Ica, Perú",
  },
  {
    id: 28,
    name: "Santiago Queirolo Rosé",
    price: 22,
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
    price: 22,
    image: taberneroBorgonaImg,
    category: "Vinos",
    description: "Vino Borgoña semi seco 750ml, 11% vol, Ica, Perú",
  },
  {
    id: 31,
    name: "Tabernero Gran Rosé",
    price: 28,
    image: taberneroRoseImg,
    category: "Vinos",
    description: "Vino Gran Rosé semi seco afrutado 750ml, Ica, Perú",
  },
  {
    id: 7,
    name: "Cusqueña Trigo Six Pack Lata 473ml",
    price: 42,
    originalPrice: 49,
    image: cusquenaTrigo6packImg,
    category: "Cervezas",
    description: "Six pack de cerveza de trigo 100% malta, latas de 473ml",
    isPromo: true,
  },
  {
    id: 8,
    name: "Cusqueña Trigo Caja x12",
    price: 69,
    originalPrice: 82,
    image: cusquenaTrigoCaja12Img,
    category: "Cervezas",
    description: "Caja de 12 botellas de cerveza de trigo premium 620ml",
    isPromo: true,
  },
  {
    id: 24,
    name: "Pilsen Callao Six Pack 355ml",
    price: 28,
    image: pilsen6pack355Img,
    category: "Cervezas",
    description: "Six pack de latas 355ml, reuniendo amigos desde 1863",
  },
  {
    id: 25,
    name: "Pilsen Callao Six Pack 473ml",
    price: 36,
    image: pilsen6pack473Img,
    category: "Cervezas",
    description: "Six pack de latas grandes 473ml, la cerveza del Perú",
  },
  {
    id: 26,
    name: "Pilsen Callao Caja x12",
    price: 55,
    originalPrice: 65,
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
    name: "Don Julio Reposado",
    price: 799,
    image: tequilaImg,
    category: "Tequilas",
    description: "Tequila 100% agave 750ml, reposado en barricas de roble",
  },
  {
    id: 10,
    name: "Patrón Silver",
    price: 949,
    image: tequilaImg,
    category: "Tequilas",
    description: "Tequila ultra premium 750ml, cristalino y suave",
  },
  {
    id: 11,
    name: "Smirnoff Nº21 Clásico",
    price: 349,
    image: smirnoffClasicoImg,
    category: "Vodkas",
    description: "Vodka clásico 750ml, triple destilación, filtrado 10 veces",
  },
  {
    id: 12,
    name: "Absolut Vodka",
    price: 549,
    image: absolutVodkaImg,
    category: "Vodkas",
    description: "Vodka sueco premium 700ml, destilación continua desde 1879",
  },
  {
    id: 19,
    name: "Skyy Vodka",
    price: 399,
    image: skyyVodkaImg,
    category: "Vodkas",
    description: "Vodka americano 750ml, cuádruple destilación y triple filtración",
  },
  {
    id: 20,
    name: "Smirnoff Ice Green Apple",
    price: 89,
    image: smirnoffIceGreenAppleImg,
    category: "Vodkas",
    description: "Bebida con vodka sabor manzana verde 355ml, refrescante y ligera",
  },
  {
    id: 21,
    name: "Smirnoff Green Apple",
    price: 349,
    image: smirnoffAppleImg,
    category: "Vodkas",
    description: "Vodka saborizado manzana verde 700ml, infusión natural de sabores",
  },
  {
    id: 22,
    name: "Russkaya Vodka",
    price: 249,
    image: russkayaVodkaImg,
    category: "Vodkas",
    description: "Vodka triple destilado 750ml, suave y cristalino",
  },
  {
    id: 23,
    name: "Russkaya Pink Strawberry",
    price: 279,
    image: russkayaPinkImg,
    category: "Vodkas",
    description: "Vodka saborizado fresa 750ml, sabor dulce y refrescante",
  },
];

export const promoProducts = products.filter((p) => p.isPromo);

export const combos = [
  {
    id: 101,
    name: "Combo Fiesta Premium",
    price: 1499,
    originalPrice: 1899,
    description: "1 Whisky Black Label + 1 Ron Diplomático + 12 Heineken",
    image: jwBlackImg,
    category: "Combos",
    isPromo: true,
  },
  {
    id: 102,
    name: "Combo Celebración",
    price: 999,
    originalPrice: 1299,
    description: "1 Tequila Don Julio + 1 Vino Catena + 6 Cervezas",
    image: tequilaImg,
    category: "Combos",
    isPromo: true,
  },
  {
    id: 103,
    name: "Combo Noche de Amigos",
    price: 99,
    originalPrice: 130,
    description: "Caja Pilsen x12 + Six Pack Cusqueña Trigo + Piqueo",
    image: pilsenCaja12Img,
    category: "Combos",
    isPromo: true,
  },
];
