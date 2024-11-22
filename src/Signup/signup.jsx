import React, { useState } from "react";
import '../App.css';
import { Button, Typography } from "@mui/material";
import Google from '@mui/icons-material/Google';
import Signin from "../Signin/signin";
import Input from '@mui/material/Input';
import { app } from "../Firebase/firebase";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
const swg = new GoogleAuthProvider();
const auth = getAuth(app);


const Signup = () =>{

    const [email, setemail] =useState('');
    const [password, setpassword] = useState('');

const registration = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email , password);
    alert('success');

    setpassword('');
    setemail('');
};

//sign in with google

const signwithgoogle = () =>{
        signInWithPopup(auth, swg);
}
    return(
        <>
            <div >
            <form onSubmit={registration} style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',}}>
               <label>User Name: </label>
               <Input type="text" value={email} onChange={e => setemail(e.target.value)}/>
            <label>Password: </label>
            <Input type="password " value={password}  onChange={e => setpassword(e.target.value)}/>
            <input type="submit" value="Submit" 
            style={{border:'1px inset grey', borderRadius:'5px',padding:'2px',background:'transparent', marginTop: '5px'}}/>
            </form>
                
            <Button variant="text" color="primery" startIcon ={<Google />} 
            style={{textTransform:'capitalize', position:'relaive', left:'40%', 
            transform:'translate(50px, 50px)'}}
            className="gbtn rounded-pill"
            onClick={signwithgoogle}>
            Sign In With Google
            </Button>
                
            </div>

           
            
        </>
    )
}
export default Signup;