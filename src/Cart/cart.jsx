import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { contextprovider } from "../Context/context";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { products } from "../products";
import '../App.css';
const Cart = (props) =>{

    const {items , deletetocart} = useContext(contextprovider);
    const nav = useNavigate();

    const total = items.reduce((a, b) => a + b.pprice, 0);

const navigation = () =>{
    nav('/Products');
}
  
    return(
        <>
            <div>
                <h1 style={{display:'flex', alignItems:'center', justifyContent:'center'}}>This is Cart</h1>
                <button onClick={navigation} className="navbtn"><NavigateBeforeIcon /></button>
                <ul>
                    {items.map((e,index) =>(
                        <div style={{display:'flex', alignItems:'center',justifyContent:'center', marginBottom:'10px'}}>
                        <img src={e.pimage} alt="Product image" width='70px' height="70px" />
                        <li key = {e.id} style={{listStyle:'none'}}>{e.pname} - {e.pprice} - 
                        <button onClick={() => deletetocart(e.id)} className="Cartbtn"><DeleteRoundedIcon /></button></li>
                        </div>
                    )) }
                    <br />
                </ul>
                <span style={{textAlign:'center',fontStyle:'italic'}}>{items.length === 0 ? <p>-</p> : <p>Total payment : {total}</p>}</span>
                
            </div>
        </>
    )
}

export default Cart;