import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import ListingDetailsThreeArea from "./ListingDetailsThreeArea"

const ListingDetailsThree = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsThreeArea />
      <FancyBanner />
      <FooterOne />
    </>
  )
}

export default ListingDetailsThree
