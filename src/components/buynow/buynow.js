import { useLocation } from "react-router-dom";
import './buynow.css'
import { addcart, removecart } from "../../redux/productslice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const Buynow = () => {
  const { state ,pathname} = useLocation();
  const dispatch = useDispatch();
  let cartvalue = state.cartitem;
  console.log("cartvaklue",cartvalue);
  const [addvalue,setAddvalue] = useState(false)

  useEffect(()=>{
    if(addvalue ){
      dispatch(removecart(cartvalue))
    }
    else{
      dispatch(addcart(cartvalue))
    }
  },[addvalue])



  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" ,margin:"2%",height:"16rem"}}>
      <div style={{ display: "flex", flexDirection: "column",justifyContent:"space-between",maxWidth:"50%" }}>
        <p><b>Name</b>:   {cartvalue.title}</p>
        <p><b>cateGory</b>:{cartvalue.category}</p>
        <p><b>Desc</b>:{cartvalue.description}</p>
        <p><b>Price</b>:{cartvalue.price}</p>
        <button onClick={()=>setAddvalue(true)} className="buynowbutton">Buy</button>
      </div>
      <div>
        <img src={cartvalue.thumbnail} />
      </div>
    </div>
  );
};

export default Buynow;
