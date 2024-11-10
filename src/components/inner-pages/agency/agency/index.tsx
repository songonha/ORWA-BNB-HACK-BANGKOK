import AgencyArea from './AgencyArea'
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FancyBanner from '../../../common/FancyBanner'
import FooterOne from "../../../../layouts/footers/FooterOne"

const Agency = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbOne title="Agency" link="#" link_title="Pages" sub_title="Agency" style={true} />
         <AgencyArea />
         <FancyBanner />
         <FooterOne />
      </>
   )
}

export default Agency
