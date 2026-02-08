import chivasImg from "@/assets/chivas-regal.jpg";
import ballantinesImg from "@/assets/ballantines.jpg";
import somethingSpecialImg from "@/assets/something-special.jpg";
import oldTimesRedImg from "@/assets/old-times-red.webp";
import oldTimesBlackImg from "@/assets/old-times-black.webp";
import jwBlackImg from "@/assets/jw-black-label.jpg";
import jackDanielsImg from "@/assets/jack-daniels.png";
import jwRedImg from "@/assets/jw-red-label.jpg";
import rumImg from "@/assets/rum.jpg";
import wineImg from "@/assets/wine.jpg";
import beerImg from "@/assets/beer.jpg";
import tequilaImg from "@/assets/tequila.jpg";
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
    price: 259,
    image: wineImg,
    category: "Vinos",
    description: "Vino tinto Cabernet Sauvignon 750ml, Chile",
  },
  {
    id: 6,
    name: "Malbec Catena Zapata",
    price: 549,
    image: wineImg,
    category: "Vinos",
    description: "Vino tinto argentino premium 750ml, Mendoza",
  },
  {
    id: 7,
    name: "Heineken Premium Pack",
    price: 189,
    originalPrice: 229,
    image: beerImg,
    category: "Cervezas",
    description: "Pack de 12 cervezas premium 355ml",
    isPromo: true,
  },
  {
    id: 8,
    name: "Corona Extra 24 Pack",
    price: 349,
    originalPrice: 399,
    image: beerImg,
    category: "Cervezas",
    description: "Caja de 24 cervezas 355ml, la más refrescante",
    isPromo: true,
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
    price: 599,
    originalPrice: 749,
    description: "24 Pack Corona + 12 Heineken + Botana premium",
    image: beerImg,
    category: "Combos",
    isPromo: true,
  },
];
