import React, { useState } from 'react'
import Icon1 from '../assets/Icon-L-container.svg' 
import Image2 from '../assets/Subject icons.svg'
import Image3 from '../assets/Subject icons (1).svg'
import Image4 from '../assets/Subject icons (2).svg'
import Toggle from '../toggle/toggle'
import Arrow from '../assets/Vector.svg'

const mobile = ({setactivesection}) => {
  
  const [appear1, setappear1] = useState(false);
  const [appear2, setappear2] = useState(false);
  const [appear3, setappear3] = useState(false);

  return (
    <div className='w-full h-42 border-b-2 border-gray-300 relative '>
        <div className='w-full h-6'>
          
        </div>
        <div className='w-full h-16 flex'>
          <div className='h-16 w-16 flex justify-center items-center'>
          <img src={Arrow} alt="" className='h-[18px] w-[15px]'/>
          </div>
        <div className='w-70 h-16 text-xl font-poppins font-bold flex justify-center items-center mb-3 dark:text-white'>
         JEE Mains
        </div>
        </div>
        <div className='w-full h-20 flex justify-between items-center '>
          <button className='h-20 w-full  flex justify-center items-center cursor-pointer' onClick={()=>{setactivesection('Physics');
          setappear1(true);
          setappear2(false);
          setappear3(false);
          }}>
            <div className='h-20 w-full  flex justify-center items-center'>
                <div className='flex flex-col  justify-between items-center h-20'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                <img src={Image2} alt=""  className='h-8 w-8'/>
                <h1 className='text-lg font-poppins text-gray-600 dark:text-white'>Phy</h1>
                </div>

               {appear1?<div className=' h-1  w-12 bg-blue-500  '></div>:null}
                </div>

            </div>
          </button>
            <button className='h-14 w-full  flex justify-center items-center cursor-pointer' onClick={()=>{setactivesection('Chemistry');
          setappear1(false);
          setappear2(true);
          setappear3(false);
            }}>
            <div className='h-20 w-full  flex justify-center items-center'>
                <div className='flex flex-col  justify-between items-center h-20'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                <img src={Image3} alt=""  className='h-8 w-8'/>
                  <h1 className='text-lg font-poppins text-gray-600 dark:text-white'>Chem</h1>
                  </div>
                  {appear2?<div className=' h-1 w-12 bg-blue-500 '></div>:null}
                </div>
            </div>
            </button>
            <button className='h-14 w-full  flex justify-center items-center cursor-pointer' onClick={()=>{setactivesection('Maths');
          setappear1(false);
          setappear2(false);
          setappear3(true);
            }}>
            <div className='h-20 w-full  flex justify-center items-center'>
                <div className='flex flex-col  justify-between items-center h-20'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                <img src={Image4} alt=""  className='h-8 w-8'/>
                 <h1 className='text-lg font-poppins text-gray-600 dark:text-white'>Maths</h1>
                  </div>
                 {appear3?<div className=' h-1 w-12 bg-blue-500 '></div>:null}
                </div>
            </div>
            </button>
           
    
        </div>

    </div>
  )
}

export default mobile