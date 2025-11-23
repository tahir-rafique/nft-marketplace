import Navbar from './../components/Navbar';
import img1 from '../assets/CreateCollectionPage/images/img1.webp'
import img2 from '../assets/CreateCollectionPage/images/img2.webp'
import img3 from '../assets/CreateCollectionPage/images/img3.webp'
import img4 from '../assets/CreateCollectionPage/images/img4.webp'
const CreatCollectionPage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center relative z-100' >
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 py-5 lg:pt-10'>
                    {/* Main wraper */}
                    <div className='flex flex-col gap-10'>

                        {/* top */}
                        <div className='w-full flex justify-between items-center'>
                            {/* left */}
                            <div className='flex max-sm:flex-col max-sm:gap-2 gap-10 items-center'>

                                <div className='border-2 rounded-md border-boorder w-fit px-4 py-2 font-secondary'>
                                    <h4 className=' text-para-light'>Collection</h4>
                                </div>
                                <div>
                                    <h5 className='text-para-light font-secondary '>10/10 Generated</h5>
                                </div>
                            </div>


                            {/* right */}
                            <div className='flex  max-sm:flex-col max-sm:gap-2 gap-10 items-center'>
                                {/* Minit button */}
                                <div>
                                    <p className='text-para-light'>Select NFT's to mint</p>
                                </div>
                                <div className="flex justify-end font-light font-secondary  cursor-pointer ">
                                    <button className="background-grad text-inverted px-4 py-2 capitalize cursor-pointer">
                                        <p className="font-medium">
                                            Minit NFT
                                        </p>
                                    </button>
                                </div>
                            </div>


                        </div>
                        {/* bottom */}
                        <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img4} alt="" />
                            <img src={img3} alt="" />

                            {/*  */}
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img4} alt="" />
                            <img src={img3} alt="" />
                            {/*  */}
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CreatCollectionPage