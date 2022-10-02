import React, {useEffect, useRef} from 'react'

export default function Earth() {

   const container = useRef(null);

   useEffect(() => {
      container.current.innerHTML = "";
      container.current.append("Earth");
   }, [container]);

  return (
   container.domE
  )
}
