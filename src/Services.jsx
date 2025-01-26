import React, { useState } from 'react';

const Services = () => {
  const [service, setService] = useState('spa');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getServiceImg = (service) => {
    if (service === 'spa') {
      return './spa.png';
    } else if (service === 'ecom') {
      return './ecommerce.png';
    } else if (service === 'cloud') {
      return './cloud.png';
    } else if (service === 'custom') {
      return './custom.png';
    } else if (service === 'maintence') {
      return './maintence.png';
    }
    return '';
  };

  const getServicePara = (service) => {
    if (service === 'spa') {
      return 'Build fast and responsive SPAs using modern frameworks. SPAs offer seamless user experiences with no page reloads. Perfect for dynamic, interactive websites and apps.';
    } else if (service === 'ecom') {
      return 'Create secure and scalable online stores tailored to your business needs. Support for payment gateways, inventory management, and customer engagement tools. Optimize for user-friendly shopping experiences.';
    } else if (service === 'custom') {
      return 'Design unique websites that reflect your brand identity. Tailored solutions for functionality, layout, and features. Ideal for businesses needing a personalized digital presence.';
    } else if (service === 'cloud') {
      return 'Host and deploy your websites on reliable cloud platforms. Ensure high availability, scalability, and faster load times. Focus on performance and hassle-free updates.';
    } else if (service === 'maintence') {
      return 'Keep your website updated, secure, and running smoothly. Includes performance monitoring, bug fixes, and content updates. Ideal for businesses wanting consistent online performance.';
    }
  };

  const handleServiceChange = (newService) => {
    setIsTransitioning(true); 
    setTimeout(() => {
      setService(newService);
      setIsTransitioning(false); 
    }, 300); 
  };

  return (
    <div id="Services" className="inset-0 bg-gradient-to-bl from-gray-800 to-black h-[600px] md:h-[600px]">
      <h1 className="text-center text-white text-2xl md:text-3xl font-Sriracha underline underline-offset-8 pt-8">
        SERVICES
      </h1>
      <div className="md:flex">
        {/* Buttons for services */}
        <div id="servicesName" className="md:w-1/2 md:h-[300px] grid md:grid-cols-2 m-10 md:mt-20 mx-4 gap-8">
          <button
            onClick={() => handleServiceChange('spa')}
            className="p-4 border border-white bg-transparent shadow-md shadow-purple-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-150"
          >
            Single Page Applications (SPAs)
          </button>
          <button
            onClick={() => handleServiceChange('ecom')}
            className="p-4 border border-white bg-transparent shadow-md shadow-purple-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-150"
          >
            E-Commerce Website Development
          </button>
          <button
            onClick={() => handleServiceChange('custom')}
            className="p-4 border border-white bg-transparent shadow-md shadow-purple-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-150"
          >
            Custom Website Development
          </button>
          <button
            onClick={() => handleServiceChange('cloud')}
            className="p-4 border border-white bg-transparent shadow-md shadow-purple-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-150"
          >
            Cloud Hosting & Deployment
          </button>
          <button
            onClick={() => handleServiceChange('maintence')}
            className="p-4 border border-white bg-transparent shadow-md shadow-purple-500 text-white font-medium rounded-md hover:scale-105 transition-transform duration-150"
          >
            Website Maintenance
          </button>
        </div>


        <div
          className={`servicesInfo  hidden md:block w-1/2 h-[400px] mt-16 text-[#ffefe8] transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <img
            className="h-[280px] w-[280px] mx-auto rounded-lg"
            src={getServiceImg(service)}
            alt="Service Image"
          />
          <p className="px-[50px] pt-4 text-center font-montserrat">
            {getServicePara(service)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
