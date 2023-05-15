import "./bestselling.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Productcategoryaction } from "../../redux/productaction";
import GeneralCards from "../../cards/cards";
import watches from "../../assests/bestwatches.jpg";
import tools from "../../assests/besttool.jpg";
import fashion from "../../assests/bestfashion.jpg";
import computer from "../../assests/bestcomputer.jpg";
import {  Media } from "../../loader/loader";

const BestSelling = () => {
  const [displaybestselling, setDisplaybestselling] = useState([]);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  let imgarr = [
    <img className="imgstyle" src={fashion}></img>,
    <img className="imgstyle" src={watches}></img>,
    <img className="imgstyle" src={computer}></img>,
    <img className="imgstyle" src={tools}></img>,
  ];

  useEffect(() => {
    dispatch(Productcategoryaction());
  }, []);

  useEffect(() => {
    console.log("thumb", isLoading);
    setDisplaybestselling(products);
  }, [products]);
  return (
    <>
      <div className="productsfirst">
        <h4 className="productshead">BestSelling Products</h4>
        <div className="productcardparent">
          {isLoading?
            displaybestselling?.map((product, index) => {
              if (index < 4) {
                return <GeneralCards name={product} image={imgarr[index]} classname={"cards"} comppath={`categories`}/>;
              }
            }):<>
               <Media isLoading/>
              </>}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
