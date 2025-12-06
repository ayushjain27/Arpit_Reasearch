import React, { useState, useEffect } from "react";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import HeaderTab from "./HeaderTab";
import Logo from "./image/Logos.png";

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

  const AnimatedLogo = () => (
    <div className="flex flex-col">
      <div className="flex items-flex-start space-x-3">
        <div className="relative w-150 h-100">
          <img
            src={Logo}
            alt="Arpit Goyal Logo"
            className="h-13 w-auto"
          />
        </div>
      </div>
      <span className="text-center text-xs sm:text-sm text-white md:mt-0.5">
        by Arpit Goyal
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderTab />

      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="mb-12">
            <img
              src={Logo}
              alt="Company Logo"
              className="mx-auto h-24 w-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              We're working hard to bring you something amazing. Our new website
              with comprehensive equity research services is under development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">Data-driven equity analysis</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Updates</h3>
              <p className="text-gray-600">Regular market insights</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">SEBI registered analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <AnimatedLogo />
            </div>
            <div className="text-gray-400 text-sm">
              <p>SEBI Registered Research Analyst - INH000013129 | BSE Enlistment 5860</p>
              <p className="mt-2">© 2025 Arpit Goyal Research. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <TrendingUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ResearchServices;