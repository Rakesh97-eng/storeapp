import axios from "axios";


export const GetProductsapi = async(url,method)=>{

    return  await axios({
       
        url:`https://dummyjson.com${url}`,
        method:method,
        
    }).then((res)=>{
         console.log(res);
         return res
    }).catch((err)=>{
        console.log(err);
    })
}