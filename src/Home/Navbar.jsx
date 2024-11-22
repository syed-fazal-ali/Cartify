import React, {useContext, useEffect, useState}from "react";
import { app } from "../Firebase/firebase";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import '../App.css';
import { NavLink } from "react-router-dom";
import { contextprovider } from "../Context/context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { borderRadius, display, fontFamily, fontWeight, height, margin, textAlign, width } from "@mui/system";
import { purple } from "@mui/material/colors";

const Navbar = () => {
    const [users, setusers] = useState('');


    
    const signauth = getAuth(app);
    const {items} = useContext(contextprovider);
    useEffect(()=>{
      onAuthStateChanged(signauth , (user) => {
            if(user && user.email){
                //You are logged in
                console.log('Hello', user.email.charAt(0).toUpperCase());
        setusers(user.email.charAt(0).toUpperCase());
                
            }else{
                //You are logged out
              //  console.log('you are loggedout');
                setusers(null);
            
            }
        })
    },[])


    // Inline style for p tag
    const styles = {
        box: {
            width:'30px',
            height:'25px',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#e785b6',
            borderRadius:'50%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        
        }
    }
    return(
        <>
            <div className="Navbar">
                <NavLink to="/" className=".active">Home</NavLink>
                <NavLink to='/Products' className=".active">Products</NavLink>
                
                <NavLink to='/SignIn' className=".active">SignIn</NavLink>
                <NavLink to="/Cart" className=".active cartclass">{items.length === 0 ?<ProductionQuantityLimitsIcon /> :  <ShoppingCartIcon />}</NavLink>
                <span className="signbox">
                {users ? <p style={styles.box}>{users}</p> : <p>No</p>}
                </span>
            </div>

            
        </>
    )
}
export default Navbar;