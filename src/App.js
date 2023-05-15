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
import Feature_products from "./pages/feature-products/feature_product";
import Chooseus from "./pages/chooseus/chooseus";

function App() {
  return (
    <>
      <Provider store={ProductStore}>
        <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/categories" element={<Categoryproduct/>}></Route>
          <Route path="/cart" element={<Addtocart/>}/>
          <Route path="/featured" element={<Feature_products/>}/>
          <Route path ="/buynow" element={<Buynow/>}/>
          <Route path="/choose" element={<Chooseus/>}/>
        </Routes>
       
        </BrowserRouter>
        
        <Product />
      </Provider>
    </>
  );
}

export default App;
