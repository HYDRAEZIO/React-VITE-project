// import React from 'react';
import erevil from "/images/ereVil.png"; // Bullet point image
import img1 from "/images/s5-img1.png"; // Bullet point image
import img2 from "/images/s5-img2.png"; // Bullet point image
import img3 from "/images/s5-img3.png"; // Bullet point image
import img4 from "/images/s5-img4.png"; // Bullet point image
import img5 from "/images/s5-img5.png"; // Bullet point image
import seal from "/images/satisfaction-seal.png"; // Bullet point image
import s5img from "/images/s5img.png"; // Bullet point image
import React, { useEffect, useState } from "react";

const Section5 = () => {
  const [isMobile, setIsMobile] = useState(false);
  
    // Detect screen size
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
      };
  
      // Set initial value
      handleResize();
  
      // Add resize listener
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <div
      className="p-8 text-center relative w-full h-[100%] xl:h-[145vh] bg-cover mt-10 overflow-x-hidden overflow-y-hidden"
      style={{
        backgroundImage: !isMobile ? "url('/images/section5.jpg')" : "none",
        backgroundSize: '150% 100%',
        backgroundPosition: 'top center',
      }}
      
    >
      <h1 className="text-3xl xl:text-5xl font-bold text-orange-600 mb-4">
        The Benefits of erevil Maxi
      </h1>
      <h2 className="text-2xl xl:text-4xl font-bold text-purple-800 mb-2">
        ADVANCED MALE ENHANCEMENT!
      </h2>
      <p className="text-gray-700 xl:w-4/5 w-full mx-auto xl:text-xl">
      <span className='text-black font-bold'>erevil Maxi</span> Male Enhancement System offers multiple sexual health benefits to help you
        enjoy hard erections, increased stamina, and peak performance.
      </p>

      <img
        src={img1}
        alt="Below Text Image"
        className="xl:hidden block mx-auto"
        />
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 xl:gap-0 justify-center items-center max-w-5xl mx-auto">
        <div className="text-gray-700 p-3 rounded-md w-full xl:w-full">
          <h3 className="text-lg text-purple-800 xl:text-xl font-bold mb-2">IMPROVED LIBIDO & SEX DRIVE *</h3>
          <p className="text-sm xl:text-base">
          Get ready to experience a torrent of desire & passion with <span className='text-black font-bold'>erevil Maxi</span>  , which replenishes sexual energy stores across the body like never before.</p>
          <img
        src={img5}
        alt="Below Text Image"
        className="xl:hidden block  mx-auto"
        />
        </div>
        <div className="text-gray-700  p-3 rounded-md w-full xl:w-full">
          <h3 className="text-lg text-purple-800 xl:text-xl font-bold mb-2">INCREASED STAYING POWER * </h3>
          <p className="text-sm xl:text-base">
          Bid goodbye to premature ejaculations! <span className='text-black font-bold'>erevil Maxi</span>  floods your penile chambers with a gush of blood letting you last 5X more than usual and helping you last all night long!</p>
          <img
        src={img2}
        alt="Below Text Image"
        className="xl:hidden block mx-auto"
        />
        </div>
        <div className="text-gray-700 p-3 rounded-md w-full xl:w-full">
          <h3 className="text-lg text-purple-800 xl:text-xl font-bold mb-2">BIGGER, HARDER & LONGER ERECTIONS *          </h3>
          <p className="text-sm xl:text-base">
          <span className='text-black font-bold'>erevil Maxi</span>  lets you achieve rock-hard erections on command, helping you and your partner enjoy insane sexual sessions, whenever you desire.</p>
          <img
        src={img3}
        alt="Below Text Image"
        className="xl:hidden block  mx-auto"
        />
        </div>
        <div className="text-gray-700 p-3 rounded-md w-full xl:w-full">
          <h3 className="text-lg text-purple-800 xl:text-xl font-bold mb-2">IMPROVED SEXUAL CONFIDENCE *
          </h3>
          <p className="text-sm xl:text-base">
Equipped with youthful sexual powers & energy, you are sure to experience sexual confidence like never before, giving you greater success with the most desirable women!

          </p>
          <img
        src={img4}
        alt="Below Text Image"
        className="xl:hidden block  mx-auto"
        />
        </div>
        <div className="text-gray-700 p-3 rounded-md w-full xl:w-full">
          <h3 className="text-lg text-purple-800 xl:text-xl font-bold mb-2">INCREASED PENIS SIZE *
          </h3>
          <p className="text-sm xl:text-base">
          Increase in penile chamber capacity and regular boost in blood flow may help add those inches to your penis size, both length & girth-wise.

</p>
        </div>
        
       
      </div>
      <img
        src={seal}
        alt="Below Text Image"
        className="hidden absolute xl:block left-[10%] bottom-[17%] h-[10%]"
        />
         <div className="text-gray-700 p-3  hidden absolute xl:block bottom-[18%] -left-[23%] rounded-md w-full xl:w-full">
          <h3 className="text-lg text-orange-600 xl:text-xl font-bold mb-2">Our product backed with a
          </h3>
          <p className="text-purple-600 text-xl font-bold xl:text-base">
          100% Satisfaction
          Guarantee!
            </p>
        </div>
      <img
        src={s5img}
        alt="Below Text Image"
        className="hidden absolute xl:block right-[32%] bottom-[17%] h-[12%]"
        />
                <div className="text-gray-700 p-3  hidden absolute xl:block bottom-[19%] left-[28%] rounded-md w-full xl:w-full">
          <h3 className="text-lg text-orange-600 xl:text-xl font-bold mb-2">THE NUMBER ONE

          </h3>
          <p className="text-purple-600 text-xl font-bold xl:text-base">
          MALE ENHANCEMENT
          PILL IN THE US
            </p>
        </div>
       <img
        src={erevil}
        alt="Below Text Image"
        className="hidden xl:block absolute xl:left-[32%] w-auto xl:w-[25%] z-0 xl:top-[55%] h-1/3 xl:h-[30%]"
        />
         <img
        src={erevil}
        alt="Below Text Image"
        className="hidden xl:block absolute xl:left-[37%] w-auto xl:w-[25%] z-10 xl:top-[55%] h-1/3 xl:h-[30%]"
        />
         <img
        src={erevil}
        alt="Below Text Image"
        className="hidden xl:block absolute xl:left-[42%] w-auto xl:w-[25%] z-0 xl:top-[55%] h-1/3 xl:h-[30%]"
        />
    </div>
  );
};

export default Section5;