import { createSlice } from "@reduxjs/toolkit";
let initialvalue = {
    isLoading:false,
    products:[],
    categoryproduct:[],
    cartproducts:[],
}
export const ProductSlice = createSlice({
    name:"Products",
    initialState:initialvalue,
    reducers:{
       addcart:(state,{payload})=>{
        console.log("calling cart");
         let sameproducts = state.cartproducts.filter((value)=>value.id === payload.id);
         if(sameproducts.length >0){
            return state
         }
         else{
            state.cartproducts =[...state.cartproducts,payload];
            return state;
         }
            
       },
       removecart:(state,{payload})=>{
         let sameproducts = state.cartproducts.filter((value)=>value.id !== payload.id);
         state.cartproducts = sameproducts;
         console.log("calling cart",state.cartproducts);

         return state;
            
       },

        getproducts:(state,action)=>{
            state.products = action.payload;
            state.isLoading = true
                return state
        },
        getproductscategory:(state,action)=>{
           state.categoryproduct = action.payload;
           state.isLoading= true;
           return state
        },
        
    }
    
});

export const {getproducts,getproductscategory,addcart,removecart} = ProductSlice.actions;
 export default ProductSlice.reducer;

