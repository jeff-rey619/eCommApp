import React, { createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";


export const ShopContext = createContext(null)


 const getDefaultCart = () => {
        let cart = {};

        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart
    }

const ShopContextProvider = (props) => {
    const [cartItem, setCartItems] = useState(getDefaultCart())  
    
  

    const addTocart = (itemid) => {
        setCartItems((previous) => ({
            ...previous,[itemid]:previous[itemid]+1
        }))
    }

     const removefromcart = (itemid) => {
        setCartItems((previous) => ({
            ...previous,[itemid]:previous[itemid]-1
        }))
    }
   
  const contextValue = {
        all_product,
      cartItem
      , addTocart,
        removefromcart
    }
    return (<ShopContext.Provider value={contextValue} >
        {props.children}    
        </ShopContext.Provider>
    
        )
}

export default ShopContextProvider; 