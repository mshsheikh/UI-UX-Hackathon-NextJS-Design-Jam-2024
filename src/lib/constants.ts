export type Product = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  otherPrice?: string;
  type?: string;
  typeValue?: string;
};

export const PRODUCTS = [
  {
    id: "10",
    imageUrl: "/images/p_1.png",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    otherPrice: "Rp 3.500.000",
    type: "DISCOUNTED",
    typeValue: "-30%",
  },
  {
    id: "20",
    imageUrl: "/images/p_2.png",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: "30",
    imageUrl: "/images/p_3.png",
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    otherPrice: "Rp 14.000.000",
    type: "DISCOUNTED",
    typeValue: "-50%",
  },
  {
    id: "40",
    imageUrl: "/images/p_4.png",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    otherPrice: "",
    type: "NEW",
    typeValue: "New",
  },
  {
    id: "50",
    imageUrl: "/images/p_5.png",
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    otherPrice: "",
    type: "NORMAL",
    typeValue: "",
  },

  {
    id: "60",
    imageUrl: "/images/p_6.png",
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    otherPrice: "",
    type: "NEW",
    typeValue: "New",
  },
  {
    id: "70",
    imageUrl: "/images/p_7.png",
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 700.000",
    otherPrice: "Rp 14.000.000",
    type: "DISCOUNTED",
    typeValue: "-50%",
  },

  {
    id: "80",
    imageUrl: "/images/p_8.png",
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    otherPrice: "",
    type: "NEW",
    typeValue: "New",
  },
];
