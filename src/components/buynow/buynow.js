import { useLocation } from "react-router-dom";
import './buynow.css'
import { useEffect, useState } from "react";
const Buynow = () => {
  const { state ,pathname} = useLocation();
  console.log("pathname",pathname);
  let cartvalue = state.cartitem;
  const [addvalue,setAddvalue] = useState(false)

  useEffect(()=>{
     
  },[])

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" ,margin:"2%",height:"16rem"}}>
      <div style={{ display: "flex", flexDirection: "column",justifyContent:"space-between",maxWidth:"50%" }}>
        <p><b>Name</b>:   {cartvalue.title}</p>
        <p><b>cateGory</b>:{cartvalue.category}</p>
        <p><b>Desc</b>:{cartvalue.description}</p>
        <p><b>Price</b>:{cartvalue.price}</p>
        <button className="buynowbutton">Buy</button>
      </div>
      <div>
        <img src={cartvalue.thumbnail} />
      </div>
    </div>
  );
};

export default Buynow;
