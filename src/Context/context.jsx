
import { createContext, useState } from "react";

export const contextprovider = createContext();

 export const CartContext = (props) => {
const [items, setitems] = useState([]);

const Addtocart =(val)=>{
    setitems([...items , val]);
};



const deletetocart = (pid) =>{
    setitems(items.filter(e => e.id !== pid));
}
    return(
        <contextprovider.Provider value = {{items, setitems, Addtocart, deletetocart}}>
        {props.children}
    </contextprovider.Provider>
    ) 
}


