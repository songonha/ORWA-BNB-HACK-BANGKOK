import ProjectArea from "./ProjectArea";
import FancyBanner from "./FancyBanner";
import HeaderOne from "../../../../layouts/headers/HeaderOne";
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne";
import FooterOne from "../../../../layouts/footers/FooterOne";
import FancyBannerCommon from "../../../common/FancyBanner";

const ProjectOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Our Projects" link="#" link_title="Pages" sub_title="Project" style={true} />
         <ProjectArea />
         <FancyBanner />
         <FancyBannerCommon />
         <FooterOne />
      </>
   )
}

export default ProjectOne;
