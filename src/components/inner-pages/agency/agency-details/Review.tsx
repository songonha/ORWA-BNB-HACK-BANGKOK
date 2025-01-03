import { useState } from "react";
import Fancybox from "../../../common/Fancybox";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   img: string;
   title: string;
   date: string;
   total_rating: string;
   rating: string[];
   desc: JSX.Element;
   img_slider?: {
      img_id: string;
      img: string;
   }[];
}[]

const review_data: DataType[] = [
   {
      id: 1,
      img: "/assets/images/media/img_01.jpg",
      title: "Mai Thanh Nha",
      date: "09 Nov, 2024",
      total_rating: "(5.0 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>ORWA is transforming real estate investment! Their real-world asset model makes it easy to invest in property, even for beginners. With ORWA, I can diversify my portfolio without the traditional hassles of real estate.</>),
   },
   {
      id: 2,
      img: "/assets/images/media/img_03.jpg",
      title: "Nguyen Thi Hieu",
      date: "09 Nov, 2024",
      total_rating: "(4.9 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      img_slider: [{ img_id: "4", img: "/assets/images/listing/img_48.jpg" }, { img_id: "5", img: "/assets/images/listing/img_49.jpg" }, { img_id: "6", img: "/assets/images/listing/img_50.jpg" },],
      desc: (<>ORWA is a game-changer for real estate investors. The platform’s transparency and blockchain integration ensure secure, traceable investments. I feel confident knowing my assets are protected.</>),
   },
   {
      id: 3,
      img: "/assets/images/media/img_02.jpg",
      title: "Nguyen Thi Lieu",
      date: "09 Nov, 2024",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>ORWA brings a fresh approach to real estate with blockchain-backed asset management. It's reliable, efficient, and user-friendly—a must-try for anyone looking to invest in real-world assets.</>),
   },
   {
      id: 4,
      img: "/assets/images/media/img_34.jpg",
      title: "Zubayer Al Hasan",
      date: "09 Nov, 2024",
      total_rating: "(4.8 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>Investing with ORWA has been a breeze. The platform simplifies the complex world of real estate, providing access to quality assets and removing many barriers faced in traditional property investment.</>),
   },
   {
      id: 5,
      img: "/assets/images/media/img_35.jpg",
      title: "Rashed Kabir",
      date: "09 Nov, 2024",
      total_rating: "(4.9 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      img_slider: [{ img_id: "4", img: "/assets/images/listing/img_48.jpg" }, { img_id: "5", img: "/assets/images/listing/img_49.jpg" }, { img_id: "6", img: "/assets/images/listing/img_50.jpg" },],
      desc: (<>ORWA takes real estate investment to the next level. The team is professional, the platform is innovative, and the returns have been impressive. It’s made property investment accessible for everyone!</>),
   },
   {
      id: 6,
      img: "/assets/images/media/img_36.jpg",
      title: "Wener Yasmin",
      date: "09 Nov, 2024",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>With ORWA, I can invest in real estate without massive upfront costs. They offer an easy, low-risk entry into the property market, perfect for small investors like myself. Highly recommended!</>),
   },
   {
      id: 7,
      img: "/assets/images/media/img_33.jpg",
      title: "Vanessa Rossie",
      date: "09 Nov, 2024",
      total_rating: "(4.7 Rating)",
      rating: ["star", "star", "star", "star", "star"],
      desc: (<>ORWA is redefining real estate by bridging the gap between traditional assets and blockchain technology. They’ve made real estate investment modern, secure, and hassle-free!</>),
   },
]
const Review = ({ style }: any) => {

   const [showAllReviews, setShowAllReviews] = useState(false);
   const maxReviewsToShow = 2; // Set the maximum number of reviews to show initially

   const displayedReviews = showAllReviews ? review_data : review_data.slice(0, maxReviewsToShow);

   return (
      <>
         <div className="review-wrapper mb-35">
            {displayedReviews.map((item) => (
               <div key={item.id} className="review">
                  <img src={item.img} alt="" className="rounded-circle avatar" />
                  <div className="text">
                     <div className="d-sm-flex justify-content-between">
                        <div>
                           <h6 className="name">{item.title}</h6>
                           <div className="time fs-16">{item.date}</div>
                        </div>
                        <ul className="rating style-none d-flex xs-mt-10">
                           <li><span className="fst-italic me-2">{item.total_rating}</span> </li>
                           {item.rating.map((rating, i) => (
                              <li key={i}><i className={`fa-sharp fa-solid fa-${rating}`}></i></li>
                           ))}
                        </ul>
                     </div>
                     <p className="fs-20 mt-20 mb-30">{item.desc}</p>
                     <Fancybox
                        options={{
                           Carousel: {
                              infinite: true,
                           },
                        }}
                     >
                        {item.img_slider && <ul className="style-none d-flex flex-wrap review-gallery pb-30">
                           {item.img_slider?.map((img_item, index) => (
                              <li key={index}>
                                 <a className="d-block" data-fancybox="gallery8" href={`/assets/images/listing/img_large_0${img_item.img_id}.jpg`}>
                                    <img src={img_item.img} alt="" />
                                 </a>
                              </li>
                           ))}
                           <li>
                              <div className="position-relative more-img">
                                 <img src="/assets/images/listing/img_50.jpg" alt="" />
                                 <span>3+</span>
                                 {item.img_slider?.map((img_item, index) => (
                                    <a key={index} className="d-block" data-fancybox="gallery8" href={`/assets/images/listing/img_large_0${img_item.img_id}.jpg`}>
                                    </a>
                                 ))}
                              </div>
                           </li>
                        </ul>}
                     </Fancybox>
                     <div className="d-flex review-help-btn">
                        <Link to="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i>
                           <span>Helpful</span>
                        </Link>
                        <Link to="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i>
                           <span>Flag</span>
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div
            className={`load-more-review text-uppercase w-100 tran3s ${style ? "border-15 tran3s" : "fw-500 inverse rounded-0"}`}
            onClick={() => setShowAllReviews(!showAllReviews)}
         >
            {showAllReviews ? 'SHOW LESS' : 'VIEW ALL REVIEWS'}{' '}
            <i className={`bi bi-arrow-${showAllReviews ? 'down' : 'up'}-right`}></i>
         </div>
      </>
   )
}

export default Review
