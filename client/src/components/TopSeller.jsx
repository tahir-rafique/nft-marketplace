import { TopSellerData } from "../constant/data"
import elicpRight from '../assets/TopSeller/images/topSellerRightElicp.webp'
import gridLeft from "../assets/TopSeller/images/topSellerGridLeft.webp"
import { Link, useNavigate } from "react-router-dom"

const TopSeller = () => {

    const navigate = useNavigate()
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-4 lg:gap-10 relative z-50">
                <div className="flex justify-between items-center gap-2">
                    <h2>TOP SELLER</h2>
                    <Link to="/top-seller-page" className="cursor-pointer">
                        <h4 className="font-secondary text-main font-medium">View all</h4>
                    </Link>
                </div>
                <div className="grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 gap-10 lg:py-10 ">
                    {
                        TopSellerData.map((item, index) => (

                            <div key={index}
                                onClick={()=>navigate('/seller-collection-page')}
                                className="flex max-md:justify-center items-center gap-2 relative cursor-pointer">
                                <div className="relative py-2 px-2">
                                    <img src={item.icon} alt="" className="absolute right-1 top-1 size-6" />
                                    <img src={item.url} alt="" />
                                </div>

                                <div>
                                    <h4 className="font-secondary font-bold">{item.name}</h4>
                                    <p className="text-para-light font-bold">{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <img src={elicpRight} alt="" className="size-120  absolute right-0 top-2 max-lg:hidden" />
            <img src={gridLeft} alt="" className="size-90 max-sm:hidden absolute left-0 top-30" />

        </div>
    )
}

export default TopSeller;