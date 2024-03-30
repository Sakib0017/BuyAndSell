import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/icon.gif";
   
const Home = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return
   
  () =>
   
  window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <>
        

        <nav className={` w-full bg-gray-100/95  flex items-center shadow fixed top-[30px] z-20 bg-white`} >
  
  
  <div className="w-full h-[60px] flex flex-row justify-center max-w-7xl text-blue-900/95  mx-auto" >
    
  <div className="w-full h-[60px]  flex flex-row max-w-7xl justify-center  items-center  mx-auto">
  <div className="flex flex-row items-center  justify-center ">
  <img className="w-10 h-10 ml-2" src={img} />
    
    
<h1 className="text-start pl-[1px] text-[25px] font-ubuntu font-bold text-black">B | S</h1></div>
              
       <div className="flex flex-row mx-auto">
        <ul className="list-none  hidden sm:flex mx-auto mr-2 flex-row gap-5">
        <li className="inline-flex flex-row mx-auto">
        <div className="flex flex-row mx-auto">
         
         
        <a><Link to="/login">      <p className="text-blue-900/95 me-auto  items-start flex flex-row text-[14px]  font-bold font-ubuntu"> 
           
            
           
           <a href=""> <span className=" me-auto text-[14px] font-bold font-ubuntu ">Mobile</span></a></p>
                 </Link></a>
           </div>
         
           
           </li>
                <li className="inline-flex flex-row justify-start items-start">
           
         <div className="flex flex-col ">
         
         
         <a> <Link to="/health">      <p className="text-blue-900/95 me-auto  items-start flex flex-row text-[14px]  font-bold font-ubuntu"> 
           

         <a href=""> <span className="me-auto text-[14px] font-bold font-ubuntu">Electronics</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
            <li className="inline-flex flex-row justify-start items-start">
           
         <div className="flex flex-row  ">
         
        
                       
         <a>  <Link to="/modal">  <p className="text-blue-900/95 me-auto items-start flex flex-row text-[14px] font-bold font-ubuntu"> 
          
             
                 <a href=""> <span className="text-[14px] font-bold font-ubuntu ">Vehicles</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
           <li className="inline-flex flex-row justify-start items-start">
            
         <div className="flex flex-row  ">
        
         <a> <Link to="/notice"><p className="text-blue-900/95  items-center flex flex-row text-[14px]  font-bold font-ubuntu"> 
         <a href=""><span className="text-[14px] font-bold font-ubuntu ">Property</span></a></p>
           </Link>      </a>   
                       
   
           </div>
           
           </li>
           
              
             
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Education</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Essentials</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/contact"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Home & Living</span></a></p>
              </Link>   </a>      
                          
      
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Animals</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Sports</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
        </ul>
        </div>
        <div className="flex flex-row ms-auto">
        <ul className="list-none  hidden sm:flex ms-auto mr-2 flex-row gap-5">
        <li className="flex flex-row justify-end items-end">
            
            <button className="bg-blue-200 pl-5 pr-5 rounded-xl font-bold p-2">login</button>
              
              </li>
              
            
        </ul>
        <ul className="list-none  hidden sm:flex ms-auto mr-2 flex-row gap-5">
        <li className="flex flex-row justify-end items-end">
            
            <button className="bg-yellow-200 pl-5 pr-5 rounded-xl font-bold p-2">Sell+</button>
              
              </li>
              
            
        </ul>
        </div>

     <div className="sm:hidden  flex flex-1 justify-end items-start">
        <svg  className="w-[28px] h-[28px] mr-5 fill-blue-900" onClick={() => setToggle(!toggle)}  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>

</svg>
            <div className={`${!toggle ? 'hidden' :'flex'} p-10 bg-blue-100  absolute top-20 right-10 rounded-md`}>
                <ul className=" flex me-auto flex-col  gap-2">
                <li className="inline-flex flex-row justify-start items-start">
        <div className="flex flex-row  ">
         
         
        <a><Link to="/login">      <p className="text-blue-900/95 me-auto  items-start flex flex-row text-[14px]  font-bold font-ubuntu"> 
           
            
           
           <a href=""> <span className=" me-auto text-[14px] font-bold font-ubuntu ">Mobile</span></a></p>
                 </Link></a>
           </div>
         
           
           </li>
                <li className="inline-flex flex-row justify-start items-start">
           
         <div className="flex flex-col ">
         
         
         <a> <Link to="/health">      <p className="text-blue-900/95 me-auto  items-start flex flex-row text-[14px]  font-bold font-ubuntu"> 
           

         <a href=""> <span className="me-auto text-[14px] font-bold font-ubuntu">Electronics</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
            <li className="inline-flex flex-row justify-start items-start">
           
         <div className="flex flex-row  ">
         
        
                       
         <a>  <Link to="/modal">  <p className="text-blue-900/95 me-auto items-start flex flex-row text-[14px] font-bold font-ubuntu"> 
          
             
                 <a href=""> <span className="text-[14px] font-bold font-ubuntu ">Vehicles</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
           <li className="inline-flex flex-row justify-start items-start">
            
         <div className="flex flex-row  ">
        
         <a> <Link to="/notice"><p className="text-blue-900/95  items-center flex flex-row text-[14px]  font-bold font-ubuntu"> 
         <a href=""><span className="text-[14px] font-bold font-ubuntu ">Property</span></a></p>
           </Link>      </a>   
                       
   
           </div>
           
           </li>
           <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/contact"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Home & Living</span></a></p>
              </Link>   </a>      
                          
      
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Pets & Animals</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Hobbies & Sports</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Men's Fahsion & Grooming</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Women's Fashion & Beauty</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Education</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Essentials</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-blue-900/95  items-center flex flex-row text-[14px] ms-0 me-1 font-bold font-ubuntu"> 
            
              <a href=""><span className="text-[14px] font-bold font-ubuntu ">Bussiness & Industry</span></a></p>
              </Link>    </a>     
              </div>
              
              </li>
              <li className="flex flex-col w-full justify-start items-start">
            
            <button className="bg-blue-200 pl-20 pr-20 rounded-xl font-bold p-2">login</button>
              
              </li>
              
            
        
        <li className="flex flex-col justify-start items-start">
            
            <button className="bg-yellow-200 pl-20 pr-20 rounded-xl font-bold p-2">Sell+</button>
              
              </li>
              </ul>
             
            </div>
        </div>
      </div>
</div>
</nav>
 
        </>
    )
    
}

export default Home;