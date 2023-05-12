import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import { useDispatch, useSelector } from 'react-redux';


const Header = ()=>{


  const {cartproducts} =  useSelector((state)=>state.products);

  console.log(cartproducts,"cartproduct");
    return(
        <>
         <div className="headercontainer">
           <div className="headerleftchild">
            ShopMart
           </div>
           <div className="headerrightchild">
            <button >Home</button>
            <button>Product</button>
            <button>About</button>
            <button>Contact us</button>
            <button>Why me</button>
            
            <button >Cart
              <span className='cartvalue'>{cartproducts.length}</span>
            </button>
          
           
           </div>
         </div>
        </>
    )
}

export default Header;