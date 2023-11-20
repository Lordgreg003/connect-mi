import { cake } from "../images";

type Productype = {
  image: string;
  about: string;
  amount: string;
  link: string;
};

export const Serviceproduct: Array<Productype> = [
  {
    image: cake,
    link: "ist link",
    about:
      "Daiwa-Sandals Men's Outdoor Fishing, Beach Shoes, Non-Slip, Wear...",
    amount: "$30.56",
  },
];

export default Serviceproduct;
