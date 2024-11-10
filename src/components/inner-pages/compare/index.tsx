import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import CompareArea from "./CompareArea"

const Compare = () => {
   return (
      <>
         <HeaderOne />
         <BreadcrumbOne title="Compare" link="#" link_title="Pages" sub_title="Compare" style={false} />
         <CompareArea />
         <FancyBanner />
         <FooterOne />
      </>
   )
}

export default Compare
