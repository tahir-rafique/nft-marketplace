import boostIcon from "../assets/BoostNFT/icons/boostIcon.svg"
import subtract from "../assets/BoostNFT/images/subtract.webp"
import person from "../assets/BoostNFT/images/person.webp"
import monkey from "../assets/BoostNFT/images/monkey.webp"
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import elipBoost from "../assets/BoostNFT/images/boostElicpMain.webp"
import upArr from "../assets/BoostNFT/images/UpArrowBoost.webp"
import sArr from "../assets/BoostNFT/images/Sarrow.webp"
import boostTwo from "../assets/BoostNFT/images/boost2.webp"
import boostThree from "../assets/BoostNFT/images/boost3.webp"
import elipBoostLeft from "../assets/BoostNFT/images/boostElicpLeft.webp"

const BootNFT = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 lg:py-10 relative z-20">
                <div className="flex max-lg:flex-col max-lg:items-center gap-10">
                    {/* Text Section */}
                    <div className="flex flex-col max-lg:items-center gap-10 md:gap-24  w-[50%] max-lg:w-full md:py-10 ">
                        <div className="flex flex-col max-lg:items-center gap-4">
                            <h2 className="line-height-l uppercase text-secondary max-lg:w-full max-w-[90%] ">Boost Your NFTs:
                                Enhance Visibility  and Value</h2>
                            <h6 className="font-secondary leading-tight tracking-tight text-para-light font-light w-full max-w-[80%] ">The Boost feature is a premium service that allows NFT creators and  collectors to elevate their listings on our marketplace. By boosting an  NFT, you can ensure it appears prominently in search results,  featured sections, and on the homepage, maximizing exposure to  potential buyers.</h6>
                        </div>
                        <a href="#" className="w-fit navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer flex gap-1">
                            <span>Boost</span>
                            <img src={boostIcon} alt="no img" />
                        </a>
                    </div>
                    {/* Image Section */}
                    <div className="max-lg:w-full  w-[50%] max-md:py-0 py-74 max-lg:py-60 relative max-lg:pb-34">
                        <div className="absolute top-0 max-lg:left-12 left-24 z-50 max-md:hidden">
                            <div className="px-4 py-8 relative" style={{ backgroundImage: `url(${subtract})`, backgroundRepeat: "no-repeat", backgroundSize: "" }}>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <img src={person} alt="" />
                                        <div>
                                            <p>Stella Nova</p>
                                            <p className="text-xs text-para-light">@Stella Nova</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={monkey} alt="" />
                                    </div>
                                </div>

                                <button className="flex justify-between gap-2 font-secondary bg-inverted px-2 py-2 rounded-lg absolute bottom-10 left-6 text-xs">
                                    <span className="font-medium">In Stock</span> <span className="text-para-light">7</span>
                                </button>

                                <button className="flex  gap-2 font-secondary bg-inverted px-2 py-2 rounded-lg absolute bottom-10 left-34 text-xs">
                                    <span className="font-medium">Price:</span><span className="bg-black rounded-full">
                                        <img src={logoprice} alt="" />
                                    </span> <span className="text-para-light">142.02</span>
                                </button>
                            </div>
                        </div>
                        <img src={upArr} alt="" className="absolute top-2 left-78 z-50 max-lg:hidden" />
                        <img src={sArr} alt="" className="absolute top-64 left-8 z-50 max-md:hidden" />

                        <img src={elipBoost} alt="" className="absolute top-0 size-120 z-1 max-lg:hidden" />

                        <img src={boostThree} alt="" className="absolute bottom-10 max-lg:right-36 h-44 " />

                        <img src={boostTwo} alt="" className="absolute right-2 bottom-0 h-68 max-lg:h-34 max-lg:hidden" />

                    </div>


                </div>
            </div>
            <img src={elipBoostLeft} alt="" className="absolute top-0 size-160 z-1 left-0 max-lg:hidden" />
        </div>
    )
}

export default BootNFT