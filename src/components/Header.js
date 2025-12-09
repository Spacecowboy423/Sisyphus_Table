import React from "react";

const Header = ({backgroundPic, fontFamily})=>{
    console.log(backgroundPic);
     return (
       <header
         className="header text-center py-8 bg-cover bg-center text-white"
         style={{ backgroundImage: `url(./images/${backgroundPic})` }}
       >
         <h1
           className="text-6xl font-bolder"
           style={{ fontFamily: `${fontFamily}` }}
         >
           Sisyphus Builds
         </h1>
         <p className="text-lg">
           Combining artist curation with modern furniture
         </p>
       </header>
     );
}

export default Header;