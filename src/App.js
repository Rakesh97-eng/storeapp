import { Provider } from "react-redux";
import logo from "./logo.svg";
import { Home } from "./pages/Home";
import { ProductStore } from "./redux/productstore";
import Header from "./components/header/header";
import Product from "./components/product/product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categoryproduct from "./components/product_category/product_category";
import Addtocart from "./components/addtocart/addtocart";
import Buynow from "./components/buynow/buynow";

function App() {
  return (
    <>
      <Provider store={ProductStore}>
      <Header />
        <BrowserRouter>
        
       
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/categories" element={<Categoryproduct/>}></Route>
          <Route path="/cart" element={<Addtocart/>}/>
          <Route path ="/buynow" element={<Buynow/>}/>
        </Routes>
       
      
        </BrowserRouter>
        
        <Product />
      </Provider>
    </>
  );
}

export default App;
