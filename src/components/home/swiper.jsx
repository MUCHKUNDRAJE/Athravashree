
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Autoplay1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className=' relative h-full w-full '>
            <img  className='h-full object-cover w-full' src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=' absolute h-full w-full top-0 bg-black opacity-20 '></div>
            <div className='  gilroy font-bold absolute h-full w-full  text-5xl gilroy text-white flex items-end  top-0 justify-between'>
                
                <div className=' flex items-start justify-center flex-col ml-10 mb-5'>
                    
                    <h1>Manish Nagar Property </h1>
                 <p className='text-xl'>Contracted of 2 Floor House with Finishing </p>
                    
                    </div>
                    <button className='text-sm mr-10 mb-5 p-2 bg-white text-black border-none  rounded-2xl'>
                        Vist the site
                    </button>
                    
            </div>
             </div></SwiperSlide>

                 <SwiperSlide> <div className=' relative h-full w-full '>
            <img  className='h-full object-cover w-full' src="https://images.unsplash.com/photo-1526007294207-6a0c9d171fdf?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=' absolute h-full w-full top-0 bg-black opacity-20 '>

            </div>
              <div className='  gilroy font-bold absolute h-full w-full  text-5xl gilroy text-white flex items-end  top-0 justify-between'>
                
                <div className=' flex items-start justify-center flex-col ml-10 mb-5'>
                    
                    <h1>Manish Nagar Property </h1>
                 <p className='text-xl'>Contracted of 2 Floor House with Finishing </p>
                    
                    </div>
                    <button className='text-sm mr-10 mb-5 p-2 bg-white text-black border-none  rounded-2xl'>
                        Vist the site
                    </button>
                    
            </div>
             </div></SwiperSlide>

                 <SwiperSlide> <div className=' relative h-full w-full '>
            <img  className='h-full object-cover w-full' src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=' absolute h-full w-full top-0 bg-black opacity-20 '>

            </div>
              <div className='  gilroy font-bold absolute h-full w-full  text-5xl gilroy text-white flex items-end  top-0 justify-between'>
                
                <div className=' flex items-start justify-center flex-col ml-10 mb-5'>
                    
                    <h1>Manish Nagar Property </h1>
                 <p className='text-xl'>Contracted of 2 Floor House with Finishing </p>
                    
                    </div>
                    <button className='text-sm mr-10 mb-5 p-2 bg-white text-black border-none  rounded-2xl'>
                        Vist the site
                    </button>
                    
            </div>
             </div></SwiperSlide>

                 <SwiperSlide> <div className=' relative h-full w-full '>
            <img  className='h-full object-cover w-full' src="https://images.unsplash.com/photo-1428341944206-459111332729?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=' absolute h-full w-full top-0 bg-black opacity-20 '>

            </div>
              <div className='  gilroy font-bold absolute h-full w-full  text-5xl gilroy text-white flex items-end  top-0 justify-between'>
                
                <div className=' flex items-start justify-center flex-col ml-10 mb-5'>
                    
                    <h1>Manish Nagar Property </h1>
                 <p className='text-xl'>Contracted of 2 Floor House with Finishing </p>
                    
                    </div>
                    <button className='text-sm mr-10 mb-5 p-2 bg-white text-black border-none  rounded-2xl'>
                        Vist the site
                    </button>
                    
            </div>
             </div></SwiperSlide>
            





     
       
      </Swiper>
    </>
  );
}
