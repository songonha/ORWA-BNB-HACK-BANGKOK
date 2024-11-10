import FooterOne from "../../../../layouts/footers/FooterOne"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import FancyBanner from "../../../common/FancyBanner"
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne"
import Feedback from "../../../homes/home-one/Feedback"
import AgentArea from "../../../homes/home-one/AgentArea"
import BLockFeatureOne from "../../../homes/home-one/BLockFeatureOne"
import VideoBanner from "../../../homes/home-one/VideoBanner"
import Brand from "./Brand"

const AboutUsOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="About Agency" sub_title="About us" style={false} />
         <BLockFeatureOne />
         <VideoBanner />
         <BLockFeatureOne />
         <Feedback />
         <AgentArea style={false} />
         <Brand />
         <FancyBanner style={false} />
         <FooterOne />
      </>
   )
}

export default AboutUsOne