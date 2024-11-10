import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import FaqMain from '../components/inner-pages/faq'

const Faq = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Faq ORWA'} />
         <FaqMain />
      </Wrapper>
   );
};

export default Faq;