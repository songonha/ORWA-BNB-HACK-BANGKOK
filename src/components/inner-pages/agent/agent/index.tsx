import FooterOne from "../../../../layouts/footers/FooterOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import AgentArea from "./AgentArea"

const Agent = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbOne title="Our Agent" link="#" link_title="Pages" sub_title="Agents" style={true} />
         <AgentArea />
         <FancyBanner />
         <FooterOne />
      </>
   )
}

export default Agent
