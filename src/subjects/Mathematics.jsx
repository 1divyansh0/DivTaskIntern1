import React, { useEffect, useState } from 'react'
import { mathdata } from '../Data/math';
import Image from '../assets/image.png'
import Image2 from '../assets/Subject icons.svg'
import Image3 from '../assets/Subject icons (1).svg'
import Image4 from '../assets/Subject icons (2).svg'
import Cont from '../assets/Cont.svg'
import Chap from '../chapters/chap'
import btn1 from '../assets/Icon-L-container.svg'
import btn2 from '../assets/Label.svg'
import useIsMobile from '../hooks/useIsMobile'
import Mobile from '../pages/mobile'
import Toggle from '../toggle/toggle'

const Mathematics = () => {
    const data = mathdata;
    const Mv = useIsMobile();
   const [fdata, setfdata] = useState(data);
   const [notstarted, setnotstarted] = useState(false)
   const [showweakchap, setshowweakchap] = useState(false);
   const [sclass, setsclass] = useState("All");
   const [unit, setunit] = useState("ALL");

   const filtersection=()=>{
     let newlist = data;
       if(unit=="Algebra"){
        newlist = newlist.filter((ele)=>(ele.unit=="Algebra"));
       }
       if(unit=="Vector"){
        newlist = newlist.filter((ele)=>(ele.unit=="Vector"));
       }
       if(unit=="Miscellaneous"){
        newlist = newlist.filter((ele)=>(ele.unit=="Miscellaneous"));
       }
       if(unit=="Calculus"){
        newlist = newlist.filter((ele)=>(ele.unit=="Calculus"));
       }
       if(unit=="Trigonometry"){
        newlist = newlist.filter((ele)=>(ele.unit=="Trigonometry"));
       }
       if(sclass=="Class 11"){
        newlist = newlist.filter((ele)=>(ele.class=="Class 11"));
       }
       if(sclass=="Class 12"){
        newlist = newlist.filter((ele)=>(ele.class=="Class 12"));
       }
       if(showweakchap){
       newlist = newlist.filter((ele)=>(ele.isWeakChapter==true));}
       if(notstarted){
         newlist= newlist.filter((ele)=>(ele.status==="Not Started"));
        }
        setfdata(newlist);
      }
      
      useEffect(() => {
       filtersection();
      }, [showweakchap,notstarted,sclass,unit])
     const weakhandler = ()=>{
       setshowweakchap(prev=>!prev);
     }

    
  
      return (
    <div className='w-full md:w-[70%] p-0 md:p-10 '>
              {Mv? null :(<><div className='w-full  flex justify-center items-center gap-4 '>
                <img src={Image2} alt="" className='h-6 w-6 mb-2'/>
                 <h1 className='font-poppins font-bold text-xl mb-2 dark:text-white'>Mathematics PYQs</h1>
                </div>
                <div className='w-full  flex justify-center items-center gap-4 '>
                 <h3 className='font-poppins font-light py-3'>Chapter-wise Collection of Mathematics PYQs</h3>
                </div>
              </>)
                }
                <div   className='h-screen w-full overflow-y-auto hide-scrollbar pb-40'>
                    
<div className='w-full h-20 flex flex-start gap-4  items-center overflow-x-auto p-3 hide-scrollbar'>
<div className='min-w-[25%] md:min-w-[15%] h-10 border-2 rounded-2xl border-gray-200 flex justify-center items-center font-poppins dark:text-white '>
<label for="Class" ></label>
<select id="Class" name="Class" className='className="border-none focus:outline-none focus:ring-0 'onChange={(e)=>{
setsclass(e.target.value);}} >
  <option value="Class 11" className='w-6 h-6 dark:text-black'>Class 11</option>
  <option value="Class 12" className='w-6 h-6 dark:text-black'>Class 12</option>
   <option value="Class 12" className='w-6 h-6 dark:text-black'>All</option>
</select>
</div>
<div className='min-w-[25%] md:min-w-[15%]  h-10  border-2 rounded-2xl border-gray-200 flex justify-center items-center font-poppins dark:text-white'>
<label for="Units" ></label>
  <select
    id="Units"
    name="Units"
    className='appearance-none w-full h-full bg-transparent px-3 border-none focus:outline-none focus:ring-0 text-black dark:text-white'
    onChange={(e)=>{
      setunit(e.target.value);
      filtersection();
    }}>
    <option value="" disabled selected hidden>Units</option>
    <option value="Algebra" className='font-poppins dark:text-black'>Algebra </option>
    <option value="Vector" className='font-poppins dark:text-black'>Vector</option>
    <option value="Calculus" className='font-poppins dark:text-black'>Calculus</option>
    <option value="Trigonometry" className='font-poppins dark:text-black'>Trigonometry</option>
    <option value="Miscellaneous" className='font-poppins dark:text-black'>Miscellaneous</option>
    <option value="All" className='font-poppins dark:text-black'>All</option>
  </select>
</div>
                   <div className={!notstarted?` cursor-pointer min-w-[30%] md:min-w-[20%] h-10  border-2 rounded-2xl border-gray-200 flex justify-center items-center font-poppins dark:text-white`:` cursor-pointer min-w-[30%] md:min-w-[20%] h-10  border-2 rounded-2xl border-gray-200 flex justify-center items-center font-poppins bg-clicked text-white` } onClick={()=>setnotstarted(prev=>!prev)}>Notstarted</div>
                   <div className= {!showweakchap?` cursor-pointer min-w-[50%] md:min-w-[20%] h-10  border-2 rounded-2xl border-gray-200 flex justify-center items-center font-poppins dark:text-white`:` cursor-pointer min-w-[50%] md:min-w-[20%] h-10  border-2 rounded-2xl border-gray-200 flex justify-center items-center font-poppins bg-clicked text-white `} onClick={()=>{
                    weakhandler();

                   }}>Weak Chapters</div>
                   <div className='min-w-10  h-10  rounded-2xl border-gray-200 flex justify-center items-center font-poppins'>
                    <Toggle/>
                   </div>

                </div>
                <div className='w-full h-5 font-poppins flex justify-between items-center p-3 dark:text-white'>
                   Showing all chapters ({fdata.length})
                   <button className='flex'>
                    <img src={btn1} alt=""   />
                    <img src={btn2} alt=""  />
                   </button>
                </div>
                <div className='mt-10 flex flex-col gap-2'>
                {fdata.map((ele)=>{
                  return <Chap name={ele.subject} chapter={ele.chapter} icons={ele.icons}  yearWiseQuestionCount={ele.yearWiseQuestionCount} questionSolved={ele.questionSolved}/>
                })}

                </div>


                 </div>

      
    </div>
  )
}

export default Mathematics