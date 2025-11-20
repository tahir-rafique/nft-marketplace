import Navbar from "../components/Navbar"
import backdooricon from '../assets/SellMethod/icons/bdicon.webp'
import { Link, useNavigate } from "react-router-dom"
import artImage from '../assets/CreateNFT/icons/artImage.webp'
import artimg2 from '../assets/CreateNFT/icons/art2.webp'
import artimg3 from '../assets/CreateNFT/icons/art3.webp'
import artimg4 from '../assets/CreateNFT/icons/art4.webp'




function ChooseCollection() {

    const navigate = useNavigate('/create-nft')
    return (
        <>
            <Navbar />
            <div className="flex justify-center relative z-100">
                <div className="container max-sm:px-5 sm:px-10 lg:px-20  mx-auto pt-5 lg:pt-20">

                    <div className="flex gap-10 py-5 max-lg:flex-col">

                        {/* left div*/}
                        <div className="lg:max-w-[600px] min-w-[120px] flex flex-col gap-10 max-lg:items-center max-lg:w-full p-0.5">

                            <div className="bg-inverted  px-4 rounded-2xl drop-shadow-md  py-2 items-center" >
                                <Link to="/create-nft" className="flex gap-2">
                                    <img src={backdooricon} alt="" />
                                    <h5 className="font-secondary"> Back</h5>
                                </Link>
                            </div>

                        </div>

                        {/* Right div */}
                        <div className="w-full flex flex-col gap-10 p-0.5">
                            {/* inner content */}
                            <div className="bg-inverted rounded-xl drop-shadow-md w-full px-6 md:px-20 flex flex-col gap-4 font-secondary">
                                {/* Form */}
                                <form action="" className="flex flex-col gap-4" onSubmit={e => { e.preventDefault() }}>

                                    <h2 className="uppercase text-center py-5">Choose collection</h2>

                                    {/* Choose Collection */}
                                    <div className="flex flex-col items-center gap-5">

                                        <div className="bg-inverted w-[65%] max-sm:w-full border-3 border-boorder rounded-xl flex gap-2 items-center py-2 pl-2 relative">
                                            <div className="bg-muted rounded-xl">
                                                <img src={artImage} alt="" />

                                            </div>
                                            <div className=" w-full">
                                                <h6>Wonderful Artwork</h6>
                                                <p className="text-para-light">Items <b className="text-secondary"> 1.5k </b></p>

                                                <button className="cursor-pointer absolute -right-8 rounded-xl top-[50%] translate-[-50%] bg-boorder   px-5 py-2 hover:bg-main hover:text-inverted">
                                                    <h6>Select</h6>
                                                </button>
                                            </div>
                                        </div>


                                        {/* 2nd */}
                                        <div className="bg-inverted w-[65%] max-sm:w-full  border-3 border-boorder rounded-xl flex gap-2 items-center py-2 pl-2 relative">
                                            <div className="bg-muted rounded-xl">
                                                <img src={artimg2} alt="" />

                                            </div>
                                            <div>
                                                <h6>Wonderful Artwork</h6>
                                                <p className="text-para-light">Items <b className="text-secondary"> 1.5k </b></p>

                                                <button className="cursor-pointer absolute -right-8 rounded-xl top-[50%] translate-[-50%] bg-boorder px-5 py-2 hover:bg-main hover:text-inverted">
                                                    <h6>Select </h6>
                                                </button>
                                            </div>
                                        </div>


                                        {/* 3rd */}
                                        <div className="bg-inverted w-[65%] max-sm:w-full border-3 border-boorder rounded-xl flex gap-2 items-center py-2 pl-2 relative">
                                            <div className="bg-muted rounded-xl">
                                                <img src={artimg3} alt="" />

                                            </div>
                                            <div>
                                                <h6>Wonderful Artwork</h6>
                                                <p className="text-para-light">Items <b className="text-secondary"> 1.5k </b></p>


                                                <button className="cursor-pointer absolute -right-8 rounded-xl top-[50%] translate-[-50%] bg-boorder px-5 py-2 hover:bg-main hover:text-inverted">
                                                    <h6>Select </h6>
                                                </button>
                                            </div>
                                        </div>

                                        {/* 4th */}
                                        <div className="bg-inverted w-[65%] max-sm:w-full border-3 border-boorder rounded-xl flex gap-2 items-center py-2 pl-2 relative">
                                            <div className="bg-muted rounded-xl">
                                                <img src={artimg4} alt="" />

                                            </div>
                                            <div>
                                                <h6>Wonderful Artwork</h6>
                                                <p className="text-para-light">Items <b className="text-secondary"> 1.5k </b></p>


                                                <button className="cursor-pointer absolute -right-8 rounded-xl top-[50%] translate-[-50%] bg-boorder px-5 py-2 hover:bg-main hover:text-inverted">
                                                    <h6>Select </h6>
                                                </button>
                                            </div>
                                        </div>

                                    </div>



                                    {/* Next button */}
                                    <div className="pt-10 flex justify-end font-light font-secondary pb-10 cursor-pointer ">
                                        <button className="background-grad text-inverted px-4 py-2 capitalize cursor-pointer" onClick={()=>navigate('/create-nft')}>
                                            <p className="font-medium">
                                                Next
                                            </p>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChooseCollection
