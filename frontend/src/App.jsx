import { Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/typography.css';
import './styles/slider.css'
import './styles/modal.css'
import './styles/animations.css'
import AuctionPage from './pages/AuctionPage';
import TopCollectionPage from './pages/TopCollectionPage';
import TopCollectionPixacio from './pages/TopCollectionPixacio';
import NFTdetailpixacio from './pages/NFTdetailpixacio';
import TopSellerPage from './pages/TopSellerPage';
import SellerCollectionPage from './pages/SellerCollectionPage';
import CreateNFTpage from './pages/CreateNFTpage';
import ArtistProfilePage from './pages/ArtistProfilePage';
import SellMethodPage from './pages/SellMethodPage';
import CreateNFT from './pages/CreateNFT';
import ChooseCollection from './pages/ChooseCollection';
import CreatCollectionPage from './pages/CreatCollectionPage';
import CreateNFTCollection from './pages/CreateNFTCollection';
import SingleNFT from './pages/SingleNFT';
import ArtistProfile from './pages/ArtistProfile';


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const App = () => {

  const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

  return (
    <>
      <Routes>

        {/* when ever a new page open, top of page will be shown */}
        {ScrollToTop()}

        {/* Route: Home Page / Lading Pag */}
        <Route path="/" element={<Home />} />

        {/* Route: Not Found Page*/}
        <Route path="*" element={<NotFound />} />

        {/* Route: Auction Page */}
        <Route path="/auction" element={<AuctionPage />} />

        {/* Route: Top Collection Page */}
        <Route path="/top-Collection-page" element={<TopCollectionPage />} />

        {/* Route: Top Collection Pixacio  */}
        <Route path="/top-collection-pixacio" element={<TopCollectionPixacio />} />

        {/* Route: NFT Detail Pixacio */}
        <Route path="/nft-detail-pixacio" element={<NFTdetailpixacio />} />

        {/* Route: Top Seller Page */}
        <Route path="/top-seller-page" element={<TopSellerPage />} />

        {/* Route : Create NFT   */}
        <Route path="/create-nft" element={<CreateNFT />} />

        {/* Route : Create NFT Page  */}
        <Route path="/create-nft-page" element={<CreateNFTpage />} />


        {/* Collection */}
        {/* Route : Create Collection Page*/}
        <Route path="/create-collection-page" element={<CreatCollectionPage />} />

        {/* Route: Seller Collection Page */}
        <Route path="/seller-collection-page" element={<SellerCollectionPage />} />

        {/* Route: Single NFT / Create NFT */}
        <Route path="/create-single-nft" element={<SingleNFT />} />

        {/* Route : Choose Collection / Choose Existing Collection */}
        <Route path="/choose-existing-collection" element={<ChooseCollection />} />

        {/* Route : Create NFT Collection */}
        <Route path="/create-nft-collection" element={<CreateNFTCollection />} />


        {/* Artist */}
        {/* Route: Artist Profile  */}
        <Route path="/artist-profile" element={<ArtistProfile />} />

        {/* Route: Artist Profile Page */}
        <Route path="/artist-profile-page" element={<ArtistProfilePage />} />

        {/* Route: Sell Method Page */}
        <Route path="/sell-method-page" element={<SellMethodPage />} />



      </Routes>
    </>
  )
}

export default App