import img404 from '../assets/404.jpg'
const NotFound = () => {
    return (
        <>
            <section className="bg-frame h-[100vh] text-center  relative ">
                <img src={img404} alt="" className='h-full w-full' />   
                <a href="/" className='absolute bottom-8 text-slate-600  text-xl border-2 px-5 py-3 rounded-2xl hover:bg-main animation animate-bounce hover:border-4 hover:text-inverted  left-[50%] translate-x-[-50%] uppercase'>Go back to home...</a>
            </section>
        </>
    )
}

export default NotFound;
