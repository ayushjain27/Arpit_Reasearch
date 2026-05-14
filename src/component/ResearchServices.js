import React, { useState, useEffect } from "react";
import { TrendingUp, Mail, MapPin, FileText } from "lucide-react";
import Logo from "./image/Ananta_Research_logo.png";

const ResearchServices = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Coming Soon Section */}
      <section className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src={Logo}
              alt="Company Logo"
              className="mx-auto h-40 w-auto mb-6"
            />
            <div className="flex items-center justify-center mb-4">
              <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <FileText className="w-3 h-3 mr-1" />
                SEBI Registered Research Analyst - INH000013129 | BSE Enlistment
                5860
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're working hard to bring you something amazing. Our new website
              with comprehensive equity research services is under development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Research
              </h3>
              <p className="text-sm text-gray-600">
                Data-driven equity analysis
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Updates
              </h3>
              <p className="text-sm text-gray-600">Regular market insights</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Expertise
              </h3>
              <p className="text-sm text-gray-600">SEBI registered analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <TrendingUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ResearchServices;
