import AgencyDetailsArea from "../../agency/agency-details/AgencyDetailsArea"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FooterOne from "../../../../layouts/footers/FooterOne"
import FancyBanner from "../../../common/FancyBanner"

const AgentDetails = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbOne title="Agent Details" link="agent" link_title="Agent" sub_title="Mathews Firlo" style={false} />
         <AgencyDetailsArea style={true} />
         <FancyBanner />
         <FooterOne />
      </>
   )
}

export default AgentDetails
