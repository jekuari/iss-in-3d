import * as React from "react";
import { useState, useEffect } from "react";

import "./HamburgerToClose.scss";

type Props = {
   color: string;
   id: string;
   isActive: boolean;
   switch: Function;
};

const HamburgerToClose = (props: Props) => {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      setIsActive(!isActive);
   }, [props.switch]);

   return (
      <span className={`jkw-hamburguer-to-close-background`} data-is-active={isActive} onClick={() => {setIsActive(!isActive)}}>
         <div className="jkw-hamburguer-to-close-line jkw-hamburguer-to-close-line-first"></div>
         <div className="jkw-hamburguer-to-close-line jkw-hamburguer-to-close-line-second"></div>
         <div className="jkw-hamburguer-to-close-line jkw-hamburguer-to-close-line-third"></div>
      </span>
   );
};

export default HamburgerToClose;
