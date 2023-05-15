import { useEffect, useState } from "react";
import { Getbycategory } from "../../redux/productaction";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getproductscategory } from "../../redux/productslice";
import GeneralCards from "../../cards/cards";
import "./product_category.css";

const Categoryproduct = () => {
  const { state } = useLocation();
  let dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const { categoryproduct, isLoading } = useSelector((state) => state.products);


  useEffect(() => {
    Getbycategory(state.category).then((res) => {
      dispatch(getproductscategory(res.data.products));
    });
  },[]);

  useEffect(() => {
    setCategories(categoryproduct);
    return ()=>{
      console.log("kkk");
      setCategories(null)
    }
  }, [categoryproduct]);

  return (
    <>
      <div className="categoryheader">Categories</div>
      <div className="categorycardparent">
        {categories.map((product, index) => {
          return (
            <div className="categorycard">
              <GeneralCards
                classname={"categorycards"}
                cartproduct={product}
                name={product.title}
                image={
                  <img className="catimgstyle" src={product.images[0]}></img>
                }
                button={"Buy Now"}
                description={product.description}
                price={product.price}
                rating={product.rating}
                discount={product.discountPercentage}
                comppath={"buynow"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categoryproduct;
