import Navlogo from "../assets/Navbar/logo.png"
import favicon from "../assets/Navbar/favicon.svg"
import lineVector from "../assets/Modal/icons/line-vector.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonSecondary from "../shared/ButtonSecondary";
import ButtonMain from "../shared/ButtonMain";
import logo1 from '../assets/Modal/images/logo1.webp'
import logo2 from '../assets/Modal/images/logo2.webp'
import logo3 from '../assets/Modal/images/logo3.webp'
import logo4 from '../assets/Modal/images/logo4.webp'
import wallet from '../assets/Navbar/wallet.webp'
import profileimg from '../assets/Navbar/profileimg.webp'
import topGridLeft from "../assets/Header/images/topGridLeft.webp"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Modal } from 'antd';
const Navbar = () => {
    const { pathname } = useLocation()
    const [menuOpen, setmenuOpen] = useState(false);
    const toggleNavbar = () => {
        setmenuOpen(!menuOpen);
    };
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
    const navigate = useNavigate();
    return (
        <nav className="flex justify-center ">
            <div className="absolute left-0 top-0 z-0 max-lg:hidden ">
                <img src={topGridLeft} alt="" />
            </div>
            <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-20 py-4 relative z-100">
                <div className="">
                    <div className="flex justify-between items-center relative z-100">
                        <a href="/" className="cursor-pointer">
                            <img src={Navlogo} alt="" className="max-lg:size-14 h-[80px] w-[90px] cursor-pointer" />

                        </a>
                        <div className="max-lg:hidden lg:flex sm:gap-4 lg:gap-8 navLinks">
                            <h6 className="">
                                <NavLink to="/" className="focus:text-main underline-offset-8 focus:underline">
                                    Home
                                </NavLink>
                            </h6>
                            <h6 className="">
                                <NavLink to="/create-nft-page" className="">
                                    AI NFT GENERATION
                                </NavLink>
                            </h6>
                        </div>

                        {
                            pathname == '/create-nft-page' || pathname == '/artist-profile-page' || pathname == '/artist-profile-page-setting' || pathname == '/create-nft' || pathname == '/create-single-nft' || pathname == '/create-nft-collection' || pathname == '/choose-existing-collection' || pathname == '/sell-method-page' ? (

                                <div className="flex gap-x-3">

                                    <div onClick={showModal}><img src={wallet} alt="" className="cursor-pointer" /></div>

                                    <div onClick={() => { navigate('/artist-profile-page') }}><img src={profileimg} alt="" className="cursor-pointer" /></div>
                                </div>

                            ) :

                                <div className="max-lg:hidden lg:flex gap-4">
                                    <ButtonMain text="Connect Wallet" onClick={showModal} />
                                    <ButtonSecondary text="Create NFT" onClick={() => { navigate('/create-nft') }} />
                                </div>

                        }

                        {/* Ant-Desing Modal */}
                        <div className="ant-modal-main absolute">
                            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <div className="flex flex-col items-center gap-2 pt-4">
                                    <div className="modal-top-section flex flex-col items-center gap-1 pb-2">
                                        <h3 className="ant-main-text">Connect your wallet</h3>
                                        <img src={favicon} alt="" className="size-30" />
                                        <h4 className="font-bold text-main">Fry Networks</h4>
                                        <img src={lineVector} alt="" />
                                    </div>

                                    {/* Wallets */}
                                    <div className="modal-bottom-section flex flex-col gap-2">
                                        <Link
                                            to="https://portfolio.metamask.io/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md w-[250px] cursor-pointer ">
                                            <img src={logo1} alt="" />
                                            <p className="text-para-light font-light">Pera</p>
                                        </Link>

                                        <Link
                                            to="https://portfolio.metamask.io/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md w-[250px] cursor-pointer">
                                            <img src={logo2} alt="" />
                                            <p className="text-para-light font-light ">Defly</p>

                                        </Link>


                                        <Link
                                            to="https://portfolio.metamask.io/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md w-[250px] cursor-pointer">
                                            <img src={logo3} alt="" />
                                            <p className="text-para-light font-light">Daffi</p>

                                        </Link>

                                        <Link
                                            to="https://portfolio.metamask.io/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md w-[250px] cursor-pointer">
                                            <img src={logo4} alt="" />
                                            <p className="text-para-light font-light">WalletConnect</p>

                                        </Link>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        {/* Navbar-Menu on mobile */}
                        <div className="mobile-menu-navbar lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {menuOpen ? <X className="max-sm:size-10 sm:size-12" /> : <Menu className="max-sm:size-10 sm:size-12" />}
                            </button>
                        </div>
                    </div>


                    {/* Navbar Mobile */}
                    {menuOpen && (
                        <div className="lg:hidden fixed bg-inverted  py-5 px-10 flex flex-col gap-8 z-100 navMobile-anime h-[100%] top-0 w-[270px] left-0 bottom-0 transition-all transition-discrete delay-1000">
                            <div className="flex gap-1 items-center">
                                <a href="/">
                                    <img src={Navlogo} alt="logo" className="max-lg:size-16 h-[70px] w-[100px] " />
                                </a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3">
                                    <h6>
                                        <a href="/" className=" text-main underline underline-offset-8 text-xl">
                                            Home
                                        </a>
                                    </h6>
                                    <h6>
                                        <a href="/not-found" className=" text-secondary text-xl">
                                            AI NFT GENERATION
                                        </a>
                                    </h6>
                                </div>
                                <div className="flex flex-col gap-3">

                                    <button className="navbtn-size  navbtn-border font-medium background-grad text-inverted  py-1  w-fit px-4" onClick={showModal}>
                                        Connect Wallet
                                    </button>


                                    <button onClick={() => navigate('/create-nft-page')} className="w-fit navbtn-size border border-main text-main  py-1 navbtn-border font-medium px-6.5">
                                        Create NFT
                                    </button>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
