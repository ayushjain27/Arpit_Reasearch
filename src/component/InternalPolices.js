import React, { useRef, useState } from "react";
import {
  ExternalLink,
  CheckCircle,
  X,
  Menu,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import HeaderTab from "./HeaderTab";

const InternalPolicies = () => {
  const [activeTab, setActiveTab] = useState("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);

  // Refs for each section
  const introductionRef = useRef(null);
  const applicabilityRef = useRef(null);
  const definitionsRef = useRef(null);
  const limitationsRef = useRef(null);
  const publicationRef = useRef(null);
  const disclosuresRef = useRef(null);
  const conditionsRef = useRef(null);

  const tabs = [
    { id: "introduction", title: "Introduction", ref: introductionRef },
    { id: "applicability", title: "Applicability", ref: applicabilityRef },
    { id: "definitions", title: "Definitions", ref: definitionsRef },
    { id: "limitations", title: "Trading Limitations", ref: limitationsRef },
    { id: "publication", title: "Publication", ref: publicationRef },
    { id: "disclosures", title: "Disclosures", ref: disclosuresRef },
    { id: "conditions", title: "Other Conditions", ref: conditionsRef },
  ];

  const scrollToSection = (ref, id) => {
    setActiveTab(id);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <HeaderTab />

        {/* Main Content */}
        <main className="max-w-7xl mt-16 mx-auto px-0 py-8">
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            {/* Header with title */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                INTERNAL POLICIES AND PROCEDURES TO EFFECTIVELY ADDRESS CONFLICT
                OF INTEREST
              </h1>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 sticky top-20 bg-white z-10">
              <nav className="flex overflow-x-auto">
                <div className="flex space-x-1 px-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.ref, tab.id)}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Content Area - All sections in one scrollable view */}
            <div className="p-6 md:p-8 space-y-4 max-h-[calc(100vh-315px)] overflow-y-auto">
              {/* Introduction Section */}
              <section ref={introductionRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    INTRODUCTION:
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      The Securities & Exchange Board of India (SEBI) has
                      formulated the SEBI Research Analyst regulations, 2014
                      under the powers conferred to it according to the SEBI
                      Act, 1992. These regulations became effective starting
                      December 1, 2014. A Research Analyst is required to follow
                      this code both in word and spirit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Applicability Section */}
              <section ref={applicabilityRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    APPLICABILITY:
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      This policy shall be applicable to Research Analyst
                      Arpit Goyal holding SEBI Registration No
                      INH000013129 and Associates; if any of the Research
                      Analyst.
                    </p>
                  </div>
                </div>
              </section>

              {/* Definitions Section */}
              <section ref={definitionsRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    IMPORTANT DEFINITIONS:
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      "Research Analyst" is a person primarily responsible for:
                    </p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>
                        Preparation or publication of the content of the
                        research report; or
                      </li>
                      <li>
                        Providing a research report or making recommendation or
                        giving price target; or
                      </li>
                      <li>
                        Offering an opinion on any security that is listed or to
                        be listed on a Stock Exchange.
                      </li>
                    </ol>
                    <p className="mt-2">
                      This term includes any associates of research analyst who
                      report directly or indirectly to the research analyst in
                      connection to the activities cited above.
                    </p>
                  </div>
                </div>
              </section>

              {/* Trading Limitations Section */}
              <section ref={limitationsRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    1. LIMITATIONS ON TRADING BY RESEARCH ANALYSTS:
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    POLICIES AND PROCEDURES:
                  </h3>
                  <div className="text-gray-700">
                    <p>Research Analysts shall not:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>
                        deal / trade in securities recommended / followed by the
                        research analyst within 30 days before and five days
                        after the publication of a research report;
                      </li>
                      <li>
                        deal / trade in securities that the research analyst
                        reviews in a manner contrary to his given
                        recommendation;
                      </li>
                      <li>
                        purchase or receive securities of the issuer before the
                        issuer's initial public offering, if the issuer is
                        principally engaged in the same types of business as
                        companies that the research analyst follows or
                        recommends.
                      </li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 mt-2">
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> The above restrictions to
                        trade/deal in securities shall not be applicable in case
                        of significant news or event concerning the subject
                        company or based upon an unanticipated significant
                        change in the personal financial circumstances of the
                        research analyst.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Publication Section */}
              <section ref={publicationRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    2. LIMITATION ON PUBLICATION OF RESEARCH REPORT, PUBLIC
                    APPEARANCE, CONDUCT OF BUSINESS ETC.
                  </h2>
                  <div className="text-gray-700 space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>
                        The Research Report issued by Research Analyst shall be
                        based on adequate documentary research evidence.
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Research Analyst shall not provide any promise or
                        assurance of favourable review in research report to the
                        Company or Industry as a consideration to commence or
                        influence a business relationship or for the receipt of
                        compensation or other benefits.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclosures Section */}
              <section ref={disclosuresRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    3. DISCLOSURES IN RESEARCH REPORT
                  </h2>
                  <div className="text-gray-700">
                    <p>
                      Research Analyst shall disclose all material information
                      about himself including the following in its research
                      reports:
                    </p>
                    <ol className="list-decimal pl-6 mt-2 space-y-2">
                      <li>
                        <strong>Business Activity</strong>
                      </li>
                      <li>
                        <strong>Disciplinary History</strong>
                      </li>
                      <li>
                        <strong>Terms and conditions</strong> on which it offers
                        research report
                      </li>
                      <li>
                        <strong>
                          Details with respect to Ownership and Material
                          Conflict of Interest
                        </strong>{" "}
                        such as:
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>
                            Whether Research Analyst or its/his associate or
                            relatives have any financial interest in the subject
                            company, if yes, together with nature of such
                            financial interest.
                          </li>
                          <li>
                            Whether Research Analyst or its/his associate or
                            relatives have actual / beneficial ownership of 1%
                            or more securities of subject company at the end of
                            the month immediately preceding the date of
                            publication of research report or date of public
                            appearance, as the case may be.
                          </li>
                          <li>
                            Details of actual / beneficial ownership of one
                            percent or more securities of the subject company,
                            at the end of month immediately preceding the date
                            of publication the research report or date of public
                            appearance.
                          </li>
                          <li>
                            Details of any material conflict of interest at the
                            time of publication of research report or at the
                            time of public appearance.
                          </li>
                          <li>
                            Details of any compensation received by Research
                            Analyst or its/his/her/their associates from the
                            subject company in past 12 months.
                          </li>
                          <li>
                            Details of whether Research Analyst or its
                            associates have managed or co-managed the public
                            offering of subject company in past 12 months.
                          </li>
                          <li>
                            Details of whether Research Analyst or its
                            associates have received any compensation for
                            investment banking or merchant banking or brokerage
                            services from the subject company in past 12 months.
                          </li>
                          <li>
                            Details of whether Research Analyst or its
                            associates have received any compensation for
                            products or services other than above from the
                            subject company in past 12 months.
                          </li>
                          <li>
                            Details of any compensation or other benefits
                            received by Research Analyst or its/his/her/their
                            associates from the subject company or 3rd party in
                            connection with the research report.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Research Analyst shall disclose in public appearance
                        with regard to receipt of compensation:
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Whether Research Analyst or its/his/her/their
                            associates have received any compensation from the
                            subject company in past 12 months
                          </span>
                        </div>
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Whether the subject company is/was client of
                            Research Analyst during 12 months preceding the date
                            of distribution of research report and the types of
                            such services provided by Research Analyst
                          </span>
                        </div>
                      </li>
                      <li>
                        Whether the Research Analyst has served as an officer,
                        director or employee of the subject company.
                      </li>
                      <li>
                        Whether Research Analyst has been engaged in market
                        making activity of the subject company
                      </li>
                      <li>
                        Such other disclosures in research reports / public
                        appearance as specified by SEBI under any other
                        regulations.
                      </li>
                      <li>
                        Such Research Reports reflects the factual information
                        about the subject company and are based on reliable
                        information. Such reports also contain the definition of
                        terms which are used in making recommendations and such
                        terms have been used consistently.
                      </li>
                      <li>
                        If such Research Reports contain either a rating or
                        price target for at least 1 year, the same shall also
                        provide for the graph of daily closing price of such
                        securities for the period assigned or for a 3-year
                        period, whichever is shorter.
                      </li>
                      <li>
                        Such Research Report Shall not be issued selectively to
                        internal trading personnel or to a particular client or
                        group of other clients in advance of other clients who
                        are entitled to receive the research report.
                      </li>
                      <li>
                        In case, Research Analyst appears in public media and
                        make any recommendation, the disclosure of his / its
                        name, registration status and details of financial
                        interest shall invariably made at the time of making
                        such recommendation or offering any opinion in his
                        personal capacity, responding to any queries of audience
                        or journalists in personal capacity and communicating
                        the research report or its substance through public
                        media.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Other Conditions Section */}
              <section ref={conditionsRef} className="scroll-mt-2">
                <div className="space-y-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    4. OTHER CONDITIONS:
                  </h2>
                  <div className="text-gray-700">
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        Research Analyst shall be NISM Certified or such other
                        certification for research analysts as specified by
                        SEBI.
                      </li>
                      <li>
                        Research Analyst shall maintain and preserve following
                        records for a minimum period of 5 years:
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Research recommendation provided</span>
                        </div>
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Rationale for arriving at research recommendation
                          </span>
                        </div>
                        <div className="flex items-start space-x-2 mt-1">
                          <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>Record of public appearance</span>
                        </div>
                      </li>
                      <li>
                        Research Analysts shall forthwith inform the Board in
                        writing about any information or particulars about
                        him/her/them submitted to SEBI, which are found to be
                        false or misleading in any material particular or are
                        there is any change in information already submitted.
                      </li>
                      <li>
                        Research Analyst shall conduct annual audit in respect
                        of compliance with the captioned SEBI Regulations from
                        member of ICAI or ICSI.
                      </li>
                    </ol>
                    <div className="mt-4 text-right">
                      <p className="font-medium">
                        Mr. Arpit Goyal
                      </p>
                      <p>Place: Hyderabad</p>
                      <p>Date: June 28, 2025</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer Note */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>SEBI Registered Research Analyst - INH000013129</p>
              <p className="mt-1">
                © {new Date().getFullYear()} Arpit Goyal Research. All rights
                reserved.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InternalPolicies;
