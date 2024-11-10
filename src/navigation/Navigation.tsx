import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home';

import AboutUsOne from '../pages/AboutUsOne'

import Agency from '../pages/Agency';
import AgencyDetails from '../pages/AgencyDetails';
import Agent from '../pages/Agent';
import AgentDetails from '../pages/AgentDetails';

import ListingOne from '../pages/ListingOne';
import ListingTwo from '../pages/ListingTwo';
import ListingThree from '../pages/ListingThree';

import ListingDetailsOne from '../pages/ListingDetailsOne';
import ListingDetailsTwo from '../pages/ListingDetailsTwo';
import ListingDetailsThree from '../pages/ListingDetailsThree';

import Compare from '../pages/Compare';
import PricingOne from '../pages/PricingOne';

import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import NotFound from '../pages/NotFound';

import DashboardIndex from '../pages/DashboardIndex';
import DashboardMessage from '../pages/DashboardMessage';
import DashboardProfile from '../pages/DashboardProfile';
import DashboardAccountSettings from '../pages/DashboardAccountSettings';
import DashboardMembership from '../pages/DashboardMembership';
import DashboardPropertiesList from '../pages/DashboardPropertiesList';
import DashboardAddProperty from '../pages/DashboardAddProperty';
import DashboardFavourites from '../pages/DashboardFavourites';
import DashboardSavedSearch from '../pages/DashboardSavedSearch';
import DashboardReview from '../pages/DashboardReview';

const AppNavigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us_01" element={<AboutUsOne />} />

        <Route path="/agency" element={<Agency />} />
        <Route path="/agency_details" element={<AgencyDetails />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/agent_details" element={<AgentDetails />} />
      
        <Route path="/compare" element={<Compare />} />
        <Route path="/pricing_01" element={<PricingOne />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/listing_01" element={<ListingOne />} />
        <Route path="/listing_02" element={<ListingTwo />} />
        <Route path="/listing_03" element={<ListingThree />} />
       
        <Route path="/dashboard/dashboard-index" element={<ListingDetailsOne />} />
        <Route path="/listing_details_02" element={<ListingDetailsTwo />} />
        <Route path="/listing_details_03" element={<ListingDetailsThree />} />

        
        <Route path="/dashboard/dashboard-index" element={<DashboardIndex />} />
        <Route path="/dashboard/message" element={<DashboardMessage />} />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/dashboard/account-settings" element={<DashboardAccountSettings />} />
        <Route path="/dashboard/membership" element={<DashboardMembership />} />
        <Route path="/dashboard/properties-list" element={<DashboardPropertiesList />} />
        <Route path="/dashboard/add-property" element={<DashboardAddProperty />} />
        <Route path="/dashboard/favourites" element={<DashboardFavourites />} />
        <Route path="/dashboard/saved-search" element={<DashboardSavedSearch />} />
        <Route path="/dashboard/review" element={<DashboardReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;