import React from "react";
import { ExternalLink } from "lucide-react";

const GrievanceRedressal = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header with title - matching reference gradient */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Grievance Redressal/Escalation Matrix
        </h1>
      </div>

      {/* Scrollable Content Area */}
      <div className="p-4 md:p-6 space-y-6 max-h-[600px] overflow-y-auto">
        {/* Steps Section */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
            Steps to follow in case of grievance or feedback:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
            <li>
              If you are not satisfied with the services provided and would like
              to lodge a complaint, reach out to the Research Analyst's team at
              the below mentioned details.
            </li>
          </ul>
        </div>

        {/* Contact Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                  Designation
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                  Contact Person
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                  Address
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                  Contact No
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                  Email ID
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-medium text-gray-700">
                  Working Hours
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Customer Care
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Arpit Goyal
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 text-xs">
                  202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH -
                  462011
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  +918878810223
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  <a
                    href="mailto:agbpl2354@gmail.com"
                    className="text-teal-600 hover:underline"
                  >
                    agbpl2354@gmail.com
                  </a>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 whitespace-nowrap text-xs">
                  Monday to Friday
                  <br />
                  9:00 AM – 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Head of Customer Care
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Arpit Goyal
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 text-xs">
                  202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH -
                  462011
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  +918878810223
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  <a
                    href="mailto:agbpl2354@gmail.com"
                    className="text-teal-600 hover:underline"
                  >
                    agbpl2354@gmail.com
                  </a>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 whitespace-nowrap text-xs">
                  Monday to Friday
                  <br />
                  9:00 AM – 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Compliance Officer
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Arpit Goyal
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 text-xs">
                  202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH -
                  462011
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  +918878810223
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  <a
                    href="mailto:agbpl2354@gmail.com"
                    className="text-teal-600 hover:underline"
                  >
                    agbpl2354@gmail.com
                  </a>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 whitespace-nowrap text-xs">
                  Monday to Friday
                  <br />
                  9:00 AM – 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Proprietor
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Arpit Goyal
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 text-xs">
                  202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH -
                  462011
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  +918878810223
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  <a
                    href="mailto:agbpl2354@gmail.com"
                    className="text-teal-600 hover:underline"
                  >
                    agbpl2354@gmail.com
                  </a>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 whitespace-nowrap text-xs">
                  Monday to Friday
                  <br />
                  9:00 AM – 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Principal Officer
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  Arpit Goyal
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 text-xs">
                  202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH -
                  462011
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700">
                  +918878810223
                </td>
                <td className="border border-gray-200 px-3 py-2">
                  <a
                    href="mailto:agbpl2354@gmail.com"
                    className="text-teal-600 hover:underline"
                  >
                    agbpl2354@gmail.com
                  </a>
                </td>
                <td className="border border-gray-200 px-3 py-2 text-gray-700 whitespace-nowrap text-xs">
                  Monday to Friday
                  <br />
                  9:00 AM – 5:00 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Resolution Timeline */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-blue-800 font-medium text-sm md:text-base">
            We aim to resolve all complaints within 21 days from the date of
            receipt.
          </p>
        </div>

        {/* Escalation Section */}
        <div className="space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Escalation Process
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            If your grievance is not resolved within the stipulated timeframe,
            you can escalate the complaint to the regulator Securities and
            Exchange Board of India (SEBI) at the SCORES Portal.
          </p>

          <div className="flex items-center space-x-2">
            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline flex items-center text-sm md:text-base"
            >
              Link to SCORES Portal
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            If your complaint is not resolved on SCORES portal, you can start
            the dispute resolution process through the ODR Portal.
          </p>

          <div className="flex items-center space-x-2">
            <a
              href="https://smartodr.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline flex items-center text-sm md:text-base"
            >
              Link to ODR Portal
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

export default GrievanceRedressal;
