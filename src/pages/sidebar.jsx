import React, { useState } from 'react'
import Image from '../assets/image.png'
import Image2 from '../assets/Subject icons.svg'
import Image3 from '../assets/Subject icons (1).svg'
import Image4 from '../assets/Subject icons (2).svg'
import Cont from '../assets/Cont.svg'

const sidebar = ({setactivesection}) => {
    
       const [cp, setcp] = useState(true);
       const [cm, setcm] = useState(false);
       const [cc, setcc] = useState(false);
  return (
    <div className=' p-10 w-full md:w-[25%] flex flex-col gap-3 border-r-2 border-gray-200 h-screen'>
        <div className='w-full  flex justify-center items-center gap-4 '>
         
        <img src={Image} alt="" className='h-6 w-6'/>
         <h1 className='font-poppins font-bold text-xl dark:text-white'>JEE Main</h1>
            
        </div>
        <div className='w-full h-10 flex justify-center items-center '>
            <h1 className='font-poppins font-light'>2025 - 2009 | 173 Papers | 15825 Qs</h1>
        </div>
        <div className=' w-full flex flex-row md:flex-col justify-center items-center h-38 gap-4'>
            <button className='w-70 cursor-pointer' onClick={()=>{
                setactivesection('Physics');
                setcp(true);
                setcc(false);
                setcm(false);

            }}>
            <div className={!cp?`pl-3 pr-6 font-poppins font-semibold h-12 w-70   rounded-xl flex justify-between items-center gap-5  hover:bg-clicked hover:text-white group`:`pl-3 pr-6 font-poppins font-semibold h-12 w-70   rounded-xl flex justify-between items-center gap-5 bg-clicked text-white group`}>
            <img src={Image2} alt="" />
            <div className='w-78 dark:text-white flex flex-start '>
            Physics PYQs
            </div>
            <img id="cont" src={Cont} alt="" className='invert  group-hover:invert-0 '/>
            </div>
            </button>

            <button className='w-70 cursor-pointer' onClick={()=>{
                setactivesection('Chemistry');
                setcp(false);
                setcc(true);
                setcm(false);
            }}>
            <div className={!cc?`pl-3 pr-6 font-poppins font-semibold h-12 w-70  bg-custom-blue rounded-xl flex justify-between items-center gap-5  hover:bg-clicked hover:text-white group`:`pl-3 pr-6 font-poppins font-semibold h-12 w-70   rounded-xl flex justify-between items-center gap-5 bg-clicked text-white group`}>
                <img src={Image3} alt=""  />
            <div className='w-78 dark:text-white flex flex-start '>
            Chemistry PYQs
            </div>
            <img src={Cont} alt="" className='invert group-hover:invert-0' /></div>
            </button>
            <button className='w-70 cursor-pointer' onClick={()=>{
                setactivesection('Maths');
                setcp(false);
                setcm(true);
                setcc(false);

            }}>
            <div className={!cm?`pl-3 pr-6 font-poppins font-semibold h-12 w-70  bg-custom-blue rounded-xl flex justify-between items-center gap-5  hover:bg-clicked hover:text-white group`:`pl-3 pr-6 font-poppins font-semibold h-12 w-70   rounded-xl flex justify-between items-center gap-5 bg-clicked text-white group`} >
                <img src={Image4} alt="" />
            <div className='w-78 dark:text-white flex flex-start '>
            Mathematics PYQs
            </div>
        <img src={Cont} alt="" className='invert group-hover:invert-0' /></div>
            </button>
        </div>
    </div>
  )
}

export default sidebar