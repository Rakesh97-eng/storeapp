import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import { useDispatch, useSelector } from 'react-redux';


const Header = ()=>{

  const navigate  = useNavigate();
  const {cartproducts} =  useSelector((state)=>state.products);

  const handleroute = (route)=>{
     navigate(`/${route}`)
  }

  console.log(cartproducts,"cartproduct");
    return(
        <>
         <div className="headercontainer">
           <div className="headerleftchild">
            ShopMart
           </div>
           <div className="headerrightchild">
            <button onClick={()=>handleroute('')} >Home</button>
            <button  onClick={()=>handleroute('featured')}>Product</button>
            <button onClick={()=>handleroute('choose')}>About</button>
            <button >Contact us</button>
            <button >Why me</button>
            <button  onClick={()=>handleroute('cart')}>Cart
              <span className='cartvalue'>{cartproducts.length}</span>
            </button>
            
           
          
           
           </div>
         </div>
        </>
    )
}

export default Header;