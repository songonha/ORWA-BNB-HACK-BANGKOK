import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import FancyBanner from "../../common/FancyBanner"
import ListingDetailsOneArea from "./ListingDetailsOneArea"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsOneArea />
      <FancyBanner />
      <FooterOne />
    </>
  )
}

export default ListingDetailsOne
