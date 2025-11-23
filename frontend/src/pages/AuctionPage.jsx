import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import APMimg1 from "../assets/AuctionPage/images/main1.webp";
import APMimg2 from "../assets/AuctionPage/images/main2.webp";
import APMimg3 from "../assets/AuctionPage/images/main3.webp";
import APMimg4 from "../assets/AuctionPage/images/main4.webp";
import { AuctionPageData } from '../constant/data';
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import "../styles/typography.css"

import { useRef, useState } from 'react';
import gridRight from "../assets/AuctionPage/icons/GridRightAuctionPage.webp"
import leftArrow from "../assets/AuctionPage/icons/LeftArrow.webp"
import elicpRight from '../assets/AuctionPage/icons/leftElicp.webp'
import elicpLeft from '../assets/AuctionPage/icons/rightElicp.webp'
import refresh from "../assets/AuctionPage/icons/ReFresh.webp"
import filter from "../assets/AuctionPage/icons/filter.svg"
import downfill from "../assets/AuctionPage/icons/downfill.svg"

import { CiSearch } from "react-icons/ci";


const AuctionPage = () => {
  const [StockCount] = useState(7);

  // filter
  // Filter dropDown


  const [priceOpen, setPriceOpen] = useState(false);
  const [bgOpen, setbgOpen] = useState(false);
  const [dropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((isOpen) => !isOpen)
  };

  const togglePrice = () => {
    setPriceOpen((isOpen) => !isOpen)
  };

  const toggleBackground = () => {
    setbgOpen((isOpen) => !isOpen)
  };


  return (
    <div>


      <Navbar />
      <div className='AuctionPage flex justify-center relative'>

        {/* Filter 📌 */}
        <div
          className='absolute z-100 left-0 max-sm:top-[10.6%] max-md:top-[22%] max-lg:top-[15%] max-xl:top-[23%] max-2xl:top-[28.5%] top-[20.5%]  py-2 bg-inverted rounded-xl max-md:w-[200px] md:w-[250px]  drop-shadow-2xl px-3 flex flex-col gap-y-2 '>

          {/* filter button */}
          <div className='flex justify-between px-3 items-center ' onClick={toggleDropdown}>
            <img src={filter} alt="" className='size-6' />
            <img src={downfill} alt="" className='size-6' />
          </div>
          <hr />

          {/* Open filter when click on filter buttons */}

          {dropdownOpen && (
            <div className='flex flex-col gap-y-3  z-50'>

              {/* div 1 */}
              {/* Popular  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Popular
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        15
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 2 */}
              {/* Price  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div ref={dropdownRef} className="inline-block w-full " >

                  <button
                    onClick={togglePrice}
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between gap-10">

                    <h6 className='pl-2'>
                      Price
                    </h6>

                    <img src={downfill} alt="" className='size-6' />

                  </button>

                  {priceOpen && (
                    <div className=" mt-3 z-50 flex flex-col gap-2 bg-inverted  rounded-lg shadow-lg w-full">

                      <div className='min-max-container flex justify-between px-2 py-4 w-full items-center'>
                        <div className='border border-main bg-secondary px-4 py-2 rounded-md text-inverted font-light'>
                          <p>Min</p>
                        </div>

                        <p>to</p>

                        <div className='border border-main bg-secondary px-4 py-2 rounded-md text-inverted font-light'>
                          <p>Max</p>
                        </div>

                      </div>
                      <div className='px-2 '>
                        <button className='font-secondary bg-main w-full rounded-md py-2 text-inverted'>Apply</button>
                      </div>

                    </div>
                  )}
                </div>

              </div>


              {/* div 3 */}
              {/* Background  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">

                <div ref={dropdownRef} className="inline-block w-full " >

                  <button
                    onClick={toggleBackground}
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between gap-10">

                    <h6 className='pl-2'>
                      Background
                    </h6>

                    <img src={downfill} alt="" className='size-6' />

                  </button>

                  {bgOpen && (
                    <div className=" mt-3 z-50  bg-inverted  rounded-lg shadow-lg w-full py-2">

                      <div className='background-filter w-full flex flex-col gap-y-2'>
                        {/* Search */}
                        <div className='search-filter border-2 border-boorder py-2 rounded-md flex justify-center  items-center gap-2 w-full pl-2'>
                          <div>
                            <CiSearch />
                          </div>
                          <div>

                            <input type="search" name="" id="" placeholder='search' className='font-secondary' />
                          </div>
                        </div>

                        {/* Select */}
                        <div className='select-bg-filter flex flex-col gap-y-2'>

                          <div className="select-bg flex justify-between text-para-light items-center">
                            <div className='flex gap-2 items-center'>
                              <div className='py-4 px-4 border-2 border-boorder rounded-md '></div>
                              <p>White</p>
                            </div>
                            <div>
                              <p>37</p>
                            </div>
                          </div>

                          <div className="select-bg flex justify-between text-para-light items-center">
                            <div className='flex gap-2 items-center'>
                              <div className='py-4 px-4 border-2 border-boorder rounded-md '></div>
                              <p>Red</p>
                            </div>
                            <div>
                              <p>5</p>
                            </div>
                          </div>

                          <div className="select-bg flex justify-between text-para-light items-center">
                            <div className='flex gap-2 items-center'>
                              <div className='py-4 px-4 border-2 border-boorder rounded-md '></div>
                              <p>Light Blue</p>
                            </div>
                            <div>
                              <p>10</p>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>
                  )}
                </div>

              </div>


              {/* div 4 */}
              {/* Clothing  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Clothing
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        110
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 5 */}
              {/* Eye  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Eye
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        2
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 6 */}
              {/* Body Color  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Body Color
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        11
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 7 */}
              {/* Head  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Head
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        33
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20  py-5 lg:py-10 '>

          {/* heroSectionWraper */}
          <div className='Auction topWraper flex flex-col items-center py-10 max-sm:py-5 relative z-50'>
            {/* hero-text */}
            <div>
              <h1 className='text-[150px] text-main font-bold tracking-widest acutionLargerfont'>Auction</h1>
            </div>

            {/* Hero-images */}
            <div className='flex flex-wrap justify-center gap-6 py-10 '>
              <div className='bg-inverted h-fit w-fit p-2 rounded-2xl drop-shadow-md '><img src={APMimg1} alt="" /></div>
              <div className=' flex max-md:pt-0 pt-27'>
                <div className='bg-inverted w-fit h-fit p-2 rounded-2xl drop-shadow-md'><img src={APMimg2} alt="" /></div>
              </div>
              <div className=' flex max-md:pt-0 pt-27'>
                <div className='bg-inverted w-fit h-fit p-2 rounded-2xl drop-shadow-md'><img src={APMimg3} alt="" /></div>
              </div>
              <div className='bg-inverted h-fit w-fit p-2 rounded-2xl drop-shadow-md'><img src={APMimg4} alt="" /></div>
            </div>
          </div>

          {/* topListed-cardsWraper */}
          <div className='flex justify-between gap-4 pb-10  '>
            <h2 className='uppercase'>Top Listed</h2>

            <div className='flex items-center gap-2'>
              <img src={refresh} alt="" className=' cursor-pointer' />
              <p className=' capitalize text-l text-para-light cursor-pointer'>Refresh A While Ago</p>
            </div>
          </div>



          {/*  Tolisted Cards Wraper*/}
          <div className='cards-wraper grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4 max-md:justify-items-center relative '>
            {
              AuctionPageData.map((item, index) => (
                <div key={index} className='p-1 h-full'>
                  <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1 2xl:pb-4" key={index}
                    style={{
                      backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className='flex flex-col gap-3 relative'>
                      {/* person wraper */}

                      <div className="flex gap-2 items-center w-full">

                        <img src={item.personImg} alt="" />
                        <div>
                          <h6 className="font-light">{item.name}</h6>
                          <p className='text-xs text-para-light font-light'>{item.username}</p>
                        </div>
                      </div>

                      {/* Stock timer */}
                      <div className=''>
                        <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />
                        <div className="fixed text-s left-[50%] translate-[-50%] top-[55%] font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-secondary font-secondary rounded-md bg-sold ">
                          3:06:59:18
                        </div>
                      </div>

                      {/* Stock Price */}
                      <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-5 2xl:bottom-8 right-2">
                        <p className="text-l ">Price:</p>
                        <span className="bg-black rounded-full">
                          <img src={logoprice} alt="" />
                        </span>
                        <p className="text-l text-para-light">142.02</p>
                      </div>

                      {/* Stock Amount */}
                      <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-2 shrink-0 cursor-pointer text-secondary flex items-center gap-4 text-small absolute bottom-5 2xl:bottom-8 left-4 ">
                        <span className='text-l font-medium capitalize '>In Stock</span>
                        <span className='text-l text-para-light'>{StockCount}</span>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
          </div>

          {/*  Auction Cards Wraper */}
          <div className='auction-cards-wraper py-20 max-sm:flex max-sm:flex-col max-sm:items-center relative z-50'>
            <h2 className='pb-10 uppercase'>Live Auction</h2>

            <div className='cards-wraper grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4 max-md:justify-items-center'>
              {
                AuctionPageData.map((item, index) => (
                  <div key={index} className='p-1 h-full'>
                    <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1 2xl:pb-4" key={index}
                      style={{
                        backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className='flex flex-col gap-3 relative'>
                        {/* person wraper */}

                        <div className="flex gap-2 items-center w-full">

                          <img src={item.personImg} alt="" />
                          <div>
                            <h6 className="font-light">{item.name}</h6>
                            <p className='text-xs text-para-light font-light'>{item.username}</p>
                          </div>
                        </div>

                        {/* Stock timer */}
                        <div className=''>
                          <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />
                          <div className="fixed text-s left-[50%] translate-[-50%] top-[55%] font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-secondary font-secondary rounded-md bg-sold ">
                            3:06:59:18
                          </div>
                        </div>

                        {/* Stock Price */}
                        <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-5 2xl:bottom-8 right-4">
                          <p className="text-l ">Price:</p>
                          <span className="bg-black rounded-full">
                            <img src={logoprice} alt="" />
                          </span>
                          <p className="text-l text-para-light">142.02</p>
                        </div>

                        {/* Stock Amount */}
                        <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-2 shrink-0 cursor-pointer text-secondary flex items-center gap-4 text-small absolute bottom-5 2xl:bottom-8 left-4 ">
                          <span className='text-l font-medium capitalize '>In Stock</span>
                          <span className='text-l text-para-light'>{StockCount}</span>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
            </div>

          </div>

          {/* Elicp Right */}
          <img src={elicpRight} alt="" className='absolute right-0 bottom-430 h-220  z-1 max-lg:hidden' />

          {/* Arrow Left */}
          <img src={leftArrow} alt="" className='absolute left-0 bottom-320 h-120  z-1 max-lg:hidden' />

          {/* Elicp Left */}
          <img src={elicpLeft} alt="" className='absolute left-0 bottom-130 h-240  z-1 max-lg:hidden' />

          {/* Grid Right */}
          <img src={gridRight} alt="" className='absolute right-0 top-90 z-1 max-lg:hidden' />

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AuctionPage;