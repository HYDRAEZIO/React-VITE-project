import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');
  return (
    <footer className="  bottom-0 bg-[#e2e1e1] w-full p-4 text-center   ">
        <div className='sm:w-[80%] mx-auto p-4  '>
          <img src="images/footer-logo.png " alt=""  className='mb-6 hidden sm:block '/>

        <p className="text-black font-thin   leading-normal mb-6">
        Notice: The products and information found on this site are not intended to replace professional
        medical advice or treatment. These statements have not been evaluated by the Food and Drug Administration. 
        These products are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
      </p>
      <p className="text-black font-extrabold">
        <strong>© {year} erevil Maxi. All Rights Reserved.</strong>
      </p>
        </div>
    
    </footer>
  );
};

export default Footer;
