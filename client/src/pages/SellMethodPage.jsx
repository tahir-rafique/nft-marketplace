import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import backdooricon from '../assets/SellMethod/icons/bdicon.webp'
import personIMG from '../assets/SellMethod/images/personImage.webp'
import logoprice from '../assets/SellMethod/icons/logoprice.webp'
import { useEffect, useRef, useState } from "react"
import { timeLeft } from "../constant/data"
import fixedPrice from '../assets/SellMethod/icons/fixedprice.webp'
import auctionIcon from '../assets/SellMethod/icons/aucIcon.webp'
import monthIcon from '../assets/SellMethod/icons/monthListing.webp'

import downline from '../assets/SellMethod/icons/downline.webp'
import ticked from '../assets/SellMethod/icons/ticked.webp'


const SellMethodPage = () => {


    const [isOpenDuration, setIsOpenDuration] = useState(false);

    const [isOpenListing, setIsOpenListing] = useState(false);

    const dropdownRefListing = useRef(null);
    const dropdownRefDuration = useRef(null);

    const toggleDropdownListing = () => {
        setIsOpenListing((isOpen) => !isOpen);
    };

    const toggleDropdownDuration = () => {
        setIsOpenDuration((isOpen) => !isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefListing.current && !dropdownRefListing.current.contains(event.target)) {
                setIsOpenListing(false);
            }
            if (dropdownRefDuration.current && !dropdownRefDuration.current.contains(event.target)) {
                setIsOpenDuration(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const [selectedButton, setSelectedButton] = useState()

    return (
        <>
            <Navbar />
            <div className="flex justify-center relative z-100">
                <div className="container max-sm:px-5 sm:px-12 lg:px-20  mx-auto pt-20">

                    {/* BAck button */}
                    <div className="bg-inverted w-fit px-4 rounded-md drop-shadow-xl py-2 items-center" >
                        <Link to="/" className="flex gap-2">
                            <img src={backdooricon} alt="" />
                            <h5 className="font-secondary"> Back</h5>
                        </Link>
                    </div>

                    {/* main content div */}
                    <div className="flex gap-10 py-5 max-lg:flex-col">

                        {/* left div*/}
                        <div className="lg:max-w-[400px] flex flex-col gap-4 max-lg:items-center max-lg:w-full">
                            <img src={personIMG} alt="" className=" drop-shadow-md border-12 border-inverted rounded-4xl w-[300px]" />
                            <h4 className="font-secondary capitalize font-medium text-secondary">Preview your item</h4>
                        </div>




                        {/* Right div */}
                        <form action="" onSubmit={handleSubmit}>

                        </form>
                        <div className="bg-inverted rounded-xl drop-shadow-xl w-full px-6 md:px-24 flex flex-col gap-4">
                            <h2 className="uppercase text-center pt-5">Royal Samurai</h2>

                            {/* select */}
                            <div className="flex flex-col gap-2">
                                <h3 className="font-secondary font-semibold max-sm:text-center">Select Your Sell Method</h3>
                                <div className="flex max-sm:flex-col gap-8 items-center p-1">

                                    <div
                                        onClick={() => { setSelectedButton('fixedprice') }}
                                        className="bg-inverted hover:bg-[#F4F3F3] drop-shadow-md rounded-lg h-[210px] w-[200px] flex justify-center items-center relative">

                                        <div className="bg-[#F4F3F3]  hover:bg-inverted rounded-full h-[150px] w-[150px] p-4 flex justify-center items-center">
                                            <div className="bg-[#45ADEB] rounded-full h-[100px] w-[100px] p-4">
                                                <img src={fixedPrice} alt="" className="w-full h-full" />
                                            </div>
                                        </div>

                                        {/* tiked */}
                                        {selectedButton === 'fixedprice' ? <img src={ticked} alt="" className="absolute top-2 right-2 " /> : null}

                                        <h6 className="absolute bottom-0 font-secondary">Fixed Price</h6>
                                    </div>


                                    <div
                                        onClick={() => { setSelectedButton('auction') }}
                                        className="bg-inverted hover:bg-[#F4F3F3] drop-shadow-md rounded-lg h-[210px] w-[200px] flex justify-center items-center">

                                        <div className="bg-[#F4F3F3]  hover:bg-inverted rounded-full h-[150px] w-[150px] p-4 flex justify-center items-center">
                                            <div className="bg-[#F7A940] rounded-full h-[100px] w-[100px] p-4">
                                                <img src={auctionIcon} alt="" className="w-full h-full" />
                                            </div>
                                        </div>

                                        {/* tiked */}
                                        {selectedButton === 'auction' ? <img src={ticked} alt="" className="absolute top-2 right-2 " /> : null}
                                        <h6 className="absolute bottom-0 font-secondary">Auction</h6>

                                    </div>


                                </div>

                            </div>

                            {/* pirce */}
                            <div className="flex flex-col gap-2">{/*  */}
                                <label htmlFor="price"> <h5 className="font-secondary font-medium">Price</h5></label>
                                <div className="flex gap-2 sm:gap-4  items-center">
                                    <div className="flex gap-2 items-center border-3 border-boorder px-2 md:px-4 py-2 rounded-lg">
                                        <img src={logoprice} alt="" />
                                        <p className="w-full">FRY</p>
                                    </div>
                                    <div className="w-full">
                                        <input type="number" id="price" placeholder="Enter price for one item" className="w-full font-secondary pl-4  border-3 border-boorder rounded-lg py-1 lg:py-1.5" />
                                    </div>
                                </div>
                            </div>


                            {/* Condictional rendering */}
                            <div className="duration-and-listing-wraper flex flex-col gap-2">
                                {selectedButton === 'fixedprice' ?

                                    <div className="shedule-listing">
                                        <h5 className="listing-wraper font-secondary font-medium capitalize mb-2">schedule listing</h5>
                                        <div ref={dropdownRefListing} className=" w-full" >
                                            <button
                                                onClick={toggleDropdownListing}
                                                className="navbtn-size border-3 text-para-light border-boorder navbtn-border  px-4 py-1 3xl:px-6 3xl:py-2 cursor-pointer flex gap-4 w-full">
                                                <img src={monthIcon} alt="" />
                                                <span>
                                                    <h6>
                                                        1 month
                                                    </h6>
                                                </span>


                                            </button>

                                            {isOpenListing && (
                                                <div className="relative z-100 w-full  bg-inverted border-2 border-muted rounded-lg shadow-lg ">
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
                                    :
                                    <div className="duration">
                                        <h5 className="duration-wraper font-secondary font-medium mb-2">Duration</h5>
                                        <div ref={dropdownRefDuration} className=" w-full" >
                                            <button
                                                onClick={toggleDropdownDuration}
                                                className="navbtn-size border-3 text-para-light border-boorder navbtn-border  px-4 py-1 3xl:px-6 3xl:py-2 cursor-pointer flex justify-between w-full">

                                                <span>
                                                    <h6>Select time </h6>
                                                </span>

                                                <img src={downline} alt="" />

                                            </button>

                                            {isOpenDuration && (
                                                <div className="relative w-full z-50  bg-inverted border-2 border-muted rounded-lg shadow-lg ">
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
                                }
                            </div>

                            {/* submit button */}
                            <div className="pt-10 flex justify-end font-light font-secondary pb-10 cursor-pointer">
                                <input type="submit" className="bg-main px-4 py-2 rounded-md text-inverted cursor-pointer" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SellMethodPage