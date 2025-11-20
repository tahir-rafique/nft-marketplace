import heroImg from '../assets/Pixacio/images/heroImage.webp'
import websiteIcon from '../assets/Pixacio/icons/internet.webp'
import twitter from '../assets/Pixacio/icons/twitterIco.webp'
import binculars from '../assets/Pixacio/icons/bincularsIco.webp'
import desIco from '../assets/Pixacio/icons/discord.webp'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { PixcaioPageData } from '../constant/data';

import search from '../assets/Pixacio/icons/search.webp'

import downfill from "../assets/AuctionPage/icons/downfill.svg"
import filter from "../assets/AuctionPage/icons/filter.svg"
import { useRef, useState } from 'react'



export default function TopCollectionPixacio() {


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
        <>
            <Navbar />
            <div className='flex justify-center relative '>

                {/* Filter 📌 */}
                <div
                    className='absolute z-100 left-0 max-sm:top-[16.1%] max-md:top-[31%] max-lg:top-[27%] max-xl:top-[38%] max-2xl:top-[42%] top-[29%]  py-2 bg-inverted rounded-xl max-md:w-[200px] md:w-[250px]  drop-shadow-2xl px-3 flex flex-col gap-y-2 '>

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


                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 py-20 bg-frame'>

                    {/* hero-Wraper */}
                    <div className='2xl:flex-row flex flex-col  gap-10 justify-between'>

                        {/* hero-Left */}
                        <div className="hero-left p-1  flex justify-center">
                            <img src={heroImg} alt="" className=' bg-[#fff] shadow-md p-3 rounded-2xl' />
                        </div>

                        {/* hero-Right */}
                        <div className="hero-right flex flex-col items-center lg:justify-end 2xl:w-[55%]">

                            {/* right top */}
                            <div className='right-top-wraper flex flex-col gap-8  w-full'>
                                <h2>Pixacio</h2>

                                <div className='flex flex-wrap max-lg:flex-col gap-10 p-1'>

                                    <div className='bg-inverted px-4 py-3 rounded-md flex justify-between drop-shadow-md max-w-[330px] gap-42 items-center'>
                                        <p className='text-para-light'>Items listed</p>
                                        <p className='text-para-light'> <b> 3,027</b></p>
                                    </div>

                                    <div className='bg-inverted px-4 py-3 rounded-md flex justify-between drop-shadow-md max-w-[330px] gap-36 items-center'>
                                        <p className='text-para-light'>Num of Sold Items</p>
                                        <p className='text-para-light'> <b>120</b></p>
                                    </div>

                                    <div className='bg-inverted px-4 py-3 rounded-md flex justify-between drop-shadow-md max-w-[330px] gap-44 items-center '>
                                        <p className='text-para-light'>Vol FRY</p>
                                        <p className='text-para-light'><b>18.5 FRY</b></p>
                                    </div>


                                </div>
                                <hr className='border-b-2 border-main max-w-[1100px]' />
                            </div>


                            {/* right bottom */}
                            <div className='right-bottom-wraper py-2 '>
                                <div className='flex  flex-wrap gap-4 py-4 px-1'>
                                    {/* website */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-1  '>
                                        <img src={websiteIcon} alt="" />
                                    </div>

                                    {/* twitter */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-[2px] min-w-[110px] '>
                                        <div className='flex justify-between items-center '>
                                            <img src={twitter} alt="" />
                                            <div className='text-[7px] bg-[#FF9292] h-fit py-1 px-2 rounded-[2px]'>
                                                12.3k
                                            </div>
                                        </div>
                                    </div>


                                    {/* Discord */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-1  '>
                                        <img src={desIco} alt="" />
                                    </div>

                                    {/* Link */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-1 min-w-[110px] '>
                                        <div className='flex justify-between items-center '>
                                            <img src={binculars} alt="" />
                                            <div className='text-[7px] bg-[#FF9292] h-fit py-1 px-2 rounded-[2px]'>
                                                12.3k
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className='text-para-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod vulputate ipsum, non molestie magna facilisis a. Cras tincidunt sem sed lorem dapibus laoreet. Curabitur vel lectus purus. In gravida eros ac aliquam facilisis. Suspendisse at elementum metus. Proin elementum maximus placerat. Suspendisse sapien justo, interdum sit amet sollicitudin quis, porttitor a metus. In eu accumsan dolor, eu venenatis eros. Aliquam erat volutpat. Etiam suscipit placerat mi. Mauris diam purus, sagittis eu feugiat eu, sodales a quam. Cras elit enim. </p>

                            </div>
                        </div>
                    </div>




                    {/* Card-WraperS */}
                    <div className=" flex flex-col max-sm:items-center items-end  gap-4 lg:gap-10 pt-5 lg:pt-50 relative ">

                        <div className="rounded-2xl flex max-sm:mb-12 max-lg:mb-20  items-center gap-4 px-8  py-4 border-2 border-muted drop-shadow-xl relative z-50 w-full max-w-[650px]">

                            <img src={search} alt="" />
                            <input className="font-secondary  text-para-light w-full max-w-[500px] outline-none"
                                placeholder="Search by name" />

                        </div>


                        <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5 max-sm:mt-2'>
                            {
                                PixcaioPageData.map((item, index) => (
                                    <div key={index} className='p-1 h-full'>
                                        <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1  2xl:pb-4"
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
                                                            {/* <img src={logoprice} alt="" /> */}
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
            <Footer />
        </>
    )
}
