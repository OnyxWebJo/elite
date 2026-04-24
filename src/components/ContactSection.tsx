"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactSection({ dict }: { dict: any }) {
  const contact = dict.contactForm;

  return (
    <section id="contact" className="bg-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">
              {contact.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tight">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              {contact.desc}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <MapPin className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-1">Our Location</h4>
                  <p className="text-gray-600">{contact.locationText}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <Phone className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-1">Phone Number</h4>
                  <p className="text-gray-600">{contact.phoneText}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <Mail className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-1">Email Address</h4>
                  <p className="text-gray-600">{contact.emailText}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full group-hover:bg-red-600 transition-colors duration-300">
                  <MessageSquare className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-1">WhatsApp</h4>
                  <p className="text-gray-600">{contact.whatsappText}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 -z-10 translate-x-12 -translate-y-12 rounded-full"></div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {contact.formName}
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 px-4 py-4 outline-none focus:border-red-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {contact.formPhone}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-white border border-gray-200 px-4 py-4 outline-none focus:border-red-600 transition-colors"
                    placeholder="+964..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {contact.formInterest}
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-200 px-4 py-4 outline-none focus:border-red-600 transition-colors"
                    placeholder="e.g. Ford Mustang"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {contact.formMessage}
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-gray-200 px-4 py-4 outline-none focus:border-red-600 transition-colors resize-none"
                  placeholder="..."
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-3 group">
                {contact.formSubmit}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
