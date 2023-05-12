import "./feature_product.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Productcategoryaction } from "../../redux/productaction";
import GeneralCards from "../../cards/cards";
import {
  faVestPatches,
  faShoePrints,
  faPhoneFlip,
  faComputerMouse,
  faStopwatch,
  faHatHard,
  faChair,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const Feature_products = () => {
  const [displayproducts, setDisplayProducts] = useState([]);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  let imgarr = [
    <FontAwesomeIcon  color="#4a6366" icon={faVestPatches} />,
    <FontAwesomeIcon icon={faHatHard} />,
    <FontAwesomeIcon color="#FAB3BB" icon={faStopwatch} />,
    <FontAwesomeIcon icon={faShoePrints} />,
    <FontAwesomeIcon  icon={faComputerMouse} />,
    <FontAwesomeIcon color="#4ba0a8" icon={faPhoneFlip} />,
    <FontAwesomeIcon  icon={faToolbox} />,
    <FontAwesomeIcon color="#3192bc"  icon={faChair} />,
  ];

  useEffect(() => {
    dispatch(Productcategoryaction());
  }, []);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);
  return (
    <>
      <div className="productsfirst">
        <h4 className="productshead">Featured Products</h4>
        <div className="productcardparent">
          {isLoading?
          <>
          {
            displayproducts?.map((product, index) => {
              if(index <8){
                return <GeneralCards classname={"cards"}  name={product} image={imgarr[index]} comppath ={`categories`} />;
              }
              
            })}
          </>:"Loading....."}
        </div>
      </div>
    </>
  );
};

export default Feature_products;
