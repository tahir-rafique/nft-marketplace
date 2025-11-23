import { AuctionData } from "../constant/data";
import exploreArrow from "../assets/Auction/icons/explorArrow.svg";
import { Link } from "react-router-dom";

const RecentSold = () => {
    return (
        <div className="flex justify-center">
            <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 ">

                <div className="flex flex-col max-sm:items-center gap-6 lg:gap-14">
                    <h2 className="">Auction </h2>
                    {/* Cards-wraper */}
                    <div className='cards-wraper grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {
                            AuctionData.map((item, index) => (
                                <div key={index} className='p-1 h-full cursor-pointer'>
                                    <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1 2xl:pb-4" key={index}
                                        style={{
                                            backgroundImage: `url(${ item.frame })`, backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <div className='flex flex-col gap-3 relative'>

                                            <div className="flex gap-2 items-center w-full">
                                                <img src={item.personImg} alt="" />
                                                <div>
                                                    <h6 className="font-light">{item.name}</h6>
                                                    <p className='text-xs text-para-light font-light'>{item.username}</p>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />
                                                <div className="fixed text-s left-[50%] translate-[-50%] top-[55%] font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-secondary font-secondary rounded-md bg-sold ">
                                                    3:06:59:18
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Auction Page  Link */}
                    <div className="flex justify-center">
                        <Link className="cursor-pointer navbtn-size  navbtn-border background-grad text-inverted px-5 py-2 font-medium flex gap-2 items-cente" to="/auction" >Explore More <img src={exploreArrow} alt="" /></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default RecentSold;

