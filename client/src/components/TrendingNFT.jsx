import { timeLeft, TrendingNFTData } from "../constant/data.jsx";
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TrendingNFT = () => {

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen)
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false) }
    };
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  });


  return (
    <div className="flex justify-center relative z-50">
      <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-10 lg:gap-20">

        {/* 1st Section */}
        <div className="flex justify-between items-center gap-10">
          <h2 className="leading-none">Trending nft’s</h2>

          {/* Dropdown menu */}
          <div ref={dropdownRef} className="inline-block " >
            <button
              onClick={toggleDropdown}
              className="navbtn-size border border-grd text-main navbtn-border  px-4 py-1 3xl:px-6 3xl:py-2 cursor-pointer font-medium flex items-center gap-1">
              <span><h6>
                Last 30 Minutes
              </h6>
              </span><span><img src={downArrow} alt="" /></span>
            </button>

            {isOpen && (
              <div className="absolute z-50 max-sm:w-33 w-45 bg-inverted border-2 border-muted rounded-lg shadow-lg ">
                <ul className="py-2">
                  {timeLeft.map((item) => (
                    <p key={item} className="font-secondary px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                      {item}
                    </p>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Trending NFT */}
        <div className=" flex flex-col max-sm:items-center  gap-4 lg:gap-10">
          <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
              TrendingNFTData.map((item, index) => (
                <div key={index} className='p-1 h-full '>
                  <div
                    onClick={() => { navigate('top-collection-pixacio') }}
                    className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1  2xl:pb-4 cursor-pointer"
                    style={{
                      backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",

                    }}
                  >
                    <div className='flex flex-col gap-3 relative'>

                      <div className="flex gap-2 items-center w-full">
                        <img src={item.personImg} alt="" />
                        <div>
                          <h6 className="font-light">{item.name}</h6>
                          <p className='text-para-light font-light text-xs'>{item.username}</p>
                        </div>
                      </div>

                      <div className=''>
                        <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />

                        <a className="text-l font-medium font-secondary navbtn-border background-grad text-inverted cursor-pointer  w-fit absolute  bottom-4 left-2 px-4 py-2">
                          Buy
                        </a>

                        <div className="  font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center navbtn-border gap-1 text-l absolute bottom-4 right-3">
                          <p className="text-l ">Price:</p>
                          <span className="bg-black rounded-full">
                            <img src={logoprice} alt="" />
                          </span>
                          <p className="text-l text-para-light">142.02</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrendingNFT;
