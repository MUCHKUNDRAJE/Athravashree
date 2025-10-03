import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Rotate3D, RotateCcw } from "lucide-react";

function Page4() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef();

  const handleTurn = () => {
    gsap.to(cardRef.current, {
      rotateY: flipped ? 0 : 180,
      duration: 0.8,
      ease: "power2.inOut",
    });
    setFlipped(!flipped);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="h-[90vh] w-[90%] z-20 bg-[#7a1e60] opacity-95 flex items-center justify-center flex-col gap-10">
        <h1 className="gilroy text-6xl font-semibold text-white">
          Business Card
        </h1>

        <div
          onClick={handleTurn}
          className="w-[33rem] h-80 perspective cursor-pointer"
        >
          <div
            ref={cardRef}
            className="relative w-full h-full preserve-3d rounded-2xl shadow-2xl border-2 border-gray-200"
          >
            {/* Front */}
            <div className="absolute inset-0 backface-hidden">
              <img
                src="/2.png"
                className="w-full h-full object-cover rounded-2xl"
                alt="Front"
              />
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <img
                src="/1.png"
                className="w-full h-full object-cover rounded-2xl"
                alt="Back"
              />
            </div>
          </div>
        </div>

        <button onClick={handleTurn} className="p-2 cursor-pointer rounded-3xl rotate-190 bg-white">
              <RotateCcw/>
        </button>
      </div>

      {/* Extra CSS */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default Page4;
