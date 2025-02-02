import React from 'react';
import btnString from "/images/btn-strip.png"; // New image for mobile view

const Divider = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative xl:w-auto mx-auto w-[80vw] flex justify-center items-center m-5">
      <img
        src={btnString}
        alt="A descriptive alt text"
        className="w-full xl:scale-x-180 xl:scale-y-160 h-auto xl:max-w-lg rounded-lg shadow-lg "
      />
      <div className="absolute xl:w-2/3 flex flex-row xl:text-black text-start text-xs md:text-xl font-bold bg-opacity-50 rounded-md">
       <div className=' w-[100%]'>
        <h1 className="text-start ">
          ORDER YOUR EREVIL MAXI TODAY !
        </h1>   
        <h1>
          Experience Sexual Power, Pleasure & Performance
        </h1>  
        </div> 
        <div className='mr-10 hidden xl:block'>
        <button className="w-full " onClick={scrollToTop}>
          <img
            src="/images/submit-btn.png"
            alt="Rush My Bottle"
            className="w-[100%] cursor-pointer mt-4 animate-scaleUpDown"
          />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Divider;
