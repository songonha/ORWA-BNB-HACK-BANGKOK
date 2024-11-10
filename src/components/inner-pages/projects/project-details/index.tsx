import FooterOne from "../../../../layouts/footers/FooterOne";
import HeaderOne from "../../../../layouts/headers/HeaderOne";
import BreadcrumbOne from "../../../common/breadcrumb/BreadcrumbOne";
import FancyBanner from "../project-one/FancyBanner";
import ProjectDetailsArea from "./ProjectDetailsArea"

const ProjectDetails = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbOne title="Single Projects" link="pricing_01" link_title="Project" sub_title="Vintage City" style={false} />
         <ProjectDetailsArea />
         <FancyBanner />
         <FooterOne />
      </>
   )
}

export default ProjectDetails;
