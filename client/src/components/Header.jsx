import Himg1 from "../assets/Header/images/Himg1.webp";
import Himg2 from "../assets/Header/images/Himg2.webp";
import Himg3 from "../assets/Header/images/Himg3.webp";
import Himg4 from "../assets/Header/images/Himg4.webp";
import Himg5 from "../assets/Header/images/Himg5.webp";
import elicpBg from "../assets/Header/images/HeaderEllicpBG.webp"
import leftHand from "../assets/Header/images/leftHand.png"
import rightHand from "../assets/Header/images/rightHand.png"

const Header = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 3xl:py-10 ">
                <div className="flex flex-col gap-0 max-lg:pt-6 max-lg:pb-0 pt-4  py-25 relative z-50">

                    <div className="text-center flex flex-col gap-3 relative z-50">
                        <h1 className=" font-normal text-secondary text-center uppercase line-height-l">discover, create & <br /> sell artworks.</h1>
                        <h6 className="text-light text-center font-secondary font-light">Discover and trade unique digital art pieces on our NFT website, <br /> where creativity meets blockchain technology.</h6>
                    </div>
                    <div className="onlargescreen flex justify-center relative py-40 sm:py-60 max-md:hidden ">
                        <img src={Himg1} alt="" className="absolute top-4  max-sm:h-64 z-10 cardOne-animation  " />
                        <img src={Himg2} alt="" className="absolute top-4  max-sm:h-64 z-20 cardTwo-animation  " />
                        <img src={Himg3} alt="" className="updownCard-animation absolute  top-2 z-50  max-sm:h-66" />
                        <img src={Himg4} alt="" className="absolute  top-4 max-sm:h-64 z-10  cardFour-animation  " />
                        <img src={Himg5} alt="" className="absolute top-4 max-sm:h-64 z-8 cardFive-animation  " />
                        {/* BG elicp */}
                    </div>
                    <div className="md:hidden flex flex-wrap justify-center py-50 md:py-60 relative mobileOneImage">
                        <img src={Himg3} alt="" className=" absolute z-50 top-4 h-90 " />
                    </div>
                    <img src={elicpBg} alt="" className="absolute z-1 top-58 left-24 lg:left-44 2xl:left-94 2xl:top-74 h-120 max-lg:hidden" />
                </div>
            </div>
            <img src={leftHand} alt="" className="leftHand-anime absolute z-1  top-[33%] max-lg:hidden size-[480px] 2xl:size-[520px] -left-20" />
            <img src={rightHand} alt="" className="leftRight-anime absolute z-1 top-[33%] max-lg:hidden size-[480px] 2xl:size-[520px] -right-20" />

        </div>
    )
}

export default Header;



