import { app } from "../Firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import Input from '@mui/material/Input';
import { NavLink } from "react-router-dom";
const auth = getAuth(app);
const SignIn = () =>{
    const [email, setemail] =useState('');
    const [password, setpassword] = useState('');

const registration = () =>{
    signInWithEmailAndPassword(auth, email , password).then(e => {alert('Signin successfully')}).catch(err => alert('Error in credentials'));

}
    return(
        <>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',}}>
            <label>User Name: </label>
            <Input type="text" value={email} onChange={e => setemail(e.target.value)}/>
        
            <label>Password: </label>
            <Input type="password" value={password}  onChange={e => setpassword(e.target.value)}/>
            <button onClick={registration} style={{border:'1px inset grey', borderRadius:'5px',padding:'2px',background:'transparent',marginTop:'5px'}}>Sign In</button>
            <NavLink to="/SignUp"><p style={{textAlign:'center',fontSize:'10px'}}>Register Now</p></NavLink>
        </div>
          <div>
            
          </div>
        </>
    )
}
export default SignIn;