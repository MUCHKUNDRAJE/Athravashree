import { ArrowBigLeftDashIcon, Info } from 'lucide-react'
import React from 'react'

function Servicecard2({Services}) {
  return (
    <div className=' w-70 rounded-2xl p-2 bg-slate-200 relative'>
      
        <div className='h-60 rounded-2xl w-full bg-red-200 overflow-hidden ' > 
             <img className='h-full w-full object-cover'   src="https://sites.create-cdn.net/siteimages/60/7/9/607929/21/3/4/21340658/2000x1333.jpg?1737458414" alt="" />  
        </div>
        <div className='w-full p-2'>
        <div className='bg-[#8B276F] w-fit px-2 text-white text-xs inter rounded-2xl '>
          Arthavshree    
        </div>
        <h1 className='inter text-lg  font-medium'>
         {Services}
        </h1>
        <button className='inter text-white rounded-2xl py-3 mt-2 w-full bg-[#8B276F]'>
              Enquiry 
        </button>
        </div>

    </div>
  )
}

export default Servicecard2