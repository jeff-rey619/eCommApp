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

    function getTotalCartItems() {
        let totalItems = 0; 
        for (let item in cartItem) {
            if (cartItem[item] > 0) {
                totalItems+=cartItem[item]
            }
        }
        return totalItems
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        for (const item in cartItem) {
          
            if (cartItem[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item))
             
                totalAmount+= iteminfo.new_price*cartItem[item]
            }
          
        }
          return totalAmount
    }
   
  const contextValue = {
        all_product,
      cartItem
      , addTocart,
      removefromcart,
      getTotalCartItems,
        getTotalCartAmount
    }
    return (<ShopContext.Provider value={contextValue} >
        {props.children}    
        </ShopContext.Provider>
    
        )
}

export default ShopContextProvider; 