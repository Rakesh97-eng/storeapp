import { useSelector } from "react-redux";
import GeneralCards from "../../cards/cards";
import "./addtocart.css";

const Addtocart = () => {
  const { cartproducts } = useSelector((state) => state.products);
  console.log(cartproducts, "cartporducts");

  return (
    <>
      <div className="cartcontainer">
        {cartproducts.length > 0 ? cartproducts.map((product) => {
          return (
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
          );
        }):<>
          
          <p>Your cart is Emptyy....</p>
        
        </>}
      </div>
    </>
  );
};
export default Addtocart;
