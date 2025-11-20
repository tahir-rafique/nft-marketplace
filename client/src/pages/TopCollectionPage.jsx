import heroImage from '../assets/TopCollectionPage/heroImage.webp'
import Footer from '../components/Footer';
import Navbar from './../components/Navbar';
import "../styles/typography.css"
import { TopCollectionPageData } from '../constant/data';

const TopCollectionPage = () => {
    return (
        <>
            <Navbar />
            <section className='top-collection-wraper w-full relative z-50 flex justify-center'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 lg:py-10 py-5 flex flex-col gap-8 max-md:items-center'>

                    {/* Hero Section */}
                    <div className='topCollection-hero max-md:flex-col flex gap-10 justify-between items-center'>
                        <div className='leading-none'>
                            <h1 className=' text-main font-bold tracking-widest nftTextLarger'>NFT</h1>
                            <h3 className='text-secondary collectionTextLarger'>Collection</h3>
                        </div>
                        <img src={heroImage} alt="" className='max-lg:max-w-74 max-xl:max-w-100 max-w-160' />
                    </div>



                    {/* Explore Collection   */}
                    <div className='explore-collection-wraper  flex flex-col gap-4 '>
                        {/* Explore menu */}
                        <div className='explore-menu flex flex-col gap-4 '>
                            <h2 className='max-md:text-center'>Explore collections</h2>
                            <div className='flex gap-4 max-md:justify-center flex-wrap lg:gap-12 items-center font-secondary pt-2 pb-6 text-secondary'>
                                <h6 className='text-main border-2 px-4 py-2 rounded-md w-fit'>Popular</h6>
                                <h6>Trending</h6>
                                <h6>Sports </h6>
                                <h6>Art</h6>
                                <h6>Fantasy</h6>
                                <h6>Photography</h6>
                                <h6>Space</h6>
                            </div>
                        </div>

                        {/* Explores Cards */}
                        <div className="flex max-md:justify-center">
                            <div className="grid max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-fit">
                                {TopCollectionPageData.map((item, index) => (
                                    <div key={index} className="border-muted border-3 rounded-2xl bg-inverted p-4 relative">
                                        {/* person */}
                                        <div className="flex gap-2 items-center py-2">
                                            <div className="">
                                                <img src={item.person} alt="" className='size-14' />
                                            </div>
                                            <div className=''>
                                                <h6 className="font-secondary font-bold uppercase">{item.name}</h6>

                                                <div className='relative pr-5'>
                                                    <p className="text-para-light font-semibold">{item.owner}</p>
                                                    <img src={item.icon} alt="" className="absolute size-4 top-0 right-0" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* card  */}
                                        <div className="rounded-xl py-2 relative">
                                            <img src={item.frame} alt="" />
                                        </div>

                                        <div className='absolute font-secondary bg-muted rounded-md px-2 py-1 
                                        bottom-2 lg:bottom-2 text-[12px]   left-[50%]  translate-[-50%]'>{item.itemText} </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <Footer />


        </>
    )
}

export default TopCollectionPage