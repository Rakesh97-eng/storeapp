import { useDispatch } from "react-redux";
import { getproducts } from "./productslice";
import { GetProductsapi } from "../apiservice.js/productservice";

export const Productaction = ()=>{
    // let dispatch = useDispatch();
   console.log("calling");
    return (dispatch)=>{
        GetProductsapi('products',"get").then(
            (res)=>{
                dispatch(getproducts(res.data))
                console.log(res)}
        )    }}

    

export function Getbycategory(urlvalue){
    // let dispatch = useDispatch();
    console.log("urlvalue",urlvalue);
    return   GetProductsapi(`/products/category/${urlvalue}`,"get")
    }

export const Productcategoryaction = ()=>{
        // let dispatch = useDispatch();
        return (dispatch)=>{
            GetProductsapi('/products/categories',"get").then(
                (res)=>{
                    dispatch(getproducts(res?.data))}
            )
            
        }}
