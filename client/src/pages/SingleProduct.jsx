import { useEffect } from "react"
import { UseCartContext } from "../store/ContextStore";
import { useParams } from "react-router-dom";



export const SingleProduct = () => {
    const { getSingleProduct, isSingleLoding, singleProduct } = UseCartContext();
    const id = useParams();
    const url = id.id;
    // console.log(url);

    const API = "https://dummyjson.com/products";
    const singleapi = `${API}/${url}`
    // console.log(singleapi);
    useEffect(() => {
        getSingleProduct(singleapi);
    }, []);
    
    console.log(singleProduct);

    console.log(`${API}/${url}`);
    return <h1>hi thsi is single product</h1>
}