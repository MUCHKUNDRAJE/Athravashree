import React, {useState} from 'react'
import ServicesCards from '../home/services-Cards'
import Footer from '../Footer'
import Servicecard2 from '../home/Service-card-2';

function Page1() {
        const [Name, setName] = useState("Services");
          const [Nameflag, setNameflage] = useState(false);

          const [Services, setServices] = useState([
  { serviceName: "Architect & Planning Consultant" },
  { serviceName: "Interior’s Consultant" },
  { serviceName: "Structural Engineers & Consultant" },
  { serviceName: "Civil Contractor" },
  { serviceName: "Vastu Planner" },
  { serviceName: "Fire Consultant" },
  { serviceName: "Landscape Designing" },
  { serviceName: "Property Makeover" },
  { serviceName: "Building Repair & Maintenance’s" },
  { serviceName: "Freelancer" },
  { serviceName: "Joint Venture Project’s" },
  { serviceName: "Building ReDevelopment" },
  { serviceName: "Building Makeover Contractor’s" },
  { serviceName: "Plumber" },
  { serviceName: "Electrician" },
  { serviceName: "Tile’s Fitter" },
  { serviceName: "Painter’s" },
  { serviceName: "Building 3D View Designer" },
  { serviceName: "Carpenter’s" },
  { serviceName: "Water-Proofing & (IPS) Indian Patent Stone" },
  { serviceName: "Fabrications Engineering" },
  { serviceName: "Precast Compound Wall’s" },
  { serviceName: "Legal Consultant" },
  { serviceName: "Tax Consultant" },
  { serviceName: "Assets Management’s" },
  { serviceName: "Air Cooler Ducting System" },
  { serviceName: "Construction Tools On Rent" },
  { serviceName: "Door Step Home Loan’s" },
  { serviceName: "3D Projection Mapping" },
  { serviceName: "Land Survey" },
  { serviceName: "Soil Testing" },
  { serviceName: "Building Construction Supervision" },
  { serviceName: "Rolling Shutter Shops Commercial" },
  { serviceName: "Rera Registered Property Consultant" },
  { serviceName: "Refer & Earn Program" }

          ]);






  return (
    <div className='min-h-screen w-full pt-20 '>
        <div className=' sticky top-15 bg-white z-50'>
         <div className=' bg-[#8B276F] text-white  staatliches-regular text-5xl h-15 flex items-center justify-center w-full'>
                {Name}
            </div>    
               <div className='h-10 w-full mt-6 flex items-center justify-center    '>
                 <div className="h-10 w-fit flex ">
              <div onClick={()=>(setName("Services"))} className="inter h-full w-40 text-center text-xl font-bold   text-zinc-600 border-b-2">
                Services
              </div>
              <div onClick={()=>(setName("Product"))} className=" inter h-full w-40 text-center text-xl font-bold   text-zinc-600 ">
                Product
              </div>
            </div>
            </div>

        </div>

            <div className='h-full w-full p-10 flex flex-wrap gap-10 items-center justify-center '>
                 
             {Services.map((val)=>(
                <Servicecard2 Services={val.serviceName}/>
             ))}


            </div>

            <Footer/>

    </div>
  )
}

export default Page1