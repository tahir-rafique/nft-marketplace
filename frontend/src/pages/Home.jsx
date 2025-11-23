import Auction from '../components/Auction';
import FeaturedCollection from "../components/FeatureCollection"
import Navbar from "../components/Navbar"
import TrendingNFT from '../components/TrendingNFT';
import RecentSold from '../components/RecentSold';
import TopSeller from '../components/TopSeller';
import TopCollection from '../components/TopCollection';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import GenerateNFT from '../components/GenerateNFT';
import BootNFT from '../components/BootNFT';
import Header from '../components/Header';
import '../styles/typography.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <FeaturedCollection />
            <TrendingNFT />
            <TopSeller />
            <Auction />
            <TopCollection />
            <RecentSold />
            <GenerateNFT />
            <BootNFT />
            <FAQ />
            <Footer />

        </>
    )
}

export default Home