import FooterOne from '../../../layouts/footers/FooterOne'
import HeaderOne from '../../../layouts/headers/HeaderOne'
import FancyBanner from '../../common/FancyBanner'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import FaqArea from './FaqArea'

const Faq = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Question & Answers" link="#" link_title="Pages" sub_title="Faq’s" style={true} />
         <FaqArea/>
         <FancyBanner style={false} />
         <FooterOne />
      </>
   )
}

export default Faq
