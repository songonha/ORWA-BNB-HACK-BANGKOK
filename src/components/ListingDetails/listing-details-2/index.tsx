import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import ListingDetailsTwoArea from "./ListingDetailsTwoArea"

const ListingDetailsTwo = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsTwoArea />
      <FancyBanner />
      <FooterOne />
    </>
  )
}

export default ListingDetailsTwo
