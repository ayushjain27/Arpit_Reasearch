import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./image/Ananta_Research_logo.png";

const HeaderTab = ({
  onHomeClick,
  onServicesClick,
  onContactClick,
  onInvestorCharterClick,
  onInternalPoliciesClick,
  onStandardDisclosuresClick,
  onCodeOfConductClick,
  onGrievanceRedressalClick,
  onRefundPolicyClick,
  onPrivacyPolicyClick,
  onTermsAndConditionsClick,
  onComplaintDataClick,
}) => {
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setComplianceOpen(false);
  };

  const AnimatedLogo = () => (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => {
        if (onHomeClick) onHomeClick();
        closeMobileMenu();
      }}
    >
      <div className="flex items-center space-x-3">
        <div className="relative w-100 md:w-150 h-8 md:h-100">
          <img src={Logo} alt="Arpit Goyal Logo" className="h-11 w-auto" />
        </div>
      </div>
      <span className="text-xs sm:text-sm text-teal-700 mt-0.5 ml-0">
        by Arpit Goyal
      </span>
    </div>
  );

  const complianceItems = [
    {
      name: "Investor Charter",
      onClick: onInvestorCharterClick,
      id: "investor-charter",
    },
    {
      name: "Internal Policies",
      onClick: onInternalPoliciesClick,
      id: "internal-policies",
    },
    {
      name: "Standard Disclosures",
      onClick: onStandardDisclosuresClick,
      id: "standard-disclosures",
    },
    {
      name: "Code of Conduct",
      onClick: onCodeOfConductClick,
      id: "code-of-conduct",
    },
    {
      name: "Grievance Redressal",
      onClick: onGrievanceRedressalClick,
      id: "grievance-redressal",
    },
    {
      name: "Refund Policy",
      onClick: onRefundPolicyClick,
      id: "refund-policy",
    },
    {
      name: "Privacy Policy",
      onClick: onPrivacyPolicyClick,
      id: "privacy-policy",
    },
    {
      name: "Terms & Conditions",
      onClick: onTermsAndConditionsClick,
      id: "terms-conditions",
    },
    {
      name: "Complaint Data",
      onClick: onComplaintDataClick,
      id: "complaint-data",
    },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 transition-all duration-300
        bg-white/95 backdrop-blur-md shadow-lg"
      role="banner"
      aria-label="Main header"
    >
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-14 md:h-16">
          <AnimatedLogo />

          {/* Desktop Navigation - optimized for iPad */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
            <button
              onClick={() => {
                if (onHomeClick) onHomeClick();
              }}
              className="text-gray-700 hover:text-teal-700 transition-colors duration-200 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              Home
            </button>
            <button
              onClick={() => {
                if (onServicesClick) onServicesClick();
              }}
              className="text-gray-700 hover:text-teal-700 transition-colors duration-200 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              Research Services
            </button>
            <div className="relative">
              <button
                onClick={() => setComplianceOpen(!complianceOpen)}
                className="flex items-center text-gray-700 hover:text-teal-700 transition-colors duration-200 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                RA Compliance
                <ChevronDown
                  className={`w-3 h-3 lg:w-4 lg:h-4 ml-1 transition-transform duration-200 ${
                    complianceOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {complianceOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 max-h-96 overflow-y-auto">
                  {complianceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setComplianceOpen(false);
                      }}
                      className="block w-full text-left px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
              }}
              className="text-gray-700 hover:text-teal-700 transition-colors duration-200 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button - shows on screens smaller than iPad */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg p-1"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div className="md:hidden bg-white shadow-lg max-h-[calc(100vh-56px)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                if (onHomeClick) onHomeClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Home
            </button>
            <button
              onClick={() => {
                if (onServicesClick) onServicesClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Research Services
            </button>
            <div className="px-3 py-2">
              <button
                onClick={() => setComplianceOpen(!complianceOpen)}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-teal-700 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md px-2 py-1"
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
                  {complianceItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        closeMobileMenu();
                      }}
                      className="block w-full text-left px-3 py-2 text-xs text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
                closeMobileMenu();
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderTab;