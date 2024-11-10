import FooterOne from "../../../../layouts/footers/FooterOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import AgencyDetailsArea from "./AgencyDetailsArea"

const AgencyDetails = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbOne title="Agency Details" link="agency" link_title="Agency" sub_title="Rainbow Housing" style={false} />
         <AgencyDetailsArea style={false} />
         <FancyBanner />
         <FooterOne />
      </>
   )
}

export default AgencyDetails
