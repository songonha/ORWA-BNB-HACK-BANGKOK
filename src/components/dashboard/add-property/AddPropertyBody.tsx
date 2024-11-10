import Overview from "./Overview"
import ListingDetails from "./ListingDetails"
import SelectAmenities from "./SelectAmenities"
import AddressAndLocation from "../profile/AddressAndLocation"
import DashboardHeaderOne from "../../../layouts/headers/dashboard/DashboardHeaderOne"
import { Link } from "react-router-dom"

const AddPropertyBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderOne title="Add New Property" />
            <h2 className="main-title d-block d-lg-none">Add New Property</h2>
            <Overview />
            <ListingDetails />

            <div className="bg-white card-box border-20 mt-40">
               <h4 className="dash-title-three">Photo & Video Attachment</h4>
               <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">File Attachment*</label>

                  <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                     <span>PorpertyImage_01.jpg</span>
                     <Link to="#" className="remove-btn"><i className="bi bi-x"></i></Link>
                  </div>
                  <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                     <span>PorpertyImage_02.jpg</span>
                     <Link to="#" className="remove-btn"><i className="bi bi-x"></i></Link>
                  </div>
               </div>
               <div className="dash-btn-one d-inline-block position-relative me-3">
                  <i className="bi bi-plus"></i>
                  Upload File
                  <input type="file" id="uploadCV" name="uploadCV" placeholder="" />
               </div>
               <small>Upload file .jpg, .png, .mp4</small>
            </div>
            <SelectAmenities />
            <AddressAndLocation />

            <div className="button-group d-inline-flex align-items-center mt-30">
               <Link to="#" className="dash-btn-two tran3s me-3">Submit Property</Link>
            </div>
            <div className="button-group d-inline-flex align-items-center mt-50">
               <Link to="#" className="dash-btn-two tran3s me-3">Mint NFT</Link>
               <Link to="#" className="dash-btn-two tran3s me-3">Stake NFT</Link>
               <Link to="#" className="dash-cancel-btn tran3s">Cancel</Link>
            </div>
         </div>
      </div>
   )
}

export default AddPropertyBody
