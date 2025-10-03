import React from "react";
import { MessageCircle, Repeat2, Heart, Share, Star, StarHalf } from "lucide-react";

function TestimonialTweet({ name, feedback, image,}) {
  return (
    <div className="w-[32rem]  bg-gray-50   border border-gray-200 rounded-2xl p-10 ml-10 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900">{name}</span>
          {/* <span className="text-sm text-gray-500">@{username} </span> */}
        </div>
      </div>

      {/* Content */}
      <p className="mt-3 text-gray-800 text-[15px] leading-relaxed">
       " {feedback} "
      </p>

      {/* Actions (like Twitter icons) */}
      <div className="flex justify-between mt-4 text-gray-500">
        <div className="flex mt-4 gap-1 text-yellow-500">
         <Star/>
           <Star/>
             <Star/>
               <Star/>
      </div>    
      </div>
    </div>
  );
}

export default TestimonialTweet;
