import React from 'react'
import { FaAward, FaHeadset, FaShieldAlt, FaShippingFast } from 'react-icons/fa';
import PageTransition from '../Shared/PageTransition';

const About = () => {
const features = [
    { icon: <FaShippingFast />, title: 'Fast Shipping', desc: 'Worldwide delivery within 3-5 days' },
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Dedicated customer support anytime' },
    { icon: <FaShieldAlt />, title: 'Secure Payment', desc: '100% encrypted and safe checkout' },
    { icon: <FaAward />, title: 'Top Quality', desc: 'Handpicked products from verified sources' },
  ];

  return (
    <PageTransition>
          <div className="min-h-screen dark:bg-gray-800 text-white py-12 px-6 transition-all duration-300">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-primary to-secondry">
            Redefining Modern E-Commerce
          </h1>
          <p className="text-text dark:text-gray-300 leading-relaxed mb-6">
            At CartFlow, We blend cutting-edge UI design with seamless functionality to bring you the best online shopping experience. Our mission is to make high-quality products accessible, fast, and stylish.
          </p>
        </div>
        <div className="relative border-2 border-primary rounded-2xl overflow-hidden hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-600">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
            alt="CartFlow Team" 
            className="w-full h-80 object-cover hover:scale-110 transition-all duration-600 "
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-gray-600/20 dark:bg-gray-500/20 border-2 border-primary p-6 rounded-xl hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 shadow-lg">
            <div className="text-3xl text-primary mb-4">{item.icon}</div>
            <h3 className="text-text dark:text-white text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-text dark:text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
}

export default About