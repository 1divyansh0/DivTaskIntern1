import React, { useEffect, useState } from 'react'
import Sidebar from './pages/sidebar'
import Physics from './subjects/Physics'
import useIsMobile from './hooks/useIsMobile'
import Chemistry from './subjects/Chemistry'
import Mathematics from './subjects/Mathematics'
import Mobile from './pages/mobile'

const App = () => {
  
  const Ismobile = useIsMobile();
 
    const [activesection, setactivesection] = useState('Physics');
  
  

    const renderSection = () => {
    switch (activesection) {
      case 'Physics': return <Physics/>;
      case 'Chemistry': return <Chemistry />;
      case 'Maths': return <Mathematics/>;
      default: return null;
    }
  };
  return (
    
      <div className='flex flex-col md:flex-row w-screen relative'>
        {Ismobile ?<Mobile setactivesection={setactivesection}/>: <Sidebar setactivesection={setactivesection}/>}
         {renderSection()}
      </div>


    
    

  )
}

export default App