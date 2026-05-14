export type Product={
    id: number;
  name: string;
  shopType: string;
  weight: string;
  price: string;
  image: string;
}
export const productList: Product[] = [
  {
    id: 1,
    name: "Beetroot",
    shopType: "Local shop",
    weight: "500 gm.",
    price: "17.29$",
    image: "/beetroot.jpeg"
  },
  {
    id: 2,
    name: "Italian Avocado",
    shopType: "Local shop",
    weight: "500 gm.",
    price: "12.29$",
    image: "/italianavacado.jpg"
  },
  {
    id: 3,
    name: "Coke",
    shopType: "Process food",
    weight: "500 gm.",
    price: "14.29$",
    image: "/coke.jpeg"
  },
  {
    id: 4,
    name: "Tomato",
    shopType: "Local Shop",
    weight: "500 gm.",
    price: "16.29$",
    image: "/tomato.jpg"
  },
  {
    id: 5,
    name: "Cold drinks",
    shopType: "Sprite",
    weight: "500 gm.",
    price: "18.29$",
    image: "/sprite.jpeg"
  },
  {
    id: 6,
    name: "Bread",
    shopType: "Snacks",
    weight: "200 gm.",
    price: "4.50$",
    image: "/bread.jpeg"
  },
  {
    id: 7,
    name: "Fresh Carrots",
    shopType: "Local shop",
    weight: "1 kg.",
    price: "3.99$",
    image: "/carrot.jpeg"
  },
  {
    id: 8,
    name: "Fresh Cucumbers",
    shopType: "Local shop",
    weight: "500 gm.",
    price: "2.49$",
    image: "/cucumbers.jpeg"
  },
  {
    id: 9,
    name: "Lay's Chips",
    shopType: "Barbecue",
    weight: "130 gm.",
    price: "3.20$",
    image: "/lays.jpeg"
  },
  {
    id: 10,
    name: "Fresh Cabbage",
    shopType: "Local shop",
    weight: "1 pc.",
    price: "1.89$",
    image: "/cabbage.jpeg"
  }
];