import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import heroImgNFT from './../assets/NFTdetail/images/heroImageNFT.webp';
import watchIco from "../assets/NFTdetail/icons/watch.webp";
import { useState, useRef, useEffect } from "react";
import { NFTdetailData, NFTdetailMoreCollectionData, NFTdetailsDescprtion, NFTdetailsListing, NFTitemActivityData, NFToffterData, NFTtraitsData, } from "../constant/data";
import lineDown from '../assets/NFTdetail/icons/down_line.webp'
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";


const NFTdetailpixacio = () => {

    const [openItemActivity, setOpenItemActivity] = useState(null);
    const dropdownRef = useRef(null);
    const [openListing, setOpenListing] = useState(null);

    const [openOffer, setOpenOffer] = useState(null);
    const [openDesc, setOpenDesc] = useState(null);
    const [openTratis, setOpenTratis] = useState(null);
    const [openDetails, setOpenDetails] = useState(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenItemActivity(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // listing  Button handeler
    const handleListing = (index) => {
        if (openListing === index) {
            setOpenListing(null);
        } else {
            setOpenListing(index);
        }
    };


    // Offerr Button handeler

    const handleOffer = (index) => {
        if (openOffer === index) {
            setOpenOffer(null);
        } else {
            setOpenOffer(index);
        }
    };

    // Descriotn Button handeler

    const handleDescrption = (index) => {
        if (openDesc === index) {
            setOpenDesc(null);
        } else {
            setOpenDesc(index);
        }
    };

    // Descriotn Button handeler

    const handleTratis = (index) => {
        if (openTratis === index) {
            setOpenTratis(null);
        } else {
            setOpenTratis(index);
        }
    };

    // Details Button handeler

    const handleDetails = (index) => {
        if (openDetails === index) {
            setOpenDetails(null);
        } else {
            setOpenDetails(index);
        }
    };


    // Items Activity Button Handler
    const handleItemsActivity = (index) => {
        if (openItemActivity === index) {
            setOpenItemActivity(null);
        } else {
            setOpenItemActivity(index);
        }
    };


    return (
        <>
            <Navbar />

            <div className='flex justify-center'>
                <div className='container mx-auto bg-frame max-sm:px-5 sm:px-12 lg:px-20 pt-5 lg:pt-20 pb-4'>

                    {/* Hero Wraper */}
                    <div className='xl:flex-row flex flex-col  gap-10 justify-between'>

                        {/* hero Left Wraper*/}

                        <div className="hero-left p-1 flex-col gap-4  flex justify-center">

                            {/* hero image */}
                            <div className='hero-image-wraper drop-shadow-md p-1 flex max-xl:justify-center'>
                                <img src={heroImgNFT} alt="" className=' bg-[#fff] p-3 rounded-2xl' />
                            </div>


                            {/* Description */}
                            <div className="descrption-wraper w-full drop-shadow-md">
                                {NFTdetailsDescprtion.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleDescrption(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openDesc === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md text-excp  text-para-light ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp text-para-light">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openDesc === index && (
                                            <div className='border-t-2 border-boorder py-2 px-4'>
                                                <div className='max-w-[420px] flex flex-col gap-1'>

                                                    <p className='text-excp text-para-light'>By <b className='text-secondary'>Stell Noav</b></p>
                                                    <p className='w-full text-para-light'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu feugiat felis, in maximus neque. Morbi rutrum est interdum, suscipit erat et, mattis ante. Donec at diam pulvinar, pulvinar orci vitae, luctus mauris.
                                                    </p>
                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Traits */}
                            <div className="tratis-wraper w-full drop-shadow-md">
                                {NFTtraitsData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleTratis(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openTratis === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md text-excp text-para-light ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp  text-para-light">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openTratis === index && (
                                            <div className='border-t-2 border-boorder py-2'>
                                                <div className=''>

                                                    <div className='grid grid-cols-3 gap-4 px-4'>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"><b>Founder edition</b> 52%</p>

                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>




                                                    </div>
                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>


                        {/* Hero Right Wraper */}

                        <div className="hero-right flex flex-col items-center  2xl:w-[55%] gap-4">

                            {/* Owner */}
                            <div className='owner-wraper w-full'>
                                <h2>Pixacio</h2>
                                <h5 className='font-secondary text-para-light'>Owned by <b className='text-secondary'>  Stella Nova</b></h5>
                            </div>

                            {/* Sales */}
                            <div className='sales-wraper bg-inverted rounded-md drop-shadow-md w-full py-2 flex flex-col gap-2 p-1'>

                                <div className='border-b-2 border-boorder px-4 py-2 flex gap-2 items-center'>
                                    <img src={watchIco} alt="" />
                                    <h5 className='text-excp font-secondary text-para-light '>Sale ends 18 November 2023 at 8:47 am </h5>
                                </div>

                                <div className='flex flex-col gap-2 px-4'>
                                    <div className=' py-2'>
                                        <p className='text-para-light'>Current price</p>
                                        <h3 className='font-secondary font-medium'>5.001 FRY</h3>
                                    </div>
                                    <div className='flex gap-6 pb-2'>
                                        <div className='flex justify-center w-full'>
                                            <button className='w-full navbtn-size border-2 border-boorder text-secondary navbtn-border px-4 py-2 cursor-pointer font-medium'>
                                                Buy now
                                            </button>
                                        </div>

                                        <div className='w-full flex justify-center'>
                                            <button className='navbtn-size  navbtn-border background-grad text-inverted px-5 py-2 cursor-pointer w-full'>
                                                Make offer
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Listing */}
                            <div className="listing-wraper w-full drop-shadow-md p-1">
                                {NFTdetailsListing.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleListing(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openListing === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md  text-para-light text-excp ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-para-light text-excp ">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openListing === index && (
                                            <div className='border-t-2 w-full border-boorder py-2 px-4' onClick={(e) => e.stopPropagation()}>
                                                <div className="grid grid-cols-5 w-full gap-2 py-3">
                                                    <p className='text-secondary '> <b>{item.priceTag}</b></p>
                                                    <p className='text-secondary '> <b>{item.usdpriceTag}</b></p>
                                                    <p className='text-secondary '> <b>{item.quantityTag}</b></p>
                                                    <p className='text-secondary '> <b>{item.fromTag}</b></p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />
                                                    {/*  */}
                                                    <p className='text-para-light'> {item.price}</p>
                                                    <p className='text-para-light'> {item.usdpirce}</p>
                                                    <p className='text-para-light'> {item.quantity}</p>
                                                    <p className='text-para-light'> {item.from}</p>

                                                    <button className={`background-grad text-inverted  px-2 py-1 w-fit cursor-pointer font-secondary `}>
                                                        Buy
                                                    </button>

                                                </div>

                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Offer */}
                            <div className="offer-wraper w-full drop-shadow-md p-1">
                                {NFToffterData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleOffer(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openOffer === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md text-para-light text-excp ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-para-light text-excp">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openOffer === index && (
                                            <div className='border-t-2 w-full border-boorder py-2 px-4'>
                                                <div className="grid grid-cols-5 w-full gap-2">
                                                    <p className='text-secondary  '> <b>{item.price}</b></p>
                                                    <p className='text-secondary  '> <b>{item.usdprice}</b></p>
                                                    <p className='text-secondary  '> <b>{item.quantity}</b></p>
                                                    <p className='text-secondary  '> <b>{item.fooldif}</b></p>
                                                    <p className='text-secondary    '> <b>{item.from}</b></p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />


                                                    {/*  */}
                                                    <p className='text-secondary'> <b> {item.p1}</b></p>
                                                    <p className='text-para-light'> {item.usdp1}</p>
                                                    <p className='text-para-light'>{item.q1}</p>
                                                    <p className='text-para-light'>{item.fd1}</p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />


                                                    {/*  */}
                                                    <p className='text-secondary'> <b> {item.p1}</b></p>
                                                    <p className='text-para-light'> {item.usdp1}</p>
                                                    <p className='text-para-light'>{item.q1}</p>
                                                    <p className='text-para-light'>{item.fd1}</p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />

                                                    {/*  */}
                                                    <p className='text-secondary'> <b> {item.p1}</b></p>
                                                    <p className='text-para-light'> {item.usdp1}</p>
                                                    <p className='text-para-light'>{item.q1}</p>
                                                    <p className='text-para-light'>{item.fd1}</p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />



                                                </div>


                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Details */}
                            <div className="details-wraper flex justify-start w-full drop-shadow-md p-1">
                                {NFTdetailData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl  py-1.5 px-1 cursor-pointer w-full bg-inverted"
                                        onClick={() => handleDetails(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center m">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openDetails === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp text-para-light ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp  text-para-light">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openDetails === index && (
                                            <div className='border-t-2 border-boorder py-2 '>
                                                <div className='w-full'>
                                                    <div className='flex flex-col gap-3 w-full px-4'>

                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Contract Address</p>
                                                            <p>0x5848...1713</p>
                                                        </div>

                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Token ID</p>
                                                            <p>7926</p>
                                                        </div>



                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Token Standard</p>
                                                            <p>ERC-721</p>
                                                        </div>



                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Chain</p>
                                                            <p>Algorand</p>
                                                        </div>

                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Creator Earnings</p>
                                                            <p>6.5%</p>
                                                        </div>

                                                    </div>

                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>


                    {/* Items Activity Wraper*/}
                    <div className='py-10 drop-shadow-md'>
                        <div className="w-full" ref={dropdownRef}>
                            {NFTitemActivityData.map((item, index) => (
                                <div
                                    key={index}
                                    className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                    onClick={() => handleItemsActivity(index)
                                    }
                                >
                                    <div className="flex gap-3 items-center w-full">
                                        <div className="text-2xl flex items-center gap-2 w-full">
                                            {openItemActivity === index ?
                                                <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                    <img src={item.url} alt="" />

                                                    <h4 className="font-secondary w-full rounded-md text-excp  text-secondary ">{item.title}</h4>
                                                    <img src={lineDown} alt="" />
                                                </div>
                                                :
                                                <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                    <img src={item.url} alt="" />
                                                    <h4 className="font-secondary w-full rounded-md text-excp text-secondary">{item.title}</h4>
                                                    <img src={lineDown} alt="" className=' -rotate-90' />
                                                </div>
                                            }
                                        </div>

                                    </div>

                                    {openItemActivity === index && (
                                        <div className='border-t-2 w-full border-boorder py-2 px-4 flex flex-col gap-3' onClick={(e) => e.stopPropagation()} >
                                            <div className='px-5'>
                                                <div className='flex justify-between items-center gap-4 border-boorder border rounded-md pr-4'>
                                                    <input type="text" placeholder='Filter' className='w-full px-10 py-2 font-secondary' />
                                                    <img src={lineDown} alt="" className='h-5' />
                                                </div>
                                            </div>
                                            <div className='border-b-2 w-full border-boorder flex  justify-between py-2'>
                                                <div className='grid grid-cols-5 w-full'>
                                                    <p><b> {item.Event}</b></p>
                                                    <p><b>{item.Price} </b></p>
                                                    <p><b> {item.From}</b></p>
                                                    <p><b> {item.To}</b></p>
                                                    <p><b> {item.Date}</b></p>
                                                    <p></p>
                                                </div>
                                            </div>

                                            <div className='border-b-2 w-full border-boorder flex gap-20  items-center py-2'>
                                                <div className="grid grid-cols-5 w-full gap-2">
                                                    <p className='text-para-light'>{item.e1}</p>
                                                    <p><b> {item.p1}</b></p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <p className='text-para-light'>{item.t1}</p>
                                                    <p className='text-para-light' >{item.d1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />

                                                    {/*  */}

                                                    <p className='text-para-light'>{item.e2}</p>
                                                    <p> {item.p2}</p>
                                                    <p className='text-para-light'>{item.f2}</p>
                                                    <p className='text-para-light'>{item.t2}</p>
                                                    <p className='text-para-light'>{item.d2}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />

                                                    {/*  */}
                                                    <p className='text-para-light'>{item.e3}</p>
                                                    <p><b>{item.p3} </b>    </p>
                                                    <p className='text-para-light'>{item.f3}</p>
                                                    <p className='text-para-light'>{item.t3}</p>
                                                    <p className='text-para-light'>{item.d3}</p>

                                                </div>

                                            </div>

                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* More From The Collection Wraper */}
                    <div className=" flex flex-col max-sm:items-center  gap-4 lg:gap-10 py-5 lg:py-20">
                        <h2>More from this collection</h2>
                        <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5'>
                            {
                                NFTdetailMoreCollectionData.map((item, index) => (
                                    <div key={index} className='p-1 h-full'>
                                        <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1  2xl:pb-4"
                                            style={{
                                                backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",

                                            }}
                                        >
                                            <div className='flex flex-col gap-3 relative'>

                                                <div className="flex gap-2 items-center w-full">
                                                    <img src={item.personImg} alt="" />
                                                    <div>
                                                        <h6 className="font-light">{item.name}</h6>
                                                        <p className='text-para-light font-light text-xs'>{item.username}</p>
                                                    </div>
                                                </div>

                                                <div className=''>
                                                    <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />

                                                    <a className="text-l font-medium font-secondary navbtn-border background-grad text-inverted cursor-pointer  w-fit absolute  bottom-4 left-2 px-4 py-2">
                                                        Buy
                                                    </a>

                                                    <div className="  font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center navbtn-border gap-1 text-l absolute bottom-4 right-3">
                                                        <p className="text-l ">Price:</p>
                                                        <span className="bg-black rounded-full">
                                                            <img src={logoprice} alt="" />
                                                        </span>
                                                        <p className="text-l text-para-light">142.02</p>
                                                    </div>
                                                </div>
                                            </div>

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

export default NFTdetailpixacio