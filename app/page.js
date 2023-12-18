import React from 'react';
import FloatingNavbar from '@/app/components/floatingbar';

export default function Home() {
  return (
    <main  className=" min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black items-center justify-between pt-[10%]">
       <div style={{
      
      fontWeight: 'bold', // Increase font weight
      fontFamily: 'Ubuntu, sans-serif', // Use Ubuntu font
      animation: 'gradientAnimation 3s infinite linear', // Moving gradient animation
      
    }} className=' text-[5rem] font-800 text-white text-center '>
      

     Namaste 
     <div>
     <span 
      >Oskorp</span> here 
     </div>
      

      
    </div>
    <FloatingNavbar />

     

  
    </main>
  )
}
