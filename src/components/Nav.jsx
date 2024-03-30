import React from "react";

const Nav = () => {
    return(
        <>
        
        <nav className={` shadow-lg   w-full fixed h-[30px] top-0 z-20 flex flex-col items-center justify-center bg-blue-900`} >
  <div className="w-full h-[30px]  flex flex-wrap items-center   justify-between max-w-7xl text-[#ffffff] " >
  <div className="flex flex-row items-center  justify-start me-auto">
  <div className="flex flex-row items-center  justify-center ">
              <a href="#" className="text-white pl-2 ">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>

</svg>
              
              </a>
              <p className="pl-1 text-[15px]  text-white font-extrabold font-ubuntu">BANGLADESH
</p> 
              </div>
              <div className="flex flex-row items-center  justify-center ">
              <a href="#" className="text-white pl-2 ">
              <svg className="w-4 h-4 fill-white " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

               <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>

                </svg>
              
              </a>
              <p className="pl-1 text-[15px]  text-white font-extrabold font-ubuntu">24/7
</p> 
              </div>
              <div className="flex flex-row items-center  justify-center ">
              <a href="#" className="text-white pl-2 ">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>

</svg>
              
              </a>
              <p className="pl-1 text-[15px]  text-white font-extrabold font-ubuntu">Buy & Sell
</p> 
              </div>
              </div>
              <div className="flex flex-row items-start  justify-start ms-auto">
        <a href="#" className="text-white   p-1 pl-2">
                  <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  
              </a>
              
              <a href="#" className="text-white  p-1 pl-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" className="w-5 h-5 text-white" viewBox="0 0 72 72">
<path d="M 35.75 14 C 15.579 14 14 15.579 14 35.75 L 14 36.25 C 14 56.421 15.579 58 35.75 58 L 36.25 58 C 56.421 58 58 56.421 58 36.25 L 58 35.75 C 58 15.579 56.421 14 36.25 14 L 35.75 14 z M 30 22 L 42 22 C 49.419 22 50 22.581 50 30 L 50 42 C 50 49.419 49.419 50 42 50 L 30 50 C 22.581 50 22 49.419 22 42 L 22 30 C 22 22.581 22.581 22 30 22 z M 45.496094 25 C 44.668094 25.002 43.998 25.674906 44 26.503906 C 44.002 27.331906 44.674906 28.002 45.503906 28 C 46.331906 27.998 47.002 27.325094 47 26.496094 C 46.998 25.668094 46.325094 24.998 45.496094 25 z M 35.976562 26 C 30.454563 26.013 25.987 30.501437 26 36.023438 C 26.013 41.545437 30.501437 46.013 36.023438 46 C 41.545437 45.987 46.013 41.498562 46 35.976562 C 45.987 30.454563 41.498562 25.987 35.976562 26 z M 35.990234 32 C 38.199234 31.995 39.994 33.781234 40 35.990234 C 40.005 38.199234 38.218766 39.995 36.009766 40 C 33.800766 40.005 32.006 38.218766 32 36.009766 C 31.995 33.800766 33.781234 32.006 35.990234 32 z"></path>
</svg>

                  
              </a>
              <a href="#" className="text-white p-1 pl-2 mr-2 hover:text-gray-900 dark:hover:text-black">
              <svg className="w-4 h-4 text-white " viewBox="0 0 576 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor">

              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" clip-rule="evenodd"/>

              </svg>
                 
              </a>
             
  </div>
  </div>
  </nav>


        </>
    )
}

export default Nav
