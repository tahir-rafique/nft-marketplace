import { Link } from "react-router-dom"
import backdooricon from '../assets/SellMethod/icons/bdicon.webp'
import personIMG from '../assets/SellMethod/images/personImage.webp'
import Navbar from "../components/Navbar"
import addIcon from '../assets/CreateNFT/icons/addicon.webp'
import artImage from '../assets/CreateNFT/icons/artImage.webp'
import Switch from "../components/Switch"
import { Modal } from "antd"


import lineVector from "../assets/Modal/icons/line-vector.svg"

import sicon from '../assets/CreateNFTpage/icons/sicon.webp'
import simg1 from '../assets/CreateNFTpage/icons/simg1.webp'
import simg2 from '../assets/CreateNFTpage/icons/simg2.webp'
import simg3 from '../assets/CreateNFTpage/icons/simg3.webp'
import simg4 from '../assets/CreateNFTpage/icons/simg4.webp'
import simg5 from '../assets/CreateNFTpage/icons/simg5.webp'
import { useState } from "react"

const CreateNFT = () => {

    // Ant-Desing Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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

                            <img src={personIMG} alt="" className=" drop-shadow-md border-12 border-inverted rounded-4xl w-[300px]" />
                        </div>

                        {/* Right div */}
                        <div className="w-full flex flex-col gap-10 p-0.5">

                            {/*  Single NFT */}
                            <div className="bg-inverted w-fit px-4 rounded-2xl border-3 border-boorder  py-2 items-center" >
                                <Link to="/create-single-nft">
                                    <h5 className="font-secondary text-para-light"> Single NFT</h5>
                                </Link>
                            </div>


                            {/* inner content */}
                            <div className="bg-inverted rounded-xl drop-shadow-md w-full px-6 md:px-24 flex flex-col gap-4 font-secondary">


                                {/* Form */}

                                <form action="" className="flex flex-col gap-4">

                                    <h2 className="uppercase text-center pt-5">Mint your nft</h2>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name"><h5 className="font-medium">Name your NFT*</h5></label>
                                        <input type="text" required id="name" placeholder="Name your NFT" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="token"><h5 className="font-medium">Token Sybmol*</h5></label>
                                        <input type="text" required id="token" placeholder="$ CGPT, for example" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                    </div>

                                    {/* descritions */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="description"><h5 className="font-medium capitalize">Description</h5></label>
                                        <div>
                                            <p className="pb-1"> The description will be included on the item's detail page underneath its image.</p>
                                            <textarea id="description" rows={'4'} placeholder="Provide a detailed description of your item" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                                        </div>
                                    </div>


                                    {/* Choose Collection */}
                                    <div className="flex flex-col gap-2">

                                        <div>
                                            <div className="flex justify-between">
                                                <h5 className="font-medium">Choose Collection</h5>

                                                <div className="cursor-pointer">

                                                    <Link to='/choose-existing-collection'>
                                                        <h6 className="underline text-para-light">Choose From Existed </h6>

                                                    </Link>

                                                </div>

                                            </div>
                                            <p className="text-para-light capitalize">This is the collection where your item will appear</p>
                                        </div>


                                        <div className="flex gap-6">

                                            {/* Choose div one  */}
                                            <div className="bg-inverted w-[50%]  border-3 border-boorder rounded-xl  py-2 pl-2">
                                                <a href="/create-nft-collection " className="flex items-center gap-2">
                                                    <div className="bg-muted p-4 rounded-xl">
                                                        <img src={addIcon} alt="" />
                                                    </div>

                                                    <div>
                                                        <h6>Create new collection</h6>
                                                        <p className="text-para-light">Type to create</p>
                                                    </div>
                                                </a>
                                            </div>


                                            {/* Choose div tow */}
                                            <div className="bg-inverted w-[50%]  border-3 border-boorder rounded-xl flex gap-2 items-center py-2 pl-2">
                                                <div className="bg-muted rounded-xl">
                                                    <img src={artImage} alt="" />

                                                </div>

                                                <div>
                                                    <h6>Wonderful Artwork</h6>
                                                    <p className="text-para-light">Items <b className="text-secondary"> 1.5k </b></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/*  Add Traits */}
                                    <div className="flex flex-col gap-1">
                                        <h5 className="font-medium">Add Traits</h5>
                                        <h6>Traits describe attributes of your item. They appear as filters inside your collection page and
                                            are also listed out inside your item page.
                                        </h6>

                                        {/* Edit input */}
                                        <div>

                                        </div>

                                        <hr className="my-5 text-boorder" />

                                        {/*  Add Traits  button*/}
                                        <div className="bg-inverted w-fit px-4 rounded-2xl border-3 border-boorder  py-2 items-center" >
                                            <Link onClick={showModal} className="flex items-center gap-2">
                                                <h5 className="font-secondary text-para-light"> Add Traits</h5>
                                                <img src={addIcon} alt="" />
                                            </Link>


                                            {/* Ant-Desing Modal */}
                                            <div className="ant-modal-main absolute">
                                                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modal-Styles-cnftp'>
                                                    <div className="flex flex-col items-center gap-2 pt-4">
                                                        <div className="modal-top-section flex flex-col items-center gap-1 pb-2">
                                                            <h3 className="ant-main-text">Select a style</h3>
                                                            <img src={lineVector} alt="" />
                                                        </div>


                                                        {/* section 2 */}
                                                        {/* 📌 have to Change this */}
                                                        <div className="modal-bottom-section flex flex-col gap-2 w-full" >
                                                            <div className='w-full flex gap-4'>
                                                                <div className=' w-[50%] bg-muted p-1 rounded-xl flex flex-col items-center justify-center gap-1 '>
                                                                    <img src={sicon} alt="" className='size-10' />
                                                                    <p>None</p>
                                                                </div>
                                                                <div className=' w-[50%] bg-muted p-1 rounded-xl flex flex-col gap-1 hover:bg-main relative'>
                                                                    <img src={simg1} alt="" />

                                                                    <p className='hover:bg-[#00000060] absolute left-[50%] translate-[-50%] top-[40%] px-10.5 rounded-xl py-13.5 font-black text-inverted z-50 opacity-0 hover:opacity-100'>Selected</p>
                                                                    <button className='bg-inverted mt-1.5 py-2 flex justify-center rounded-xl drop-shadow-md font-medium'> Cartoon</button>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        {/* section 3 */}
                                                        <div className="modal-bottom-section flex flex-col gap-2 w-full">
                                                            <div className='w-full flex gap-4'>

                                                                {/* 📌 Chagne this */}
                                                                <div className=' w-[50%] bg-muted p-1 rounded-xl flex flex-col gap-1 hover:bg-main relative cursor-pointer'

                                                                >
                                                                    <p className='hover:bg-[#00000060] absolute left-[50%] translate-[-50%] top-[40%] px-10.5 rounded-xl py-13.5 font-black text-inverted z-50 opacity-0 hover:opacity-100'>Selected</p>


                                                                    <img src={simg2} alt="" className='hover:blur-s' />
                                                                    <button className='bg-inverted py-2 mt-1.5 flex justify-center rounded-xl drop-shadow-md font-medium'>3D Model</button>

                                                                </div>


                                                                <div className=' w-[50%] bg-muted p-1 rounded-xl flex flex-col gap-1 hover:bg-main relative '>
                                                                    <img src={simg3} alt="" />

                                                                    <p className='hover:bg-[#00000060] absolute left-[50%] translate-[-50%] top-[40%] px-10.5 rounded-xl py-13.5 font-black text-inverted z-50 opacity-0 hover:opacity-100'>Selected</p>

                                                                    <button className='bg-inverted mt-1.5 py-2 flex justify-center rounded-xl drop-shadow-md font-medium'>Anime Style</button>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        {/* section 4 */}
                                                        <div className="modal-bottom-section flex flex-col gap-2 w-full ">
                                                            <div className='w-full flex gap-4'>


                                                                <div className=' w-[50%] bg-muted p-1 rounded-xl flex flex-col gap-1 hover:bg-main relative'>
                                                                    <img src={simg4} alt="" />

                                                                    <p className='hover:bg-[#00000060] absolute left-[50%] translate-[-50%] top-[40%] px-10.5 rounded-xl py-13.5 font-black text-inverted z-50 opacity-0 hover:opacity-100'>Selected</p>

                                                                    <button className='bg-inverted mt-1.5 py-2 flex justify-center rounded-xl drop-shadow-md font-medium'>Fantasy Art</button>
                                                                </div>

                                                                <div className=' w-[50%] bg-muted p-1 rounded-xl flex flex-col gap-1 hover:bg-main relative'>
                                                                    <img src={simg5} alt="" />

                                                                    <p className='hover:bg-[#00000060] absolute left-[50%] translate-[-50%] top-[40%] px-10.5 rounded-xl py-13.5 font-black text-inverted z-50 opacity-0 hover:opacity-100'>Selected</p>

                                                                    <button className='bg-inverted mt-1.5 py-2 flex justify-center rounded-xl drop-shadow-md font-medium'>Realistic</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Royalities */}
                                    <div>
                                        <h5 className="font-medium">Royalties</h5>
                                        {/* switch button    */}
                                        <Switch />
                                    </div>

                                    {/* Minit button */}
                                    <div className="pt-10 flex justify-end font-light font-secondary pb-10 cursor-pointer ">
                                        <button className="background-grad text-inverted px-4 py-2 capitalize">
                                            <p className="font-medium">
                                                Minit NFT
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

export default CreateNFT