import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profilebanner from "../assets/ArtistProfilePage/images/profilebanner.webp"
import profileImage from "../assets/ArtistProfilePage/images/profileImage.webp"
import { artistProfilePageData, SellerPageData, } from "../constant/data"



import { useEffect, useRef, useState } from "react"
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";


import ButtonMain from "../shared/ButtonMain";

import profileBanner from '../assets/ArtistProfilePage/images/pb.webp'


import frylogo from '../assets/ArtistProfilePage/icons/frylogo.webp'
import profileSettingImage from '../assets/ArtistProfilePage/icons/pi.webp'



const ArtistProfile = () => {

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

    const [selectedButton, setSelectedButton] = useState("profile")


  const [imageFile, setImageFile] = useState(profileSettingImage);
    const [bannerFile, setBannerFile] = useState(profileBanner);

    function handleProfileImage(e) {
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }
    function handleBannerImage(e) {
        setBannerFile(URL.createObjectURL(e.target.files[0]));
    }


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

                    {
                        selectedButton === 'profile' ?

                            <div className="artist-profile">


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



                                <div className="flex justify-center my-10">

                                    <div className="flex gap-x-2 bg-inverted border-2 border-boorder w-fit px-4 py-2 rounded-xl font-secondary">
                                        <img src={frylogo} alt="" />
                                        <h6>10.89FRY </h6>
                                    </div>
                                </div>

                                {/* Cards-Wraper */}

                                <div className='flex flex-col gap-2 py-10 lg:py-30'>
                                    <div className="flex justify-between gap-2 items-center">

                                        <div>
                                            <h6 className="text-main border-1 border-main py-2 px-3 rounded-md border-2">Collection</h6>
                                        </div>
                                        <div>
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

                                    </div>
                                    <div className="flex max-md:justify-center">

                                        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:w-full">
                                            {SellerPageData.map((item, index) => (
                                                <div key={index} className="border-muted border-3 rounded-2xl shadow-lg p-4 relative">
                                                    {/* person */}
                                                    <div className="flex flex-col   py-2">

                                                        <h6 className="font-secondary font-bold">{item.name}</h6>
                                                        <p className="text-para-light font-semibold capitalize">{item.item}</p>

                                                    </div>

                                                    {/* card  */}
                                                    <div className="rounded-xl py-2 relative">
                                                        <img src={item.frame} alt="" />
                                                    </div>

                                                </div>
                                            ))}
                                        </div>


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
                                        <input type="file" className=" absolute z-100" style={{ width: '300px', color: 'transparent' }}
                                            onChange={handleBannerImage} />
                                        <p className="relative z-10 border-2 border-boorder px-4 py-3 rounded-lg bg-inverted">Upload Banner</p>
                                    </div>

                                    <img src={imageFile} alt="" className="flex justify-center absolute left-[50%]  translate-[-50%] w-[140px] rounded-full" />


                                    {/* upload proifle image    */}
                                    <div className="py-18 flex justify-center">
                                        <input type="file"
                                            onChange={handleProfileImage}
                                            className=" absolute z-100" style={{ width: '300px', color: 'transparent' }} />
                                        <p className="relative z-10 border-2 border-boorder px-4 py-3 rounded-lg bg-inverted">Upload Profile</p>
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

export default ArtistProfile