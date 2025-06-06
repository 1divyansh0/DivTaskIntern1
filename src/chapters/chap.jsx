import React from 'react'

const chap = ({name , chapter, icons ,yearWiseQuestionCount,questionSolved}) => {
  return (
    <div className='w-full rounded-md h-20 flex justify-between items-center md:border-2 md:border-gray-200 md:gap-10  '>
        <img src={icons} alt="" className='h-15 w-8  md:ml-2 mx-auto dark:invert' />
        <div className='w-[58%] md:w-[80%] h-15   flex flex-col md:flex-row justify-between items-start md:items-center font-poppins text-md dark:text-white '>
        {chapter}
        <div className='pr-2 mr-9 h-12 flex justify-between items-center text-sm text-gray-500 gap-3'>
            2025: {yearWiseQuestionCount["2025"]}Qs {yearWiseQuestionCount["2025"]>5 ?<span className='text-green-500'>↑</span> : <span className='text-red-500'>↓</span>} | 2024: {yearWiseQuestionCount["2024"]}Qs
        </div>
        </div>
        <h1 className='text-gray-500 mr-3'>|</h1>
        <div className='w-[22%] text-gray-500'>
            {questionSolved}/205 Qs
        </div>
    </div>
  )
}

export default chap