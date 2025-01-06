import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducers from "./ProductReducer";

const API = "https://dummyjson.com/products?limit=0";

const cartContext = createContext();

const initialSate = {
    isLoding: false,
    isError: false,
    product: [],
    filterProducts:[],
    isSingleLoding:false,
    singleProduct:{}
}



const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initialSate);

    const getProducts = async (url) => {
        dispatch({ type: "API_LOADING" });
        try {
            const res = await axios.get(url);
            // console.log(res)
            const product = await res.data;
            // console.log(product)
            const products = await product.products;
            // console.log(products)
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
            console.log(error);
        }
    }

    const getSingleProduct = async(API)=>{
        dispatch({ type: "SET_SINGLE_LODING" });
        try {
            const res = await axios.get(API);
            const product = await res.data;
            const singleProduct = await product.products;
            dispatch({ type: "SINGLE_API_DATA", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }
    
    useEffect(() => {
        getProducts(API);
    }, [])
    

    // const addtoCart = (id, amount, product, quentaty) => {
    //     dispatch({ type: "ADD_TO_CART", payload: { id, amount, product, quentaty } })
    // };


    return <cartContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </cartContext.Provider>
}

const UseCartContext = () => {
    return useContext(cartContext);
}

export { CartProvider, UseCartContext };

