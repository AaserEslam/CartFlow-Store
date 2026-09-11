import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import PageTransition from '../Shared/PageTransition';

const Contact = () => {
  return (
    
    <PageTransition>
          <div className="min-h-screen  dark:bg-gray-800 text-white py-12 px-6 transition-all duration-300">
      <div className="max-w-5xl mx-auto text-center mb-12 w-fit">
        <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-primary to-secondry">
          Get In Touch
        </h1>
        <p className="text-text dark:text-gray-400">Have questions? We'd love to hear from you.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="bg-gray-600/20 dark:bg-gray-500/20 border border-purple-900/40 p-5 rounded-xl flex items-center gap-4">
            <div className="text-2xl text-fuchsia-500"><FaEnvelope /></div>
            <div>
              <p className="text-xs text-text font-semibold dark:text-gray-400">Email Us</p>
              <p className="text-sm text-gray-800 dark:text-white font-semibold">support@cartflow.com</p>
            </div>
          </div>

          <div className="bg-gray-600/20 dark:bg-gray-500/20 border border-purple-900/40 p-5 rounded-xl flex items-center gap-4">
            <div className="text-2xl text-fuchsia-500"><FaPhoneAlt /></div>
            <div>
              <p className="text-xs text-text font-semibold dark:text-gray-400">Call Us</p>
              <p className="text-sm text-gray-800 dark:text-white font-semibold">+20 123 456 7890</p>
            </div>
          </div>

          <div className="bg-gray-600/20 dark:bg-gray-500/20 border border-purple-900/40 p-5 rounded-xl flex items-center gap-4">
            <div className="text-2xl text-fuchsia-500"><FaMapMarkerAlt /></div>
            <div>
              <p className="text-xs text-text font-semibold dark:text-gray-400">Location</p>
              <p className="text-sm text-gray-800 dark:text-white font-semibold">Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-gray-600/20 dark:bg-gray-500/20 border border-purple-900/40 p-8 rounded-2xl shadow-xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-gray-600/20 dark:bg-gray-500/20  border-2 border-gray-500 rounded-lg p-3 text-sm focus:border-primary outline-none transition-all duration-300 placeholder:text-text dark:placeholder:text-gray-300 placeholder:font-semibold text-text dark:text-white" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full  bg-gray-600/20 dark:bg-gray-500/20  border-2 border-gray-500 rounded-lg p-3 text-sm focus:border-primary outline-none transition-all duration-300 placeholder:text-text dark:placeholder:text-gray-300 placeholder:font-semibold text-text dark:text-white" 
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-gray-600/20 dark:bg-gray-500/20 border-2 border-gray-500 rounded-lg p-3 text-sm focus:border-primary outline-none transition-all duration-300 placeholder:text-text dark:placeholder:text-gray-300 placeholder:font-semibold text-text dark:text-white" 
            />
            <textarea 
              rows="4" 
              placeholder="Your Message" 
              className="w-full bg-gray-600/20 dark:bg-gray-500/20 border-2 border-gray-500 rounded-lg p-3 text-sm focus:border-primary outline-none transition-all duration-300 placeholder:text-text dark:placeholder:text-gray-300 placeholder:font-semibold text-text dark:text-white resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 bg-linear-to-r from-primary to-secondry rounded-lg font-bold hover:tracking-widest transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  
  )
}

export default Contact