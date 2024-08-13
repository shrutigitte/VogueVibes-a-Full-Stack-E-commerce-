import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Components/Assets/Frontend_Assets/cart_icon.png'
import { ShopContext } from '../Context/ShopContext';


const NavBar = () => {
    const[menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    return (
        <div className='flex justify-around p-5'>
            <div >  
             <p id='logo' className=' -ml-2 text-lg lg:text-5xl mr-2 font-medium'><Link to='/'>VogueVibes</Link> </p>
            </div>
            
             
            <ul  className='lg:flex hidden gap-3 text-sm lg:text-lg'> 
                {/* css for hr tag added in App.css  */}
                 <li onClick={()=>setMenu("shop")}> <Link to='/' >Shop</Link> {menu==="shop"?<hr />:<></>}</li> 
                <li onClick={()=>setMenu("men")}> <Link to='/men'> Men</Link> {menu==="men"? <hr />:<></>}</li>
                <li onClick={()=>setMenu("women")}> <Link to='/women'>Women</Link>  {menu==="women" ? <hr />:<></>}</li>
                <li onClick={()=>setMenu("kids")}> <Link to='/kids'>Kids</Link> {menu==="kids" ? <hr />:<></>}</li>
            </ul>
            <div className='flex'>
                <Link to='/loginsignup'><button className='lg:h-10 lg:w-20 h-7 w-12 -mt-1 ml-2 border border-teal-500 rounded-2xl p-1 bg-teal-600 hover:bg-teal-500 active:bg-teal-400 text-white font-medium' >Login</button></Link> 
                <Link to='/cart'> <img className="lg:ml-3 lg:mt-1 " alt='cart' height={30} width={45} src={cart_icon}/></Link> 
                <div className="w-5 h-6 flex mt-[-37] justify-center -ml-3 bg-red-500 pb-1 text-white rounded-xl">{getTotalCartItems()}</div>
            </div>


            


        </div>
    );
};

export default NavBar;
