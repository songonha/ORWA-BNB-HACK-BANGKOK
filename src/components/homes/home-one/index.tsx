import FooterOne from '../../../layouts/footers/FooterOne'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import Banner from './Banner'
import Feedback from './Feedback'
import BLockFeatureOne from './BLockFeatureOne'

import Property from './Property'

import FancyBanner from '../../../components/common/FancyBanner'
const HomeOne = () => {

  return (
    <>
      <HeaderOne style={false} />
      <Banner />
      
      <Feedback />
      <BLockFeatureOne />
      
      <Property />
      
     
      <FancyBanner style={false} />
      
      <FooterOne style={false} />
    </>
  )
}

export default HomeOne