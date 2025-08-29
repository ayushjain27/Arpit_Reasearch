import React from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import HeaderTab from "./HeaderTab";

const ContactUs = () => {
  const phoneNumber = "+919179231876";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  const mailToLink = "mailto:agbpl2354@gmail.com";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderTab />

      {/* Main Content - Removed maxHeight and overflow-y-auto */}
      <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            CONTACT US
          </h1>
        </div>
        
        {/* Removed inline style with maxHeight */}
        <div className="bg-white rounded-b-lg shadow-sm border border-gray-200">
          {/* Content Sections */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Contact Details Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-100 rounded-full text-blue-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-700">
                        
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-green-100 rounded-full text-green-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <a 
                          href={`tel:${phoneNumber}`}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                        <a 
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 4.315h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Email & Hours */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-purple-100 rounded-full text-purple-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <a 
                        href={mailToLink}
                        className="text-blue-600 hover:underline"
                      >
                        agbpl2354@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-orange-100 rounded-full text-orange-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Working Hours</h3>
                      <p className="text-gray-700">
                        Monday to Friday<br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>SEBI Registered Research Analyst - INH000013129</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Arpit Goyal Research. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;