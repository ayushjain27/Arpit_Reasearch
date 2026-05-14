import React from "react";
import { ExternalLink } from "lucide-react";

const CodeOfConduct = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header with title - matching reference gradient */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Code of Conduct for Research Analyst
        </h1>
        <p className="text-teal-100 mt-1 text-sm md:text-base">
          Third Schedule [See sub-regulation (2) of regulation 24]
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="p-4 md:p-6 space-y-6 max-h-[600px] overflow-y-auto">
        {/* Introduction */}
        <div>
          <p className="text-gray-700 text-sm md:text-base">
            The following code of conduct outlines the ethical and professional
            standards that research analysts and research entities must adhere
            to in their operations.
          </p>
        </div>

        {/* Code Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              1. Honesty and Good Faith
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity shall act honestly and in good
              faith.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              2. Diligence
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity shall act with due skill, care
              and diligence and shall ensure that the research report is
              prepared after thorough analysis.
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              3. Conflict of Interest
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity shall effectively address
              conflict of interest which may affect the impartiality of its
              research analysis and research report and shall make appropriate
              disclosures to address the same.
            </p>
          </div>

          {/* Item 4 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              4. Insider Trading or Front Running
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity or its employees shall not
              engage in insider trading or front running or front running of its
              own research report.
            </p>
          </div>

          {/* Item 5 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              5. Confidentiality
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity or its employees shall
              maintain confidentiality of report till the report is made public.
            </p>
          </div>

          {/* Item 6 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              6. Professional Standard
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity or its employees engaged in
              research analysis shall observe high professional standard while
              preparing research report.
            </p>
          </div>

          {/* Item 7 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              7. Compliance
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              Research analyst or research entity shall comply with all
              regulatory requirements applicable to the conduct of its business
              activities.
            </p>
          </div>

          {/* Item 8 */}
          <div className="border-l-4 border-teal-500 pl-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              8. Responsibility of Senior Management
            </h2>
            <p className="text-gray-700 mt-1 text-sm md:text-base">
              The senior management of research analyst or research entity shall
              bear primary responsibility for ensuring the maintenance of
              appropriate standards of conduct and adherence to proper
              procedures.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
          <h3 className="text-base md:text-lg font-semibold text-blue-800">
            Additional Regulatory Information
          </h3>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            This code of conduct is part of the regulatory framework established
            by SEBI (Securities and Exchange Board of India) for research
            analysts.
          </p>
          <div className="mt-3 flex items-center space-x-2">
            <a
              href="https://www.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline flex items-center text-sm"
            >
              SEBI Official Website
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs md:text-sm text-gray-500 py-3 border-t">
        <p>
          SEBI Registered Research Analyst - INH000013129 | BSE Enlistment 5860
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} Ananta Research. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default CodeOfConduct;
