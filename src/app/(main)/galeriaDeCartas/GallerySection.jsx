"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const GallerySection = () => {
    const  [coffeData, setCoffeData]  = useState([]);
    useEffect(() => {
        const getCoffeFetch = async () => {
          try {
            const apiUrl = `https://cafe-de-altura-ten.vercel.app/api/products`;
    
            const response = await fetch(apiUrl);
            const data = await response.json();
            setCoffeData(data);
            
          } catch (error) {
            console.log(error);
            ;
          }
        };
    
        getCoffeFetch();
      }, []);
      console.log(coffeData);
      
  return (
    <div className= "flex flex-col items-center justify-center max-w-[1200px] min-h-[603.39px] gap-10 pt-[40px] pb-[40px]">

        <h2 className="text-[#2a5b45] text-2xl leading-7 font-medium ">
               Ultimos Origenes
              </h2>
        <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
      {coffeData.slice(0, 8).map((coffe, i) => {
            return (
                <div className=" group  flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]  hover:bg-[#f7f5f3]">
                <Image src={coffe.img_url} width={219.39} height={219.39} alt="coffe img" />
                <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
                  <p>{coffe.brand}</p>
                  <p className="font-normal">{coffe.price.toFixed(2)} €</p>
                </div>
      
                <button  disabled  className="flex items-center text-center py-3 px-6 min-h-[40px] justify-center max-w-fit text-white rounded font-semibold text-sm leading-4 bg-[#2a5b45]">Añadir</button>
              </div>
            );
          })}</div>
    </div>
  )
}

export default GallerySection