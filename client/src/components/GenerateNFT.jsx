import IconGenerate from "../assets/GenerateNFT/icons/IconGenerat.svg"

import g1 from "../assets/GenerateNFT/images/g1.webp"
import g2 from "../assets/GenerateNFT/images/g2.webp"
import g3 from "../assets/GenerateNFT/images/g3.webp"
import g4 from "../assets/GenerateNFT/images/g4.webp"
import g5 from "../assets/GenerateNFT/images/g5.webp"
import g6 from "../assets/GenerateNFT/images/g6.webp"
import g7 from "../assets/GenerateNFT/images/g7.webp"
import g8 from "../assets/GenerateNFT/images/g8.webp"
import ellipce from '../assets/GenerateNFT/images/generateCenterEllicpe.webp'

import leftGrid from "../assets/GenerateNFT/images/leftGridgenerate.webp"
import vector from '../assets/GenerateNFT/icons/vectorimg.webp'

const GenerateNFT = () => {
    return (
        <div className="flex justify-center">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10 relative z-10">
                <div className="flex flex-col justify-center items-center gap-2 relative">
                    {/* main content */}
                    <h2 className="text-center uppercase max-lg:leading-none">Turn your imagination <br /> into digital Asset </h2>

                    <div className="max-lg:py-10 py-64 lg:py-84 relative w-full flex justify-center p-0.5">
                        <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-5 bg-inverted drop-shadow-md relative z-40 w-full max-w-[800px]">
                            <input className="font-secondary text-light w-full max-w-[600px] outline-none " placeholder="Fantasy Creature holding a sword......." />
                            <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer flex gap-1 right-4 z-50 ">
                                <h6>Generate</h6>
                                <img src={IconGenerate} alt="no img" />
                            </a>
                        </div>
                        {/* elicp */}
                        <img src={ellipce} alt="" className="absolute  left-[50%] translate-[-50%] top-[50%] z-1 size-120 max-lg:hidden" />
                    </div>

                    {/* Vectors Image */}

                    <img src={vector} alt="" className="max-xl:hidden absolute top-60 max-2xl:size-[70%]" />

                    {/* moneky skatboard */}
                    <img src={g1} alt="" className="max-lg:hidden absolute top-40 left-30 z-10" />

                    {/* eagale orange */}

                    <img src={g2} alt="" className="max-lg:hidden  absolute top-145  left-0 z-10" />


                    {/* Gril */}

                    <img src={g3} alt="" className="max-lg:hidden absolute top-170  left-70 z-10" />

                    {/* rbg Cat */}

                    <img src={g4} alt="" className="max-lg:hidden absolute bottom-145  right-10 z-20" />

                    {/* Big monk with banana */}

                    <img src={g5} alt="" className="max-lg:hidden absolute bottom-70  right-0 z-20" />


                    {/*  dog */}

                    <img src={g6} alt="" className="max-lg:hidden absolute top-40  right-85 z-10" />

                    {/*  eagel purple */}

                    <img src={g7} alt="" className="max-lg:hidden absolute bottom-15  right-60 z-9" />

                    {/*  cartoon */}

                    <img src={g8} alt="" className="max-lg:hidden absolute top-90  left-10 z-10" />


                </div>
            </div>

            <img src={leftGrid} alt="" className="left-0 absolute z-1 max-lg:hidden" />
        </div>



    )
}

export default GenerateNFT
