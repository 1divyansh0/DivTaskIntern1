import React, { useEffect, useState } from 'react'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun-dim.svg'

const toggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');


  useEffect(() => {
    if (dark) {
      console.log('Adding dark class');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log('Removing dark class');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {dark ?<img src={Sun} alt="Toggle Theme" className="h-5 w-5 invert-0 dark:invert-100" />:<img src={Moon} alt="Toggle Theme" className="h-5 w-5 invert-0 dark:invert-100" />}
    </button>
  );
};


export default toggle