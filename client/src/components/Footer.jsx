import fb from "../assets/Footer/icons/fb.svg";
import telegram from "../assets/Footer/icons/telegram.svg";
import linkden from "../assets/Footer/icons/linkdn.svg";
import discord from "../assets/Footer/icons/discord.svg";
import insta from "../assets/Footer/icons/insta.svg";
import tiktok from "../assets/Footer/icons/tik.svg";
import redit from "../assets/Footer/icons/redit.svg";
import github from "../assets/Footer/icons/git.svg";
import message from "../assets/Footer/icons/message.svg";
// import logofooter from ";
import tracked from "../assets/Footer/icons/trackedfooter.svg";
import gl from "../assets/Footer/images/GridLeft.webp";
import gr from "../assets/Footer/images/GridRight.webp";
import EL from "../assets/Footer/images/footerLeftElicp.webp";


const Footer = () => {
  return (
    <div className="relative">
      {/* footer Elipc */}
      <img src={EL} alt="" className="absolute left-0 top-[0px] size-130 max-lg:hidden z-1" />
      {/* footer Grid */}
      <img src={gl} alt="" className="absolute left-0 bottom-0 z-10 max-md:hidden" />
      <img src={gr} alt="" className="absolute right-0 bottom-0 z-10 max-md:hidden" />

      {/* footer */}
      <div className="flex justify-center  relative z-50">
        <div className="container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 lg:py-5 pb-4 pt-10 lg:pt-20 flex flex-col gap-8">

          {/* footer top */}
          <div className="flex flex-col justify-center items-center gap-4 xl:gap-10">
            <h2 className="text-center font-bold uppercase">Ready for Next NFT Drop?</h2>

            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-10  py-6 footer-border drop-shadow-xl relative z-50 w-full max-w-[650px]">
              <input className="font-secondary  text-main w-full max-w-[480px] outline-none"
                placeholder="info@gmail.com" />
              <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer flex gap-1 max-md:right-4 right-8">
                <img src={message} alt="no img" />
              </a>
            </div>
          </div>

          {/* footer-End */}
          <div className="footer-bg px-10 lg:px-20 relative  py-5 lg:py-18 overflow-y-hidden">
            <img src={tracked} alt="" className="absolute top-0 left-0 max-lg:hidden  z-1 size-99" />
            <div className="py-2 flex flex-col max-lg:items-center lg:flex-row relative z-50">
              <div className="w-[40%] max-lg:w-full flex justify-center ">
                <a href="/">

                  <img src={'../src/assets/Navbar/logo.png'} alt="" className="size-43 max-lg:size-34 cursor-pointer **invert** grayscale-100" />
                </a>
              </div>

              <div className="w-[60%] flex gap-10 max-lg:flex-col max-lg:w-full items-center">
                <div className="Social-links w-[70%] max-lg:w-full flex flex-col gap-10">
                  <div>
                    <h5 className="max-lg:text-center font-secondary text-inverted">NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell and bid NFTs and get rich </h5>
                  </div>

                  {/* Social-Links */}
                  <div className="flex gap-2 max-lg:justify-center">
                    <img src={fb} alt="fb" className="cursor-pointer" />
                    <img src={telegram} alt="telegram" className="cursor-pointer" />
                    <img src={linkden} alt="linkden" className="cursor-pointer" />
                    <img src={discord} alt="discord" className="cursor-pointer" />
                    <img src={insta} alt="insta" className="cursor-pointer" />
                    <img src={tiktok} alt="tiktok" className="cursor-pointer" />
                    <img src={redit} alt="redit" className="cursor-pointer" />
                    <img src={github} alt="github" className="cursor-pointer" />
                  </div>
                </div>

                {/* website-Links */}
                <div className="font-secondary text-inverted  w-[30%] max-lg:w-full max-lg:flex-row max-lg:justify-center max-lg:items-center max-lg:gap-4 flex flex-col lg:gap-5 ">
                  <div className="flex flex-col gap-2">
                    <div className="flex max-lg:justify-center">
                      <h3 className="cursor-pointer font-bold font-secondary">About</h3>
                    </div>
                    <div className="max-lg:flex-row flex flex-col max-lg:gap-x-4 max-lg:flex-wrap max-lg:justify-center lg:gap-4">
                      <h5 className="cursor-pointer">About NFT</h5>
                      <h5 className="cursor-pointer">Live Auctions</h5>
                      <h5 className="cursor-pointer">Collection</h5>
                      <h5 className="cursor-pointer">Activity</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
















