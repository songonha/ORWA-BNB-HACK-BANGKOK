import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DashboardProfileMain from '../components/dashboard/profile'

const DashboardProfile = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Dashboard Profil  ORWA'} />
         <DashboardProfileMain />
      </Wrapper>
   );
};

export default DashboardProfile;