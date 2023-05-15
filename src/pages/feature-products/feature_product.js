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
  faIgloo,
  faChair,
  faToolbox,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Media } from "../../loader/loader";

const Feature_products = () => {
  const [displayproducts, setDisplayProducts] = useState([]);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  let imgarr = [
    <FontAwesomeIcon color="#4ba0a8" icon={faPhoneFlip} />,
    <FontAwesomeIcon icon={faComputerMouse} />,
    <FontAwesomeIcon color="#3192bc" icon={faSprayCanSparkles} />,
    <FontAwesomeIcon icon={faShoePrints} />,
    <FontAwesomeIcon color="#4a6366" icon={faToolbox} />,
    <FontAwesomeIcon icon={faIgloo} />,
    <FontAwesomeIcon color="#5e6855" icon={faChair} />,
    <FontAwesomeIcon icon={faVestPatches} />,
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
          {isLoading ? (
            <>
              {displayproducts?.map((product, index) => {
                if (index < 8) {
                  return (
                    <GeneralCards
                      classname={"cards"}
                      name={product}
                      image={imgarr[index]}
                      comppath={`categories`}
                    />
                  );
                }
              })}
            </>
          ) : (
           <Media isLoading/>
          )}
        </div>
      </div>
    </>
  );
};

export default Feature_products;
