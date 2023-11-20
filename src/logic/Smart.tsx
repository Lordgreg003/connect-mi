import { watch, shoe, cake } from "../images";

type Smartype = {
  image: string;
  name: string;
  link: string;
};

export const Homesmart: Array<Smartype> = [
  {
    image: watch,
    link: "ist link",
    name: "SMART WEARABLE",
  },
  {
    image: shoe,
    link: "2nd link",
    name: "NIKE SHOE",
  },
  {
    image: cake,
    link: "3rd link",
    name: "NICE CAKE",
  },
];
// console.log(Homesmart);
export default Homesmart;
