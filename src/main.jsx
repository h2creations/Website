import React, { Suspense, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loader from './components/loader';
import Navbar from './components/navbar';
const PlansPricing = React.lazy(() => import('./PlansPricing'));
const Home = React.lazy(() => import('./Home'));
const Services = React.lazy(() => import('./Services'));
const ContactUs = React.lazy(() => import('./ContactUs'));

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
   
   <Suspense fallback={<Loader />}>
      <Navbar />
      <Home />
      <Services />
      <PlansPricing setSelectedPlan={setSelectedPlan} />
      <ContactUs selectedPlan={selectedPlan} />
    </Suspense>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
