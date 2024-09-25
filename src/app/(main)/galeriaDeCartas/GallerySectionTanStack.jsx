"use client"
import React from 'react'
import {

  useQuery,
} from '@tanstack/react-query'
import Image from 'next/image'




const GallerySectionTanStack = () => {
    const { isPending, error, data,  } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
          const response = await fetch(
            `https://cafe-de-altura-ten.vercel.app/api/products`,
          )
          return await response.json()
        },
      })
    
      if (isPending){
        
        const SkeletonCard = () => (

            <div className="animate-pulse flex flex-col justify-center items-center  w-[240px] h-[390px] bg-gray-200 rounded-lg p-4">
              <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
          
          );
        return (
            <div className='flex flex-wrap justify-center min-h-[391.39px] gap-6'>

           {     Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
              )
            }
    
      if (error) return 'An error has occurred: ' + error.message
    console.log(data);
    
      return (
        <div className="flex flex-col items-center justify-center max-w-[1200px] min-h-[603.39px] gap-10 py-[40px]">
        <h2 className="text-[#2a5b45] text-2xl leading-7 font-medium ">
          Ultimos Origenes
        </h2>
        <div className="flex flex-wrap justify-center min-h-[391.39px] gap-6">
          {data.slice(0, 8).map((coffe) => {
            return (
              <>
                {coffe.available ? (
                  <div
                    key={coffe._id}
                    className=" group  flex flex-col items-center justify-center text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]  hover:bg-[#f7f5f3]"
                  >
                    <Image
                      src={coffe.img_url}
                      width={219.39}
                      height={219.39}
                      alt="coffe img"
                    />
                    <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
                      <p>{coffe.brand}</p>
                      <p className="font-normal">{coffe.price.toFixed(2)} €</p>
                    </div>
  
                    <button
                      disabled
                      className="flex justify-center items-center min-w-[60px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#2a5b45b2]  group-hover:bg-[#2a5b45] group-hover:cursor-pointer"
                    >
                      Añadir
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center  text-center gap-6 w-[282px] min-h-[391.39px] border rounded-lg border-solid border-[#e3ded7]  ">
                     <Image
                      src={coffe.img_url}
                      width={219.39}
                      height={219.39}
                      alt="coffe img"
                      className="opacity-40 -z-10"
                    />
                    <div className="flex flex-col gap-3 text-sm font-semibold leading-4">
                      <p>{coffe.brand}</p>
                      <p className="font-normal">{coffe.price.toFixed(2)} €</p>
                    </div>
  
                    <button
                      disabled
                      className="flex justify-center items-center min-w-[72px] min-h-[32px] text-[white] rounded text-sm font-semibold leading-4 bg-[#E3DED7] "
                    >
                      Agotado
                    </button>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      )
}

export default GallerySectionTanStack