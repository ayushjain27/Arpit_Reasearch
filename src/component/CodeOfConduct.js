import React from "react";
import { ExternalLink } from "lucide-react";
import HeaderTab from "./HeaderTab";

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <HeaderTab />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Code of Conduct for Research Analyst
            </h1>
            <p className="text-teal-100 mt-2">
              Third Schedule [See sub-regulation (2) of regulation 24]
            </p>
          </div>

          {/* Scrollable Content Area */}
          <div
            className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-y-auto p-6 mt-16"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* Introduction */}
            <div className="my-8">
              <p className="text-gray-700">
                The following code of conduct outlines the ethical and
                professional standards that research analysts and research
                entities must adhere to in their operations.
              </p>
            </div>

            {/* Code Items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  1. Honesty and Good Faith
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity shall act honestly and in
                  good faith.
                </p>
              </div>

              {/* Item 2 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  2. Diligence
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity shall act with due skill,
                  care and diligence and shall ensure that the research report
                  is prepared after thorough analysis.
                </p>
              </div>

              {/* Item 3 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  3. Conflict of Interest
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity shall effectively address
                  conflict of interest which may affect the impartiality of its
                  research analysis and research report and shall make
                  appropriate disclosures to address the same.
                </p>
              </div>

              {/* Item 4 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  4. Insider Trading or Front Running
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity or its employees shall not
                  engage in insider trading or front running or front running of
                  its own research report.
                </p>
              </div>

              {/* Item 5 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  5. Confidentiality
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity or its employees shall
                  maintain confidentiality of report till the report is made
                  public.
                </p>
              </div>

              {/* Item 6 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  6. Professional Standard
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity or its employees engaged
                  in research analysis shall observe high professional standard
                  while preparing research report.
                </p>
              </div>

              {/* Item 7 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  7. Compliance
                </h2>
                <p className="text-gray-700 mt-2">
                  Research analyst or research entity shall comply with all
                  regulatory requirements applicable to the conduct of its
                  business activities.
                </p>
              </div>

              {/* Item 8 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  8. Responsibility of Senior Management
                </h2>
                <p className="text-gray-700 mt-2">
                  The senior management of research analyst or research entity
                  shall bear primary responsibility for ensuring the maintenance
                  of appropriate standards of conduct and adherence to proper
                  procedures.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800">
                Additional Regulatory Information
              </h3>
              <p className="text-gray-700 mt-2">
                This code of conduct is part of the regulatory framework
                established by SEBI (Securities and Exchange Board of India) for
                research analysts.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <a
                  href="https://www.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline flex items-center"
                >
                  SEBI Official Website{" "}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              SEBI Registered Research Analyst - INH000013129
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
