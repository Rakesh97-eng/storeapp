import "./bestselling.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Productcategoryaction } from "../../redux/productaction";
import GeneralCards from "../../cards/cards";
import watches from "../../assests/bestwatches.jpg"
import tools from "../../assests/besttool.jpg"
import fashion from "../../assests/bestfashion.jpg"
import computer from "../../assests/bestcomputer.jpg"

const BestSelling = () => {
  const [displaybestselling, setDisplaybestselling] = useState([]);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  
  let imgarr = [
    <img className="imgstyle" src={fashion}></img>,3,
    <img   className="imgstyle" src={watches}></img>,5,
    <img   className="imgstyle" src={computer}></img>,7,
    <img  className="imgstyle"  src={tools}></img>
  ]

  useEffect(() => {
    dispatch(Productcategoryaction());
  }, []);

  useEffect(() => {
    setDisplaybestselling(products.data);
  }, [products]);
  return (
    <>
      <div className="productsfirst">
        <h4 className="productshead">BestSelling Products</h4>
        <div className="productcardparent">
          {isLoading === true &&
            displaybestselling?.map((product, index) => {
              if (index%2 == 0) {
                return( 
                <GeneralCards name={product.name} image={imgarr[index]}/>)
              }
            })}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
