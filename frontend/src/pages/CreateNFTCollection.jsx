import Navbar from "../components/Navbar"

import { Link } from "react-router-dom"
import backdooricon from '../assets/SellMethod/icons/bdicon.webp'
import personIMG from '../assets/SellMethod/images/personImage.webp'
import { useState } from "react"


const CreateNFTCollection = () => {

    const [file, setFile] = useState(personIMG);
    function handleImage(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center relative z-100">
                <div className="container max-sm:px-5 sm:px-12 lg:px-20  mx-auto pt-20">
                    {/* main content div */}
                    <div className="flex gap-10 py-5 max-lg:flex-col">

                        {/* left div*/}
                        <div className="lg:max-w-[400px] flex flex-col gap-10 max-lg:items-center max-lg:w-full p-0.5">

                            <div className="bg-inverted w-fit px-4 rounded-2xl drop-shadow-md  py-2 items-center" >
                                <Link to="/" className="flex gap-2">
                                    <img src={backdooricon} alt="" />
                                    <h5 className="font-secondary"> Back</h5>
                                </Link>
                            </div>

                            <img src={file} alt="" className=" drop-shadow-md border-12 border-inverted rounded-4xl h-[250px] w-[320px] mt-2" />

                            <div className="border-2 border-boorder bg-inverted w-fit px-4 rounded-2xl py-2 items-center" >

                                <label htmlFor="choose-img" className="font-secondary" >Choose file </label>
                                
                                <input type="file" id="choose-img" onChange={handleImage} style={{ display: 'none' }} />

                            </div>
                        </div>

                        {/* Right div */}
                        <div className="w-full flex flex-col gap-10 p-0.5">

                            {/*  Single NFT */}
                            <div className="bg-inverted w-fit px-4 rounded-2xl border-3 border-boorder  py-2 items-center" >
                                <Link to="/create-collection-page">
                                    <h5 className="font-secondary text-para-light"> Collection</h5>
                                </Link>
                            </div>


                            {/* inner content */}
                            <div className="bg-inverted rounded-xl drop-shadow-md w-full px-6 md:px-24 flex flex-col gap-4 font-secondary">


                                {/* Form */}

                                <form action="" className="flex flex-col gap-4">

                                    <h2 className="uppercase text-center pt-5">create a collection</h2>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name"><h5 className="font-medium">Collection Name*</h5></label>
                                        <input type="text" required id="name" placeholder="Name your Collection" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="token"><h5 className="font-medium">Token Sybmol*</h5></label>
                                        <input type="text" required id="token" placeholder="$ CGPT, for example" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                    </div>

                                    {/* desc */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="description"><h5 className="font-medium capitalize">Description</h5></label>
                                        <div>
                                            <p className="pb-1"> The description will be included on the item's detail page underneath its image.</p>
                                            <textarea id="description" rows={'4'} placeholder="Provide a detailed description of your item" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                        </div>
                                    </div>



                                    {/* Minit button */}
                                    <div className="pt-10 flex justify-end font-light font-secondary pb-10 cursor-pointer ">
                                        <button className="background-grad text-inverted px-4 py-2 capitalize">
                                            <p className="font-medium">
                                                Create
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

export default CreateNFTCollection;