import { useEffect, useState } from "react";
import faq_data from "../../../data/home-data/FaqData"

interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const FaqOne = () => {

   const filteredFaqData = faq_data.filter((item) => item.page === "home_2_faq_1");

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = filteredFaqData.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (index: number) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq, i) => ({
            ...faq,
            showAnswer: i === index ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <>
         {faqData.map((item, index) => (
            <div key={index} className="accordion-item">
               <h2 className="accordion-header">
                  <button onClick={() => toggleAnswer(index)} className={`accordion-button ${item.showAnswer ? "collapsed" : ""}`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true"
                     aria-controls={`collapse${item.id}`}>
                     {item.question}
                  </button>
               </h2>
               {item.showAnswer && (
                  <div id={`collapse${item.id}`} className={`accordion-collapse collapse show `}
                     data-bs-parent="#accordionOne">
                     <div className="accordion-body">
                        <p>{item.answer}</p>
                     </div>
                  </div>
               )}
            </div>
         ))}
      </>
   )
}

export default FaqOne
