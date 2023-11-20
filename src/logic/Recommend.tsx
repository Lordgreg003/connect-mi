import { shoe } from "../images";

type Recommendtype = {
  image: string;
  link: string;
  about: string;
  amount: string;
};

export const HomeRecommend: Array<Recommendtype> = [
  {
    image: shoe,
    link: "ist link",
    about: "Delicious cake for breakfast and dessert",
    amount: "$30.56",
  },
];

export default HomeRecommend;
