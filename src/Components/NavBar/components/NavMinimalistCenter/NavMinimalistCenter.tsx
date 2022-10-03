import * as React from "react";
import { useState, useEffect } from "react";

import "./NavMinimalistCenter.scss";
import { NavLink } from "react-router-dom";

type Props = {
   children: React.ReactNode;
   id: string;
   "menu-button": React.ReactNode;
   "background-color": string;
   logo: {
      image: any;
      path: string;
   };
};

const MinimalistCenter = (props: Props) => {
   const [isActive, setIsActive] = useState(false);

   return (
      <nav
         className={`jkw-nav-minimalist-center-primary --navbar`}
         data-is-active={isActive}
      >
         <div className="jkw-nav-minimalist-center-mobile-nav">
            <button
               className="jkw-nav-minimalist-center-button"
               onClick={() => {
                  setIsActive(!isActive);
               }}
            >
               {props["menu-button"]}
            </button>
         </div>
         <div
            className="center"
            onClick={() => {
               setIsActive(!isActive);
            }}
         >
            {/* <NavLink
               to={props.logo.path}
               className={(params) => {
                  return params.isActive === true
                     ? "logo jkw-link-side-sliding-active"
                     : "logo jkw-link-side-sliding";
               }}
               
            >
               <img src={props.logo.image} alt="logo" />
               HOME
            </NavLink> */}
            {props.children}
         </div>
      </nav>
   );
};

export default MinimalistCenter;
