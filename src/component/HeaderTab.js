import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./image/Logos.png";

const HeaderTab = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("dmlkernk");
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setComplianceOpen(false);
      }
    };

    if (complianceOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [complianceOpen]);

  const AnimatedLogo = () => (
    <div className="flex flex-col">
      <div className="flex items-flex-start space-x-3">
        <div className="relative w-100 md:w-150 h-8 md:h-100">
          <img
            src={Logo} // Replace with your actual logo path
            alt="AKV Equity Research Logo"
            className="h-11 w-auto" // Adjust height as needed
          />
        </div>
      </div>
      <span className="text-xs sm:text-sm text-gray-600 mt-0.5 ml-3">
        by Arpit Goyal
      </span>
    </div>
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 transition-all duration-300
        bg-white/95 backdrop-blur-md shadow-lg"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <AnimatedLogo />

          {/* Desktop Navigation - optimized for iPad */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Home
            </a>
            <a
              href="https://superprofile.bio/akvequityresearch"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Research Services
            </a>
            <div className="relative">
              <button
                onClick={() => setComplianceOpen(!complianceOpen)}
                className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                RA Compliance
                <ChevronDown
                  className={`w-3 h-3 lg:w-4 lg:h-4 ml-1 transition-transform duration-200 ${
                    complianceOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {complianceOpen && (
                <div className="absolute left-0 mt-2 w-48 lg:w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  <a
                    href="/investorCharter"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Investor Charter
                  </a>
                  <a
                    href="/internalPolicies"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Internal Policies
                  </a>
                  <a
                    href="/disclosure"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Disclosures
                  </a>
                  <a
                    href="/codeOfConduct"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Code of Conduct
                  </a>
                  <a
                    href="/grievance"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Grievance Redressal
                  </a>
                  <a
                    href="/refundPolicy"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Refund Policy
                  </a>
                  <a
                    href="/privacyPolicy"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/termsAndConditions"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="/complaintData"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Complaint Data
                  </a>
                </div>
              )}
            </div>
            <a
              href="/contact"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button - shows on screens smaller than iPad */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="https://superprofile.bio/akvequityresearch"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research Services
            </a>
            <div className="px-3 py-2">
              <button
                onClick={() => setComplianceOpen(!complianceOpen)}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 w-full"
              >
                RA Compliance
                <ChevronDown
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                    complianceOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {complianceOpen && (
                <div className="mt-2 pl-4 space-y-1">
                  <a
                    href="/investorCharter"
                    className="block px-3 py-2 text-xs text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Investor Charter
                  </a>
                  <a
                    href="/internalPolicies"
                    className="block px-3 py-2 text-xs text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Internal Policies
                  </a>
                  <a
                    href="/disclosure"
                    className="block px-3 py-2 text-xs text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Disclosures
                  </a>
                  <a
                    href="/codeOfConduct"
                    className="block px-3 py-2 text-xs text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Code of Conduct
                  </a>
                  <a
                    href="/grievance"
                    className="block px-3 py-2 text-xs text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Grievance Redressal
                  </a>
                  <a
                    href="/refundPolicy"
                    className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Refund Policy
                  </a>
                  <a
                    href="/privacyPolicy"
                    className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/termsAndConditions"
                    className="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="/complaintData"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Complaint Data
                  </a>
                </div>
              )}
            </div>
            <a
              href="/contact"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderTab;
