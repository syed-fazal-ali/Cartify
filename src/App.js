
import './App.css';
import Home from './Home/Home';
import Cart from './Cart/cart';
import { Route,Routes } from 'react-router-dom';
import Signup from './Signup/signup';
import Signin from './Signin/signin';
import Items from './Items/items';
import Navbar from './Home/Navbar';
import { products } from './products';

function App(props) {
  return (
    <>
    <div>
    <Navbar />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path='/Products' element={ <div className='itemscont' >
    {
      products.map((e)=>(
        <Items key = {e.id} 
      id = {e.id}
      pname = {e.name}
      pdesc = {e.description.substring(0 ,25) + '...'}
      pprice = {e.price}
      pimage = {e.image}
    /> 
      ))
    }
    </div>} />
      <Route path ="/Cart" element= {<Cart />} />
      <Route path ='/signIn' element = {<Signin/>} />
      <Route path='/SignUp' element= {<Signup />} />
    </Routes>
   
    </div>
   
    
    

    </>
    
  );
}

export default App;
