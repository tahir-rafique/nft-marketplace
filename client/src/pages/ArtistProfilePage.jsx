import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profilebanner from "../assets/ArtistProfilePage/images/profilebanner.webp"
import profileImage from "../assets/ArtistProfilePage/images/profileImage.webp"
import mpf from "../assets/ArtistProfilePage/images/mpf.webp"
import { artistProfilePageData, PixcaioPageData, } from "../constant/data"


import websiteIcon from '../assets/Pixacio/icons/internet.webp'
import twitter from '../assets/Pixacio/icons/twitterIco.webp'
import binculars from '../assets/Pixacio/icons/bincularsIco.webp'
import desIco from '../assets/Pixacio/icons/discord.webp'
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import { useEffect, useRef, useState } from "react"
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";
import profileBanner from '../assets/ArtistProfilePage/images/pb.webp'
import ButtonMain from "../shared/ButtonMain";

import profileSettingImage from '../assets/ArtistProfilePage/icons/pi.webp'


import frylogo from '../assets/ArtistProfilePage/icons/frylogo.webp'

const ArtistProfilePage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((isOpen) => !isOpen)
    };


    const [imageFile, setImageFile] = useState(profileSettingImage);
    const [bannerFile, setBannerFile] = useState(profileBanner);

    function handleProfileImage(e) {
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }
    function handleBannerImage(e) {
        setBannerFile(URL.createObjectURL(e.target.files[0]));
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false) }
        };
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    });

    const [selectedButton, setSelectedButton] = useState("profile")

    return (
        <>
            <Navbar />
            <div className="flex justify-center relative z-100">
                <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-20">

                    {/* profile shifting/navigation */}
                    <div className="artist-profile flex gap-4 border-2 px-2 py-1 w-fit rounded-lg font-secondary border-boorder mt-10">



                        <button onClick={() => setSelectedButton("profile")} className={` px-4 py-2 rounded-xl cursor-pointer ${selectedButton === "profile" ? "bg-main text-inverted" : ""}`}>Profile</button>

                        <button onClick={() => setSelectedButton("other")} className={`cursor-pointer px-4 py-2 rounded-xl ${selectedButton === "other" ? "bg-red-500 text-inverted" : ""}`}>Profile Settings</button>



                    </div>


                    {selectedButton === "profile" ?
                        <div className="artist-profile-page">
                            {/* Profile banner Container */}
                            <div className="profile-container py-5 flex flex-col gap-3 relative">

                                <div className="font-secondary cursor-pointer bg-main w-fit font-medium absolute right-2 top-8 rounded-xl text-inverted px-4 py-2">Follow</div>

                                {/*  banner */}
                                <img src={profilebanner} alt="" className="profile-banner" />

                                <img src={profileImage} alt="" className="profile-image  absolute
                                    xl:top-[70%] left-[50%] translate-[-50%] 
                                    max-xl:top-[55%]
                                    max-sm:top-[50%] max-sm:size-24"/>

                                {/* name & followers */}
                                <div className="profile-details flex flex-col items-center pt-10">
                                    <h3>William Akarana</h3>
                                    <div className="flex gap-10 max-sm:gap-2">
                                        <div className="followers flex gap-2 items-center">
                                            <h5 className="font-secondary font-medium">99</h5>
                                            <p className="text-para-light">Followers</p>
                                        </div>

                                        <div className="followers flex gap-2 items-center">
                                            <h5 className="font-secondary font-medium">26</h5>
                                            <p className="text-para-light">Following</p>
                                        </div>

                                        <div className="followers flex gap-2 items-center">
                                            <h5 className="font-secondary font-medium">12</h5>
                                            <p className="text-para-light">items</p>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div className="flex justify-center">

                                <div className="flex gap-x-2 bg-inverted border-2 border-boorder w-fit px-4 py-2 rounded-xl font-secondary">
                                    <img src={frylogo} alt="" />
                                    <h6>10.89FRY </h6>
                                </div>
                            </div>

                            {/* profile Detials Section*/}
                            <div className='2xl:flex-row flex flex-col  gap-10 justify-between py-4 lg:py-10 pb-4 lg:pb-30'>

                                {/* details-Left */}
                                <div className="hero-left p-1  flex justify-center">
                                    <img src={mpf} alt="" className=' bg-[#fff] shadow-md p-3 rounded-2xl' />
                                </div>

                                {/* details-Right */}
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

                            {/* MEnu Section */}
                            <div className='menu-section  flex justify-between items-center pt-10 pb-5 flex-wrap gap-4'>
                                {/* Menu */}
                                <div className="cursor-pointer flex gap-4  flex-wrap lg:gap-12 items-center font-secondary  text-secondary">
                                    <h6 className='text-main border-2 px-4 py-2 rounded-md w-fit'>All</h6>
                                    <h6>Generated</h6>
                                    <h6>Minted </h6>
                                    <h6>On Sale</h6>
                                    <h6>Auction</h6>
                                    <h6>Sold</h6>

                                </div>

                                {/* Dropdown menu */}
                                <div ref={dropdownRef} className="inline-block " >
                                    <button
                                        onClick={toggleDropdown}
                                        className="navbtn-size border border-grd text-main navbtn-border  px-4 py-2 3xl:px-6 3xl:py-2 cursor-pointer font-medium flex items-center gap-1">
                                        <span>
                                            <h6>
                                                Newest
                                            </h6>
                                        </span>
                                        <span>
                                            <img src={downArrow} alt="" />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute z-50 max-lg:w-33 w-45 bg-inverted border-2 border-muted rounded-lg shadow-lg ">
                                            <ul className="py-2">
                                                {artistProfilePageData.map((item) => (
                                                    <p key={item} className="font-secondary px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                                                        {item}
                                                    </p>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </div>

                            {/* Cards-Wraper */}
                            <div className="Cards-Wraper flex flex-col max-sm:items-center   gap-4 lg:gap-10 py-5 pb-10 lg:pb-30">

                                <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5'>
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
                        :
                        <div className="artist-profile-page-setting">
                            {/*  user images*/}
                            <div className="py-5 w-full relative">

                                {/* upload banner  */}
                                <img src={bannerFile} alt="" className="flex justify-center w-full h-[330px] object-cover rounded-2xl" />

                                <div className="py-18 flex justify-center absolute top-[40%] left-[50%] translate-[-50%]">
                                    <input type="file" className=" absolute z-100 cursor-pointer" style={{ width: '300px', color: 'transparent' }}
                                        onChange={handleBannerImage} />
                                    <p className="relative z-10 border-2 border-boorder px-4 py-3 rounded-lg bg-inverted">Upload Banner</p>
                                </div>

                                <img src={imageFile} alt="" className="flex justify-center absolute left-[50%]  translate-[-50%] w-[140px] rounded-full" />


                                {/* upload proifle image    */}
                                <div className="py-18 flex justify-center">
                                    <input type="file"
                                        onChange={handleProfileImage}
                                        className=" absolute z-100 cursor-pointer" style={{ width: '300px', color: 'transparent' }} />
                                    <p className="relative z-10 border-2 border-boorder px-4 py-3 rounded-lg bg-inverted cursor-pointer">Upload Profile</p>
                                </div>
                            </div>


                            {/* user detials  */}
                            <div className="max-w-[820px] mx-auto font-secondary flex flex-col gap-8 ">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name"><h5>Dispaly Name</h5></label>
                                    <input type="text" id="name" placeholder="Enter your Name" className="bg-inverted border-3 border-boorder rounded-md w-full px-3 py-3" />
                                </div>



                                <div className="flex flex-col gap-2">
                                    <label htmlFor="bio"><h5>Bio</h5></label>
                                    <textarea id="bio" rows={'4'} placeholder="Enter Bio" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                </div>


                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email"><h5>E-mail</h5></label>
                                    <input type="email" id="email" placeholder="Enter Email" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                </div>


                                {/* Social LInks */}
                                <h3>SOCIAL LINKS</h3>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="website"><h5>Website</h5></label>
                                    <input type="website" id="website" placeholder="http://" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                </div>


                                <div className="flex flex-col gap-2">
                                    <label htmlFor="twitter"><h5> X(Twitter)</h5></label>
                                    <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-3 bg-inverted  relative z-40 w-full border-3 border-boorder">
                                        <input id="twitter" className="font-secondary text-light w-full max-w-[730px] outline-none " placeholder="@username" />
                                        <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-2 py-1 shrink-0 cursor-pointer flex gap-1 right-2 z-50 ">
                                            <h6 className="font-light">Connect</h6>

                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="twitter"><h5> Discord</h5></label>
                                    <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-3 bg-inverted  relative z-40 w-full border-3 border-boorder">
                                        <input id="twitter" className="font-secondary text-light w-full max-w-[730px] outline-none " placeholder="@username" />
                                        <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-2 py-1 shrink-0 cursor-pointer flex gap-1 right-2 z-50 ">
                                            <h6 className="font-light">Connect</h6>

                                        </a>
                                    </div>
                                </div>


                                <div className="flex flex-col gap-2 pb-20">
                                    <label htmlFor="twitter"><h5> Instagram</h5></label>
                                    <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-3 bg-inverted  relative z-40 w-full border-3 border-boorder">
                                        <input id="twitter" className="font-secondary text-light w-full max-w-[730px] outline-none " placeholder="@username" />
                                        <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-2 py-1 shrink-0 cursor-pointer flex gap-1 right-2 z-50 ">
                                            <h6 className="font-light">Connect</h6>
                                        </a>
                                    </div>
                                </div>


                                <ButtonMain text={'Save Changes'} />

                            </div>
                        </div>
                    }

                </div>

            </div>
            <Footer />
        </>
    )
}

export default ArtistProfilePage