import { useEffect, useRef, useState } from "react";
import Fancybox from "../../../common/Fancybox";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";

interface DataType {
   id: number;
   thumb: string;
   img_slider: string[];
   total_img: number;
   price: JSX.Element;
   address: string;
   category: string;
}

const tab_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/images/listing/img_01.jpg",
      category: "rent",
      img_slider: ["1", "2", "3"],
      total_img: 3,
      price: <>$2,210/ <sub>m</sub></>,
      address: "6391 Elgin St. Celina"
   },
   {
      id: 2,
      thumb: "/assets/images/listing/img_01.jpg",
      category: "sell",
      img_slider: ["1", "2", "3"],
      total_img: 3,
      price: <>$2,210/ <sub>m</sub></>,
      address: "6391 Elgin St. Celina"
   },

 
];

const AgencyNavTabs = () => {
   
   const isotope = useRef<Isotope | null>(null);
   const [filterKey, setFilterKey] = useState("*");

   useEffect(() => {
      if (typeof window !== "undefined") {
         isotope.current = new Isotope(".isotop-gallery-wrapper", {
            itemSelector: ".isotop-item",
            layoutMode: "fitRows",
         });

         // Cleanup
         return () => {
            isotope.current?.destroy();
         };
      }
   }, []);

   // Handling filter key change
   useEffect(() => {
      if (filterKey === "*") {
         isotope.current?.arrange({ filter: "*" });
      } else {
         isotope.current?.arrange({ filter: `.${filterKey}` });
      }
   }, [filterKey]);

   const [selectedFilter, setSelectedFilter] = useState("*");

   const handleFilterKeyChange = (key: string) => () => {
      setFilterKey(key);
      setSelectedFilter(key);
   };

   return (
      <div className="agent-property-listing bottom-line-dark pb-20 mb-80 xl-mb-50">
         <div className="d-sm-flex justify-content-between align-items-center mb-40 xs-mb-20">
            <h4 className="mb-10">Listings</h4>
            <div className="filter-nav-one xs-mt-40">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "sell" ? "is-checked" : ""} onClick={handleFilterKeyChange("sell")}>Sell</li>
                  <li className={selectedFilter === "rent" ? "is-checked" : ""} onClick={handleFilterKeyChange("rent")}>Rent</li>
               </ul>
            </div>
         </div>

         <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column">
            <div className="grid-sizer"></div>
            {tab_data.map((item) => (
               <div key={item.id} className={`isotop-item ${item.category}`}>
                  <div className="listing-card-one shadow-none style-two mb-50">
                     <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                           <div className="tag bg-white text-dark fw-500">FOR {item.category}</div>
                           <img src={item.thumb} className="w-100" alt="..." />
                           <div className="img-slider-btn">
                              0{item.total_img} <i className="fa-regular fa-image"></i>
                              <Fancybox
                                 options={{
                                    Carousel: {
                                       infinite: true,
                                    },
                                 }}
                              >
                                 {item.img_slider.map((thumb, index) => (
                                    <a key={index} className="d-block" data-fancybox="gallery11" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                                 ))}
                              </Fancybox>
                           </div>
                        </div>
                     </div>
                     <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                           <strong className="price fw-500 color-dark">{item.price}</strong>
                           <div className="address pt-5 m0">{item.address}</div>
                        </div>
                        <Link to="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default AgencyNavTabs;
