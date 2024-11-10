import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: string;
   price: string;
   desc: string;
   list_details: {
      list: string;
      disable?: string;
   }[];
   class_name: string
   btn: string;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      title: "FREE PLAN",
      price: "0",
      desc: "per user/month",
      list_details: [{ list: "Access to tokenized assets" }, { list: "Basic portfolio tracking" }, { list: "Secure transactions" }, { list: "Community support" }, { list: "Asset verification and certification", disable: "disable" }, { list: "Enhanced listing visibility", disable: "disable" }, { list: "Detailed ownership records", disable: "disable" }, { list: "Priority support", disable: "disable" }],
      btn: "Choose Plan",
      class_name:"border-0",
   },
   {
      id: 2,
      title: "STANDARD",
      price: "$38",
      desc: "per user/month",
      list_details: [{ list: "Access to tokenized assets" }, { list: "Basic portfolio tracking" }, { list: "Secure transactions" }, { list: "Community support" }, { list: "Asset verification and certification"}, { list: "Enhanced listing visibility"}, { list: "Detailed ownership records", disable: "disable" }, { list: "Priority support", disable: "disable" }],
      btn: "Current Plan",
      class_name: "active",
   },
   {
      id: 3,
      title: "BUSINESS",
      price: "$78",
      desc: "per user/month",
      list_details: [{ list: "Access to tokenized assets" }, { list: "Basic portfolio tracking" }, { list: "Secure transactions" }, { list: "Community support" }, { list: "Asset verification and certification"}, { list: "Enhanced listing visibility"}, { list: "Detailed ownership records"}, { list: "Priority support"}],
      btn: "Choose Plan",
      class_name:"border-0",
   },
]

const Pricing = () => {
   return (
      <div className="pricing-section-two">
         <div className="wrapper">
            <div className="row gx-xxl-5">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6">
                     <div className={`pr-column-wrapper bg-white rounded-5 ${item.class_name} mt-30`}>
                        <div className="pr-header text-center mb-55">
                           <div className="plan fw-500 text-uppercase color-dark">{item.title}</div>
                           <strong className="price fw-500">{item.price}</strong>
                           <p className="fs-24">{item.desc}</p>
                        </div>
                        <ul className="style-none text-center">
                           {item.list_details.map((list, i) => (
                              <li key={i} className={list.disable}>{list.list}</li>
                           ))}
                        </ul>
                        <div className="pr-footer text-center mt-60">
                           <Link to="#" className="btn-twelve w-100 sm">{item.btn}</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Pricing
