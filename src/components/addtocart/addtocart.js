import { useLocation } from "react-router-dom";

const Addtocart = ()=>{
    const { state } = useLocation();
    console.log("location",state.cartitem);
    return(
        <>
         
        </>
    )
}
export default Addtocart