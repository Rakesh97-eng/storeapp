import "./Home.css";
import Feature_products from "./feature-products/feature_product";
import BestSelling from "./bestselling/bestselling";
import Chooseus from "./chooseus/chooseus";
import { Carousel } from "./carousel/carousel";
import { Consultation, Offer } from "./extrahome/extrahome";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Feature_products />
      <Consultation />
      <BestSelling />
      <Offer />
      <Chooseus />
    </>
  );
};
