import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import IconGenerate from "../assets/GenerateNFT/icons/IconGenerat.svg"

import banner from '../assets/CreateNFTpage/images/createNFTbanner.webp'

import addicon from '../assets/CreateNFTpage/images/addicon.webp'
import downline from '../assets/CreateNFTpage/icons/downline.webp'
import copyimg from '../assets/CreateNFTpage/images/copyimg.webp'
import { CreateNFTPageData, } from '../constant/data';
import { useEffect, useRef, useState } from 'react';

import { Modal } from 'antd';
import lineVector from "../assets/Modal/icons/line-vector.svg"
import sicon from '../assets/CreateNFTpage/icons/sicon.webp'
import simg1 from '../assets/CreateNFTpage/icons/simg1.webp'
import simg2 from '../assets/CreateNFTpage/icons/simg2.webp'
import simg3 from '../assets/CreateNFTpage/icons/simg3.webp'
import simg4 from '../assets/CreateNFTpage/icons/simg4.webp'
import simg5 from '../assets/CreateNFTpage/icons/simg5.webp'



const CreateNFTpage = () => {


    const [count, setcount] = useState(1)

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


    // Single NFT dropdown

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

    return (
        <>
            <Navbar />
            <div className='flex justify-center relative z-50'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 pt-10'>

                    {/* Hero Section */}
                    <div className='hero-wraper flex flex-col gap-4'>

                        <div className='flex gap-8 justify-center '>
                            <h2>Create your own <span className='text-main'>masterpiece </span> </h2>

                        </div>
                        <img src={banner} alt="" />
                        <div className='flex justify-center'>
                            <p className='capitalize text-para-light'>get onboard and earn money like a pro</p>
                        </div>

                        <div className='p-0.5'>
                            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4 py-3 md:py-5 bg-inverted drop-shadow-md relative z-40 w-full max-w-[800px] cursor-pointer">
                                <input className="font-secondary text-light w-full max-w-[600px] outline-none " placeholder="Fantasy Creature holding a sword..." />
                                <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted max-md:px-2 px-4 py-2 shrink-0 cursor-pointer flex gap-1 right-4 z-50 ">
                                    <h6>Generate</h6>
                                    <img src={IconGenerate} alt="no img" />
                                </a>
                            </div>
                        </div>

                        <div className='w-full max-w-[600px]  mx-auto flex max-md:gap-6 gap-2 justify-between items-center max-sm:flex-col '>

                            {/* Single NFT Dropdown */}
                            <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex justify-center items-center py-2 px-2">

                                <div ref={dropdownRef} className="inline-block " >
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex font-secondary text-para-light items-center gap-2 cursor-pointer justify-center">
                                        <span>
                                            <h6 className='pl-2'>
                                                Single NFT
                                            </h6>
                                        </span>
                                        <img src={downline} alt="" className='size-4' />
                                    </button>

                                    {isOpen && (
                                        <div className="absolute mt-3 z-50  w-33 bg-inverted border-2 border-muted rounded-lg shadow-lg ">

                                            <p className='py-2 text-para-light w-full hover:bg-boorder hover:text-secondary px-2'>Single NFT mint</p>
                                            <p className='py-2 text-para-light w-full hover:bg-boorder hover:text-secondary px-2'>Multi NFT mint</p>

                                        </div>
                                    )}
                                </div>

                            </div>


                            {/* Supply */}

                            <div className="flex font-secondary text-para-light items-center gap-2 cursor-pointer">
                                <h6>Supply</h6>
                                <div className='border-2 border-boorder  rounded-xl py-1 bg-inverted px-4 cursor-pointer flex items-center gap-4'>
                                    <h6> {count}</h6>
                                    <div>
                                        <img src={downline} alt="" className='rotate-180 size-4' onClick={() => { if (count < 25) { setcount(count + 1) } }} />
                                        <img src={downline} alt="" className='size-4' onClick={() => { if (count > 0) { setcount(count - 1) } }} />
                                    </div>

                                </div>
                            </div>



                            {/* Add Styles */}

                            <div className=" border-2 font-secondary border-boorder  rounded-xl gap-2 text-para-light cursor-pointer">
                                <button
                                    className='flex items-center gap-2 py-2 bg-inverted px-4 cursor-pointer'
                                    onClick={showModal}
                                >
                                    <h6>Add Styles</h6>
                                    <img src={addicon} alt="" className='size-5.5 text-para-light' />
                                </button>
                            </div>

                            {/* Ant-Desing Modal */}

                            <div className="ant-modal-main absolute">
                                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modal-Styles-cnftp'>
                                    <div className="flex flex-col items-center gap-2 pt-4">
                                        <div className="modal-top-section flex flex-col items-center gap-1 pb-2">
                                            <h3 className="ant-main-text">Select a style</h3>
                                            <img src={lineVector} alt="" />
                                        </div>


                                        {/* section 2 */}
                                        {/* 📌 have to Change this Selection of Styles */}
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

                    {/* Prompt Wraper Section */}
                    <div className='prompt-wraper py-5 lg:py-24'>
                        <h2 className=' capitalize pb-5 max-md:text-center'>Prompt examples</h2>
                        <div className="grid max-xl:grid-cols-1 grid-cols-2 gap-8 px-[5%]">
                            {CreateNFTPageData.map((data, index) => (
                                <div className='border-2 border-boorder rounded-xl p-4 bg-inverted flex max-sm:flex-col items-center gap-4 sm:gap-10 relative' key={index}>

                                    <div className='image-wraper h-fit'>
                                        <img src={data.url} alt="" className='w-full' />
                                    </div>

                                    <img src={copyimg} alt="" className='absolute max-sm:hidden  top-[44%] sm:top-[35%] max-md:left-54 left-70 xl:left-54 2xl:left-70 z-100' />

                                    <div className='max-sm:max-w-[80%] sm:max-w-[40%] md:h-full  flex flex-col gap-2  z-10'>
                                        <h4>{data.title}</h4>
                                        <p className='text-para-light max-sm:text-xs'>{data.descprtion}</p>
                                    </div>
                                </div>
                            ))}

                        </div>


                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default CreateNFTpage;