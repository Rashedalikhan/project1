const ProductReducer = (state, action) => {

    switch (action.type) {
        case "API_LOADING":
            return {
                ...state, isLoding: true
            };

        case "MY_API_DATA":
            return {
                ...state,
                isLoding: false,
                product: [...action.payload],
                filterProducts: [...action.payload]
            };


        case "API_ERROR":
            return {
                ...state,
                isLoding: false,
                isError: true
            }

        case "SET_SINGLE_LODING":
            return {
                ...state, isLoding: true
            };

        case "SINGLE_API_DATA":
            return {
                ...state,
                isLoding: false,
                singleProduct: action.payload,
            }

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isLoding: false,
                isError: true
            }

        default:
            return {
                ...state
            }

    }

}

export default ProductReducer;