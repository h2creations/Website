import React, { useState } from 'react';

const PlansPricing = ({ setSelectedPlan }) => {
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    document.getElementById('ContactUs').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      id="Plans&Pricing"
      className="bg-gradient-to-bl from-gray-800 to-black py-10"
    >
      <h1 className="text-center md:text-3xl text-2xl text-white font-Sriracha underline underline-offset-8 mb-12">
        Plans & Pricing
      </h1>
      <div className="md:flex w-[280px] md:w-auto md:space-x-14 justify-center mx-auto">
        {/* Starter Plan */}
        <div
          id="Standard"
          className="md:w-[372px] shadow-lg shadow-[#a7a1a1d3] bg-gradient-to-br from-blue-100 via-[#95abab] to-[#415353] rounded-lg p-6 mb-8 md:mb-0"
        >
          <h1 className="text-center text-xl font-bold font-roboto mb-4">STARTER PLAN</h1>
          <span className="block text-center text-lg text-gray-800 font-medium mb-6">Price: ₹2,999</span>
          <div>
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <ul className="pl-6 list-disc list-inside space-y-2 text-gray-700">
              <li>Single-page website (SPA)</li>
              <li>Mobile-friendly design</li>
              <li>Basic SEO setup</li>
              <li>Contact form</li>
              <li>Hosting support for 6 months</li>
            </ul>
          </div>
          <button  onClick={() => handleSelectPlan('Starter Plan')} className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Select Plan
          </button>
        </div>

        {/* Business Plan */}
        <div
          id="Business"
          className="md:w-[372px]  shadow-lg shadow-teal-900 bg-gradient-to-br from-green-100 via-[#3fa8a8] to-[teal] rounded-lg p-6 mb-8 md:mb-0"
        >
          <h1 className="text-center text-xl font-bold font-roboto mb-4">BUSINESS PLAN</h1>
          <span className="block text-center text-lg text-gray-800 font-medium mb-6">Price: ₹6,999</span>
          <div>
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <ul className="pl-6 list-disc list-inside space-y-2 text-gray-700">
              <li>Multi-page website (up to 5 pages)</li>
              <li>Custom design to match branding</li>
              <li>Intermediate SEO optimization</li>
              <li>Social media integration</li>
              <li>Hosting and maintenance for 1 year</li>
            </ul>
          </div>
          <button onClick={() => handleSelectPlan('Business Plan')} className="w-full mt-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
            Select Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div
          id="Premium"
          className="md:w-[372px] shadow-lg shadow-[#efdd7c] bg-gradient-to-br from-[#eee8c6] via-[#f1e080] to-[#ead03d] rounded-lg p-6"
        >
          <h1 className="text-center text-xl font-bold font-roboto mb-4">PREMIUM PLAN</h1>
          <span className="block text-center text-lg text-gray-800 font-medium mb-6">Price: ₹12,999</span>
          <div>
            <h2 className="text-lg font-semibold mb-3">Features</h2>
            <ul className="pl-6 list-disc list-inside space-y-2 text-gray-700">
              <li>E-commerce website or custom web app</li>
              <li>UI/UX consultation</li>
              <li>SEO and performance optimization</li>
              <li>Integration with APIs (payment gateways)</li>
              <li>Hosting, maintenance, and updates for 1 year</li>
            </ul>
          </div>
          <button onClick={() => handleSelectPlan('Premium Plan')} className="w-full mt-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansPricing;
