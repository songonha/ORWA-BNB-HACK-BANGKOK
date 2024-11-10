import NiceSelect from "../../../ui/NiceSelect";

const UserAvatarSetting = () => {

   const selectHandler = () => { };

   return (
      <div className="row">
         <div className="col-12">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Username*</label>
               <input type="text" placeholder="thanhnhaweb3" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">First Name*</label>
               <input type="text" placeholder="MAI THANH" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Last Name*</label>
               <input type="text" placeholder="NHA" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Email*</label>
               <input type="email" placeholder="olym3labs@mail.com" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Position*</label>
               <NiceSelect className="nice-select"
                  options={[
                     { value: "1", text: "Agent" },
                     { value: "2", text: "Agency" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder="" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Phone Number*</label>
               <input type="tel" placeholder="+84974639191" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Website*</label>
               <input type="text" placeholder="http://orwa.olym3.com" />
            </div>
         </div>
         <div className="col-12">
            <div className="dash-input-wrapper">
               <label htmlFor="">About*</label>
               <textarea className="size-lg"
                  placeholder="I am working for the last 4 years as a web designer, graphics designer and well as UI/UX designer............."></textarea>
               <div className="alert-text">Brief description for your profile. URLs are hyperlinked.</div>
            </div>
         </div>
      </div>
   )
}

export default UserAvatarSetting
