// import React, { createContext, useState } from "react";
// import all_product from "../Components/Assets/Frontend_Assets/all_product";

// export const ShopContext=createContext(null);

// const getDefaultCart=()=>{
//     let cart={};
//     for (let index = 0; index < all_product.length+1; index++) {
//         cart[index] = 0;
        
//     }
//     return cart;
// }

// const ShopContextProvider =(props) =>{
//     const [cartItems,setCartItems]=useState(getDefaultCart());
//     setLastAddedItemId(itemId); // to return to the product they just added in the cart
//     setShowPopup(true);
    
    
//     const addToCart = (itemId, qty = 1) => {
//   setCartItems((prev) => {
//     const newQty = Math.min(prev[itemId] + qty, 5); // don't exceed 5
//     const updated = { ...prev, [itemId]: newQty };
//     console.log('🛒 Updated Cart:', updated);
//     return updated;
//   });
// };

    
//     const RemoveFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
//     const getTotalCartAmount=()=>{
//         let totalAmount=0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 let itemInfo=all_product.find((product)=>product.id===Number(item))
//                 totalAmount+= itemInfo.new_price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     }

//     const getTotalCartItems=()=>{
//         let totalItem=0;
//         for(const item in cartItems){
//             if(cartItems[item]>0){
//                 totalItem+=cartItems[item];
//             }
//         }
//         return totalItem;
//     }
//     const contextValue={getTotalCartItems, getTotalCartAmount,all_product,cartItems,addToCart,RemoveFromCart};
    


//     return (
//         <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;

import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [showPopup, setShowPopup] = useState(false);
  const [lastAddedItemId, setLastAddedItemId] = useState(null);
  const [cartAnimate, setCartAnimate] = useState(false); // for icon animation

  const addToCart = (itemId, qty = 1) => {
    setCartItems((prev) => {
      const newQty = Math.min(prev[itemId] + qty, 5); // limit to 5
      const updated = { ...prev, [itemId]: newQty };
      return updated;
    });

    // Trigger popup and animation
    setLastAddedItemId(itemId);
    setShowPopup(true);
    setCartAnimate(true);

    // Remove animation after short delay
    setTimeout(() => {
      setCartAnimate(false);
    }, 500);

    // Auto-close popup after 6 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 6000);
  };

  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      totalItem += cartItems[item];
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    RemoveFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    showPopup,
    setShowPopup,
    lastAddedItemId,
    cartAnimate,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
