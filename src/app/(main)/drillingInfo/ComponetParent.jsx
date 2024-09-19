import React from 'react'
import ComponetSon from './ComponentSon';

const ComponetParent = () => {
  
    const x=152
    

 
  
    return (
      <div className="border-[2px] border-black p-2">
        <h2 className="text-xl">ComponentA</h2>
        <p>x = {x}</p>
        <ComponetSon x={x}  />
      </div>
    );
  }

export default ComponetParent