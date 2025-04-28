import React from "react";

type ProductContextType = {
    username : string,
    setUsername: (value: string) => void;
}

const ProductsContext = React.createContext<ProductContextType>({
    username : "",
    setUsername: () => {}   
});

export default ProductsContext;