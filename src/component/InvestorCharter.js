/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";

const InvestorCharterContent = () => {
  const [activeTab, setActiveTab] = useState("vision");

  // Refs for each section
  const visionRef = useRef(null);
  const businessRef = useRef(null);
  const servicesRef = useRef(null);
  const grievanceRef = useRef(null);
  const rightsRef = useRef(null);
  const responsibilitiesRef = useRef(null);
  const complaintsRef = useRef(null);

  const tabs = [
    { id: "vision", title: "Vision & Mission", ref: visionRef },
    { id: "business", title: "Business Details", ref: businessRef },
    { id: "services", title: "Services", ref: servicesRef },
    { id: "grievance", title: "Grievance Redressal", ref: grievanceRef },
    { id: "rights", title: "Investor Rights", ref: rightsRef },
    {
      id: "responsibilities",
      title: "Investor Responsibilities",
      ref: responsibilitiesRef,
    },
    { id: "complaints", title: "Complaint Data", ref: complaintsRef },
  ];

  const scrollToSection = (ref, id) => {
    setActiveTab(id);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header with title */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Investor Charter
        </h1>
        <p className="text-teal-100 mt-1">
          In respect of Research Analyst (RA)
        </p>
      </div>

      {/* FIXED: Tabs with ARIA roles */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div
          role="tablist"
          aria-label="Investor Charter Sections"
          className="flex space-x-1 px-4 overflow-x-auto"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => scrollToSection(tab.ref, tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-teal-500 text-[#222222] bg-white"
                  : "border-transparent hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area - All sections in one scrollable view */}
      <div className="p-6 md:p-8 space-y-8 max-h-[600px] overflow-y-auto">
        {/* Vision & Mission Section */}
        <div>
          <section
            ref={visionRef}
            role="tabpanel"
            id="panel-vision"
            aria-labelledby="tab-vision"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Vision & Mission
              </h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-teal-800">Vision</h3>
                <p className="text-lg text-gray-700">
                  Invest with knowledge & safety.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-800">Mission</h3>
                <p className="text-lg text-gray-700">
                  Every investor should be able to invest in right investment
                  products based on their needs, manage and monitor them to meet
                  their goals, access reports and enjoy financial wellness.
                </p>
              </div>
            </div>
          </section>

          {/* Business Details Section */}
          <section
            ref={businessRef}
            role="tabpanel"
            id="panel-business"
            aria-labelledby="tab-business"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Details of business transacted by the Research Analyst with
                respect to the investors
              </h2>
              <ul className="space-y-2 list-disc pl-6 text-gray-700">
                <li>
                  To publish research report based on the research activities of
                  the RA
                </li>
                <li>To provide an independent unbiased view on securities.</li>
                <li>
                  To offer unbiased recommendation, disclosing the financial
                  interests in recommended securities.
                </li>
                <li>
                  To provide research recommendation, based on analysis of
                  publicly available information and known observations.
                </li>
                <li>To conduct audit annually</li>
                <li>
                  To ensure that all advertisements are in adherence to the
                  provisions of the Advertisement Code for Research Analysts.
                </li>
                <li>
                  To maintain records of interactions, with all clients
                  including prospective clients (prior to onboarding), where any
                  conversation related to the research services has taken place.
                </li>
              </ul>
            </div>
          </section>

          {/* Services Section */}
          <section
            ref={servicesRef}
            role="tabpanel"
            id="panel-services"
            aria-labelledby="tab-services"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Details of services provided to investors (No Indicative
                Timelines)
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Onboarding of Clients
                </h3>
                <ul className="space-y-1 list-disc pl-6 text-gray-700">
                  <li>Sharing of terms and conditions of research services</li>
                  <li>Completing KYC of fee paying clients</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Disclosure to Clients:
                </h3>
                <ul className="space-y-1 list-disc pl-6 text-gray-700">
                  <li>
                    To disclose, information that is material for the client to
                    make an informed decision, including details of its business
                    activity, disciplinary history, the terms and conditions of
                    research services, details of associates, risks and
                    conflicts of interest, if any
                  </li>
                  <li>
                    To disclose the extent of use of Artificial Intelligence
                    tools in providing research services
                  </li>
                  <li>
                    To disclose, while distributing a third party research
                    report, any material conflict of interest of such third
                    party research provider or provide web address that directs
                    a recipient to the relevant disclosures
                  </li>
                  <li>
                    To disclose any conflict of interest of the activities of
                    providing research services with other activities of the
                    research analyst.
                  </li>
                  <li>
                    To distribute research reports and recommendations to the
                    clients without discrimination.
                  </li>
                  <li>
                    To maintain confidentiality w.r.t publication of the
                    research report until made available in the public domain.
                  </li>
                  <li>
                    To respect data privacy rights of clients and take measures
                    to protect unauthorized use of their confidential
                    information
                  </li>
                  <li>
                    To disclose the timelines for the services provided by the
                    research analyst to clients and ensure adherence to the said
                    timelines
                  </li>
                  <li>
                    To provide clear guidance and adequate caution notice to
                    clients when providing recommendations for dealing in
                    complex and high-risk financial products/services
                  </li>
                  <li>To treat all clients with honesty and integrity</li>
                  <li>
                    To ensure confidentiality of information shared by clients
                    unless such information is required to be provided in
                    furtherance of discharging legal obligations or a client has
                    provided specific consent to share such information.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Grievance Redressal Section */}
          <section
            ref={grievanceRef}
            role="tabpanel"
            id="panel-grievance"
            aria-labelledby="tab-grievance"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Details of grievance redressal mechanism and how to access it
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">
                  1. Investor can lodge complaint/grievance against Research
                  Analyst in the following ways:
                </h3>

                <div className="mt-3">
                  <h4 className="font-bold text-gray-800">
                    Mode of filing the complaint with research analyst
                  </h4>
                  <p className="text-gray-700 mb-3">
                    In case of any grievance / complaint, an investor may
                    approach the concerned Research Analyst who shall strive to
                    redress the grievance immediately, but not later than 21
                    days of the receipt of the grievance.
                  </p>

                  <h4 className="font-bold text-gray-800">
                    Mode of filing the complaint on SCORES or with Research
                    Analyst Administration and Supervisory Body (RAASB)
                  </h4>
                  <ul className="space-y-1 list-disc pl-6 text-gray-700">
                    <li>
                      <span className="font-medium">SCORES 2.0</span> (a web
                      based centralized grievance redressal system of SEBI for
                      facilitating effective grievance redressal in time-bound
                      manner)
                      <a
                        href="https://scores.sebi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#222222] hover:underline ml-2"
                        aria-label="SCORES website (opens in new tab)"
                      >
                        (https://scores.sebi.gov.in){" "}
                        <ExternalLink className="inline w-4 h-4" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      Two level review for complaint/grievance against Research
                      Analyst:
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>First review done by designated body (RAASB)</li>
                        <li>Second review done by SEBI</li>
                      </ul>
                    </li>
                    <li>Email to designated email ID of RAASB</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-gray-800">
                    2. If the Investor is not satisfied with the resolution
                    provided by the Market Participants
                  </h4>
                  <p className="text-gray-700">
                    Then the Investor has the option to file the complaint/
                    grievance on SMARTODR platform for its resolution through
                    online conciliation or arbitration.
                    <a
                      href="https://smartodr.in/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#222222] hover:underline ml-2"
                      aria-label="SMARTODR platform (opens in new tab)"
                    >
                      (https://smartodr.in/login){" "}
                      <ExternalLink className="inline w-4 h-4" aria-hidden="true" />
                    </a>
                  </p>
                </div>

                <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">
                    With regard to physical complaints, investors may send their
                    complaints to:
                  </h4>
                  <address className="text-gray-700 not-italic">
                    <strong>
                      Office of Investor Assistance and Education,
                    </strong>
                    <br />
                    <strong>Securities and Exchange Board of India,</strong>
                    <br />
                    SEBI Bhavan, Plot No. C4-A, 'G' Block,
                    <br />
                    Bandra-Kurla Complex, Bandra (E),
                    <br />
                    Mumbai - 400 051
                  </address>
                </div>
              </div>
            </div>
          </section>

          {/* Investor Rights Section */}
          <section
            ref={rightsRef}
            role="tabpanel"
            id="panel-rights"
            aria-labelledby="tab-rights"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Rights of investors
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Right to Privacy and Confidentiality",
                  "Right to Transparent Practices",
                  "Right to fair and Equitable Treatment",
                  "Right to Adequate Information",
                ].map((right, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#222222] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#222222] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 font-medium">
                      Right to Initial and Continuing Disclosure
                    </span>
                  </div>
                  <div className="ml-8 mt-2 space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500">-</span>
                      <span className="text-gray-700">
                        Right to receive information about all the statutory and
                        regulatory disclosures
                      </span>
                    </div>
                  </div>
                </div>
                {[
                  "Right to Fair & True Advertisement",
                  "Right to Awareness about Service Parameters and Turnaround Times",
                  "Right to be informed of the timelines for each service",
                  "Right to be Heard and Satisfactory Grievance Redressal",
                  "Right to have timely redressal",
                  "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst",
                  "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services",
                ].map((right, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#222222] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#222222] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 font-medium">
                      Additional Rights to vulnerable consumers
                    </span>
                  </div>
                  <div className="ml-8 mt-2 space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500">-</span>
                      <span className="text-gray-700">
                        Right to get access to services in a suitable manner
                        even if differently abled
                      </span>
                    </div>
                  </div>
                </div>
                {[
                  "Right to provide feedback on the financial products and services used",
                  "Right against coercive, unfair, and one-sided clauses in financial agreements",
                ].map((right, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#222222] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Investor Responsibilities Section */}
          <section
            ref={responsibilitiesRef}
            role="tabpanel"
            id="panel-responsibilities"
            aria-labelledby="tab-responsibilities"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Expectations from the investors (Responsibilities of investors)
              </h2>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">
                  Do's
                </h3>
                <ol className="space-y-2 list-decimal pl-6 text-gray-700">
                  <li>Always deal with SEBI registered Research Analyst.</li>
                  <li>
                    Ensure that the Research Analyst has a valid registration
                    certificate.
                  </li>
                  <li>
                    Check for SEBI registration number.
                    <div className="mt-2 text-sm bg-white p-3 rounded-lg border border-gray-200">
                      Please refer to the list of all SEBI registered Research
                      Analysts which is available on SEBI website in the
                      following link:
                      <a
                        href="https://www.sebi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#222222] hover:underline ml-1"
                        aria-label="SEBI website (opens in new tab)"
                      >
                        (https://www.sebi.gov.in){" "}
                        <ExternalLink className="inline w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                  <li>
                    Always pay attention towards disclosures made in the
                    research reports before investing.
                  </li>
                  <li>
                    Pay your Research Analyst through banking channels only and
                    maintain duly signed receipts mentioning the details of your
                    payments. You may make payment of fees through Centralized
                    Fee Collection Mechanism (CeFCoM) of RAASB if research
                    analyst has opted for the mechanism. (Applicable for fee
                    paying clients only)
                  </li>
                  <li>
                    Before buying/ selling securities or applying in public
                    offer, check for the research recommendation provided by
                    your Research Analyst.
                  </li>
                  <li>
                    Ask all relevant questions and clear your doubts with your
                    Research Analyst before acting on recommendation.
                  </li>
                  <li>
                    Seek clarifications and guidance on research recommendations
                    from your Research Analyst, especially if it involves
                    complex and high risk financial products and services.
                  </li>
                  <li>
                    Always be aware that you have the right to stop availing the
                    service of a Research Analyst as per the terms of service
                    agreed between you and your Research Analyst.
                  </li>
                  <li>
                    Always be aware that you have the right to provide feedback
                    to your Research Analyst in respect of the services
                    received.
                  </li>
                  <li>
                    Always be aware that you will not be bound by any clause,
                    prescribed by the research analyst, which is contravening
                    any regulatory provisions.
                  </li>
                  <li>
                    Inform SEBI about Research Analyst offering assured or
                    guaranteed returns.
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-700 mb-3">
                  Don'ts
                </h3>
                <ol className="space-y-2 list-decimal pl-6 text-gray-700">
                  <li>
                    Do not provide funds for investment to the Research Analyst.
                  </li>
                  <li>
                    Don't fall prey to luring advertisements or market rumors.
                  </li>
                  <li>
                    Do not get attracted to limited period discount or other
                    incentive, gifts, etc. offered by Research Analyst.
                  </li>
                  <li>
                    Do not share login credential and password of your trading,
                    demat or bank accounts with the Research Analyst.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Complaint Data Section */}
          <section
            ref={complaintsRef}
            role="tabpanel"
            id="panel-complaints"
            aria-labelledby="tab-complaints"
            className="scroll-mt-24"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Complaint Data to be displayed by RAs
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 mb-4">
                  Data for the month ending - June 2026
                </p>

                <div
                  role="region"
                  aria-label="Investor Charter complaint data table"
                  tabIndex={0}
                  className="overflow-x-auto"
                >
                  <table className="min-w-full border border-gray-200 text-sm">
                    <caption className="sr-only">
                      Complaint data summary table showing received, resolved,
                      and pending complaints
                    </caption>
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Sr. No.
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Received from
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Pending at the end of last month
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Received
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Resolved*
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Total Pending#
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Pending complaints &gt; 3 months
                        </th>
                        <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                          Average Resolution time^ (in days)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-200 px-3 py-2">1</td>
                        <td className="border border-gray-200 px-3 py-2">
                          Directly from Investors
                        </td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-3 py-2">2</td>
                        <td className="border border-gray-200 px-3 py-2">
                          SEBI (SCORES)
                        </td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-3 py-2">3</td>
                        <td className="border border-gray-200 px-3 py-2">
                          Other Sources (if any)
                        </td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                      </tr>
                      <tr className="font-medium">
                        <td className="border border-gray-200 px-3 py-2"></td>
                        <td className="border border-gray-200 px-3 py-2">
                          Grand Total
                        </td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                        <td className="border border-gray-200 px-3 py-2">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Resolved complaints within 30 days
                  <br />
                  # Pending complaints requiring resolution
                  <br />^ Average time taken to resolve complaints
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center text-sm text-gray-500 py-4 border-t">
        <p> SEBI Registered Research Analyst - INH000013129 | BSE Enlistment 5860</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Ananta Research. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default InvestorCharterContent;