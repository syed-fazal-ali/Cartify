import React, { useEffect, useState} from "react";
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import '../App.css';
const Home = () =>{
const [text, settext] = useState('');
const [intro] = useTypewriter({
    words : ['Project Introduction'],
    loop : Infinity,
    typeSpeed: 100,
})
useEffect(() =>{
    fetch('introduction.txt').then((res) =>{
            if(!res.ok){
               throw new Error('File Can\'t be loaded...');
            }
            return res.text();
    }).then((text) => settext(text)).
    catch((error) => console.log('Error in loading', error));
}, [])
    return(
        <>
        <div style={{height:'60px',border:'1px solid green',outline:'none',textAlign:'center'}}>
        <h1>{intro}
        <Cursor /></h1>
        </div>
            <div style={{textAlign:'center'}}>
            <pre className="intro">{text}</pre>
            </div>
            
        </>
    )
}
export default Home;