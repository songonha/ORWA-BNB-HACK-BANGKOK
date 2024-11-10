import { Link } from "react-router-dom"
import DashboardHeaderOne from "../../../../layouts/headers/dashboard/DashboardHeaderOne"

const PasswordChangeBody = () => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeaderOne title="Change Password" />
        <div className="bg-white card-box border-20">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Old Password*</label>
                  <input type="password" placeholder="Type current password" />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">New Password*</label>
                  <input type="password" placeholder="Confirm your new password" />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Confirm Password*</label>
                  <input type="password" placeholder="Confirm your new password" />
                </div>
              </div>
            </div>

            <div className="button-group d-inline-flex align-items-center">
              <Link to="#" className="dash-btn-two tran3s">Save &amp; Updated</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeBody
