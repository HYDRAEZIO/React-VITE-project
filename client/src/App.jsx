import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Hero from './components/hero/hero';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';
import Section7 from './components/section7/Section7';
import Section8 from './components/section8/Section8';
import Footer from './components/footer/Footer';
import Divider from './components/divider/divider';
import CheckOutPage from './components/checkoutpage/CheckOutPage';
import OrderForm from './components/form/form';
import SuccessPage from './components/success/SuccessPage'; // Make sure this component is created
import ShimmerEffect from './components/shimmer/shimmer';
import Payment from './components/payment/payment';

// Stripe public key
const stripePromise = loadStripe("pk_test_51NsmYFL6UDKZvIsfbanqmmFTlLNz2fq5p9oai2NRjE7mMP6MOjmX6eUiaKPpeF3C3jAIsSxDbyS0wlQeiUqZu6aN00qMdOCEbV");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Section2 />
            <Section3 />
            <Divider />
            <Section4 />
            <Divider />
            <Section5 />
            <Divider />
            <Section6 />
            <Divider />
            <Section7 />
            <Divider />
            <Section8 />
            <Footer />
          </>
        } />

        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/form" element={<OrderForm />} />
        <Route path="/shimmer" element={<ShimmerEffect />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={
          <Elements stripe={stripePromise}>
            <SuccessPage />
          </Elements>
        } />
      </Routes>
    </Router>
  );
}

export default App;
