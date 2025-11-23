import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import reactangle from "../assets/FeatureCollection/images/reactangle.webp";
import arrowUp from "../assets/FeatureCollection/icons/arrowUp.svg";
import arrowDown from "../assets/FeatureCollection/icons/arrowDown.svg";
import { FeatureCollectionData } from "../constant/data.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const PrevArrow = ({ onClick }) => (
  <button className="cursor-pointer" onClick={onClick} style={{ backgroundImage: `url(${reactangle})`, backgroundRepeat: "no-repeat" }}>

    <img src={arrowDown} alt="" className="w-fit h-5 overflow-hidden absolute left-50% translate-[-50%]" />

  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="cursor-pointer" onClick={onClick} style={{ backgroundImage: `url(${reactangle})`, backgroundRepeat: "no-repeat" }} >
    <img src={arrowUp} alt="" className="w-fit h-5 overflow-hidden absolute left-50% translate-[-50%]" />
  </button>
);





const FeatureCollection = () => {
  var settings = {
    // infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [

      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          initialSlide: 1,



        }
      },

      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,

        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,

        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },

    ]
  };

  return (
    <div className="SliderWraper">

      <div className="flex justify-center relative z-50">
        <div className="container mx-auto flex flex-col gap-3 max-sm:px-5 sm:px-12 lg:px-20 py-10 relative">
          {/* Slider-Section-text */}
          <div>
            <h2>Featured Collection</h2>
          </div>

          {/* Slider-Sliding-Section*/}
          <div className="SliderWraper">
            <h6 className="text-para-light font-secondary font-light max-sm:max-w-[57%] sm:max-w-[60%] absolute top-22 sm:top-30">
              Explore our exclusive featured collection, showcasing innovative campaigns and creative <br /> storytelling from top brands around the world.
            </h6>
            <Slider {...settings}>
              {FeatureCollectionData.map((item, index) => (
                <div className="pt-5" key={index} >
                  <div className="flex max-md:justify-center gap-10 Sliderwaper drop-shadow-md  flex-wrap ">
                    <div 
                    className="cursor-pointer"
                    style={{
                      backgroundImage: `url(${item.frame})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      width: '290px'
                    }}>

                      <div className="flex flex-col gap-2 px-3 py-4 pb-5 w-fit drop-shadow-md">


                        <div className="flex gap-2 items-center ">
                          <img src={item.personImg} alt="" />
                          <div>
                            <h6 className="font-light">{item.name}</h6>
                            <p className='text-para-light font-light text-xs'>{item.username}</p>
                          </div>
                        </div>


                        <div className=" relative ">

                          <img src={item.url} alt="" />

                          <div className="background-grad text-inverted px-4 py-2 cursor-pointer flex items-center font-secondary font-medium bg-inverted shrink-0 gap-1 text-l absolute bottom-2 left-2">
                            Buy
                          </div>


                          <div className="font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center navbtn-border gap-1 text-l absolute bottom-2 right-2">
                            <p className="text-l ">Price:</p>
                            <span className="bg-black rounded-full">
                              <img src={logoprice} alt="Price Logo" />
                            </span>
                            <p className="text-l text-para-light">142.02</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCollection;



































