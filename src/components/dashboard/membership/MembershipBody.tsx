import { Link } from "react-router-dom"
import DashboardHeaderOne from "../../../layouts/headers/dashboard/DashboardHeaderOne"
import Pricing from "./Pricing"

const MembershipBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderOne title="Membership" />
            <h2 className="main-title d-block d-lg-none">Membership</h2>

            <div className="membership-plan-wrapper mb-20">
               <div className="row gx-0">
                  <div className="col-xxl-7 col-lg-6 d-flex flex-column">
                     <div className="column w-100 h-100">
                        <h4>Current Plan (Standard)</h4>
                        <p>Unlimited access to our legal document library and online rental application tool, billed monthly.</p>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-lg-6 d-flex flex-column">
                     <div className="column border-left w-100 h-100">
                        <div className="d-flex">
                           <h3 className="price m0">$38</h3>
                           <div className="ps-4 flex-fill">
                              <h6>Monthly Plan</h6>
                              <span className="text1 d-block">Your subscription renews <span className="fw-500">December 10th,
                                 2024</span></span>
                              <Link to="#" className="cancel-plan tran3s">Cancel Current Plan</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Pricing />
         </div>
      </div>
   )
}

export default MembershipBody
