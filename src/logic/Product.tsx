import { sandals } from "../images";

type Productype = {
  image: string;
  about: string;
  amount: string;
  link: string;
};

export const Homeproduct: Array<Productype> = [
  {
    image: sandals,
    link: "ist link",
    about:
      "Daiwa-Sandals Men's Outdoor Fishing, Beach Shoes, Non-Slip, Wear...",
    amount: "$30.56",
  },
  //   {
  //     image: sandals,
  //     link: "ist link",
  //     about:
  //       "Daiwa-Sandals Men's Outdoor Fishing, Beach Shoes, Non-Slip, Wear...",
  //     amount: "$30.56",
  //   },
];

export default Homeproduct;
