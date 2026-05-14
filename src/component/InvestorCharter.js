import React, { useRef, useState } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import HeaderTab from "./HeaderTab";

const InvestorCharter = () => {
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
      {/* Header with title - matching reference gradient */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Investor Charter
        </h1>
        <p className="text-teal-100 mt-1 text-sm md:text-base">
          In respect of Research Analyst (RA)
        </p>
      </div>

      {/* Tabs - sticky with white background */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <nav className="flex overflow-x-auto">
          <div className="flex space-x-1 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.ref, tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-teal-500 text-teal-600"
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
      <div className="p-4 md:p-6 space-y-4 max-h-[600px] overflow-y-auto">
        {/* Vision & Mission Section */}
        <section ref={visionRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Vision & Mission
            </h2>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-teal-800">
                Vision
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Invest with knowledge & safety.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800">
                Mission
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Every investor should be able to invest in right investment
                products based on their needs, manage and monitor them to meet
                their goals, access reports and enjoy financial wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Business Details Section */}
        <section ref={businessRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Details of business transacted by the Research Analyst with
              respect to the investors
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm md:text-base">
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
                To maintain records of interactions, with all clients including
                prospective clients (prior to onboarding), where any
                conversation related to the research services has taken place.
              </li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Details of services provided to investors (No Indicative
              Timelines)
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-2">
                Onboarding of Clients
              </h3>
              <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Sharing of terms and conditions of research services</li>
                <li>Completing KYC of fee paying clients</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-2">
                Disclosure to Clients:
              </h3>
              <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>
                  To disclose, information that is material for the client to
                  make an informed decision, including details of its business
                  activity, disciplinary history, the terms and conditions of
                  research services, details of associates, risks and conflicts
                  of interest, if any
                </li>
                <li>
                  To disclose the extent of use of Artificial Intelligence tools
                  in providing research services
                </li>
                <li>
                  To disclose, while distributing a third party research report,
                  any material conflict of interest of such third party research
                  provider or provide web address that directs a recipient to
                  the relevant disclosures
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
                  To maintain confidentiality w.r.t publication of the research
                  report until made available in the public domain.
                </li>
                <li>
                  To respect data privacy rights of clients and take measures to
                  protect unauthorized use of their confidential information
                </li>
                <li>
                  To disclose the timelines for the services provided by the
                  research analyst to clients and ensure adherence to the said
                  timelines
                </li>
                <li>
                  To provide clear guidance and adequate caution notice to
                  clients when providing recommendations for dealing in complex
                  and high-risk financial products/services
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
        <section ref={grievanceRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Details of grievance redressal mechanism and how to access it
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">
                1. Investor can lodge complaint/grievance against Research
                Analyst in the following ways:
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">
                    Mode of filing the complaint with research analyst
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base mt-1">
                    In case of any grievance / complaint, an investor may
                    approach the concerned Research Analyst who shall strive to
                    redress the grievance immediately, but not later than 21
                    days of the receipt of the grievance.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">
                    Mode of filing the complaint on SCORES or with Research
                    Analyst Administration and Supervisory Body (RAASB)
                  </h4>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm md:text-base mt-1">
                    <li>
                      <span className="font-medium">SCORES 2.0</span> (a web
                      based centralized grievance redressal system of SEBI for
                      facilitating effective grievance redressal in time-bound
                      manner)
                      <a
                        href="https://scores.sebi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline ml-2"
                      >
                        (https://scores.sebi.gov.in){" "}
                        <ExternalLink className="inline w-4 h-4" />
                      </a>
                    </li>
                    <li>
                      Two level review for complaint/grievance against Research
                      Analyst:
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>First review done by designated body (RAASB)</li>
                        <li>Second review done by SEBI</li>
                      </ul>
                    </li>
                    <li>Email to designated email ID of RAASB</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">
                    2. If the Investor is not satisfied with the resolution
                    provided by the Market Participants
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base mt-1">
                    Then the Investor has the option to file the complaint/
                    grievance on SMARTODR platform for its resolution through
                    online conciliation or arbitration.
                    <a
                      href="https://smartodr.in/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline ml-2"
                    >
                      (https://smartodr.in/login){" "}
                      <ExternalLink className="inline w-4 h-4" />
                    </a>
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">
                    With regard to physical complaints, investors may send their
                    complaints to:
                  </h4>
                  <address className="text-gray-700 not-italic text-sm md:text-base mt-1">
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
          </div>
        </section>

        {/* Investor Rights Section */}
        <section ref={rightsRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
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
                  className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    {right}
                  </span>
                </div>
              ))}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    Right to Initial and Continuing Disclosure
                  </span>
                </div>
                <div className="ml-8 mt-2 space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">-</span>
                    <span className="text-gray-700 text-sm md:text-base">
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
                  className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    {right}
                  </span>
                </div>
              ))}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    Additional Rights to vulnerable consumers
                  </span>
                </div>
                <div className="ml-8 mt-2 space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500">-</span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Right to get access to services in a suitable manner even
                      if differently abled
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
                  className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    {right}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Responsibilities Section */}
        <section ref={responsibilitiesRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Expectations from the investors (Responsibilities of investors)
            </h2>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">
                Do's
              </h3>
              <ol className="space-y-2 list-decimal pl-5 text-gray-700 text-sm md:text-base">
                <li>Always deal with SEBI registered Research Analyst.</li>
                <li>
                  Ensure that the Research Analyst has a valid registration
                  certificate.
                </li>
                <li>
                  Check for SEBI registration number.
                  <div className="mt-2 text-sm bg-white p-3 rounded-lg border border-gray-200">
                    Please refer to the list of all SEBI registered Research
                    Analysts which is available on SEBI website in the following
                    link:
                    <a
                      href="https://www.sebi.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline ml-1"
                    >
                      (https://www.sebi.gov.in){" "}
                      <ExternalLink className="inline w-4 h-4" />
                    </a>
                  </div>
                </li>
                <li>
                  Always pay attention towards disclosures made in the research
                  reports before investing.
                </li>
                <li>
                  Pay your Research Analyst through banking channels only and
                  maintain duly signed receipts mentioning the details of your
                  payments. You may make payment of fees through Centralized Fee
                  Collection Mechanism (CeFCoM) of RAASB if research analyst has
                  opted for the mechanism. (Applicable for fee paying clients
                  only)
                </li>
                <li>
                  Before buying/ selling securities or applying in public offer,
                  check for the research recommendation provided by your
                  Research Analyst.
                </li>
                <li>
                  Ask all relevant questions and clear your doubts with your
                  Research Analyst before acting on recommendation.
                </li>
                <li>
                  Seek clarifications and guidance on research recommendations
                  from your Research Analyst, especially if it involves complex
                  and high risk financial products and services.
                </li>
                <li>
                  Always be aware that you have the right to stop availing the
                  service of a Research Analyst as per the terms of service
                  agreed between you and your Research Analyst.
                </li>
                <li>
                  Always be aware that you have the right to provide feedback to
                  your Research Analyst in respect of the services received.
                </li>
                <li>
                  Always be aware that you will not be bound by any clause,
                  prescribed by the research analyst, which is contravening any
                  regulatory provisions.
                </li>
                <li>
                  Inform SEBI about Research Analyst offering assured or
                  guaranteed returns.
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 md:p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg md:text-xl font-semibold text-orange-700 mb-3">
                Don'ts
              </h3>
              <ol className="space-y-2 list-decimal pl-5 text-gray-700 text-sm md:text-base">
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
        <section ref={complaintsRef} className="scroll-mt-24">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Complaint Data to be displayed by RAs
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Data for the month ending - July 2025
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
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

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p className="font-medium">
                  Number of complaints received during month against the RA due
                  to impersonation by some other entity: 0
                </p>
                <p>
                  <strong>Note:</strong> In case of any complaints received
                  against the RA due to impersonation of the RA by some other
                  entity, the RA may adjust the number of such complaints from
                  total number of received/resolved complaints while preparing
                  the above table. Further, RA must close such impersonation
                  related complaints after following the due process as
                  specified by SEBI/ RAASB.
                </p>
                <p>
                  * Inclusive of complaints of previous months resolved in the
                  current month.
                </p>
                <p>
                  # Inclusive of complaints pending as on the last day of the
                  month.
                </p>
                <p>
                  ^ Average Resolution time is the sum total of time taken to
                  resolve each complaint.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">
                Trend of monthly disposal of complaints
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Sr. No.
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Month
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Carried forward from previous month
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Received
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Resolved*
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Pending#
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">1</td>
                      <td className="border border-gray-200 px-3 py-2">
                        April, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">2</td>
                      <td className="border border-gray-200 px-3 py-2">
                        May, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">3</td>
                      <td className="border border-gray-200 px-3 py-2">
                        June, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">4</td>
                      <td className="border border-gray-200 px-3 py-2">
                        July, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">5</td>
                      <td className="border border-gray-200 px-3 py-2">
                        August, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">6</td>
                      <td className="border border-gray-200 px-3 py-2">
                        September, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">7</td>
                      <td className="border border-gray-200 px-3 py-2">
                        October, 2025
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">8</td>
                      <td className="border border-gray-200 px-3 py-2">
                        November, 2025
                      </td>
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
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>
                  * Inclusive of complaints of previous months resolved in the
                  current month.
                </p>
                <p>
                  # Inclusive of complaints pending as on the last day of the
                  month.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">
                Trend of annual disposal of complaints
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Sr. No.
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Year
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Carried forward from previous year
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Received
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Resolved*
                      </th>
                      <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                        Pending#
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">1</td>
                      <td className="border border-gray-200 px-3 py-2">
                        2023-24
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">2</td>
                      <td className="border border-gray-200 px-3 py-2">
                        2024-25
                      </td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                      <td className="border border-gray-200 px-3 py-2">0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">3</td>
                      <td className="border border-gray-200 px-3 py-2">
                        2025-26
                      </td>
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
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>
                  * Inclusive of complaints of previous years resolved in the
                  current year.
                </p>
                <p>
                  # Inclusive of complaints pending as on the last day of the
                  year.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs md:text-sm text-gray-500 py-3 border-t">
        <p>
          SEBI Registered Research Analyst - INH000013129 | BSE Enlistment 5860
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} Arpit Goyal Research. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default InvestorCharter;
