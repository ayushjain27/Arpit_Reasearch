import React from "react";
import { ExternalLink } from "lucide-react";
import HeaderTab from "./HeaderTab";

const GrievanceRedressal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <HeaderTab />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Grievance Redressal/Escalation Matrix
            </h1>
          </div>

          {/* Scrollable Content Area */}
          <div
            className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-y-auto p-6 mt-16"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* Steps Section */}
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-800 mt-8">
                Steps to follow in case of grievance or feedback:
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="mb-2">
                  If you are not satisfied with the services provided and would
                  like to lodge a complaint, reach out to the Research Analyst's
                  team at the below mentioned details.
                </li>
              </ul>
            </div>

            {/* Contact Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Designation
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Contact Person
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Address
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Contact No
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Email ID
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">
                      Working Hours
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Customer Care
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Arpit Goyal
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA
                      PRADESH - 462011
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      +918878810223
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-blue-600 hover:underline">
                      <a href="mailto:agbpl2354@gmail.com">
                        agbpl2354@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      Monday to Friday
                      <br />
                      9:00 AM – 5:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Head of Customer Care
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Arpit Goyal
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA
                      PRADESH - 462011
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      +918878810223
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-blue-600 hover:underline">
                      <a href="mailto:agbpl2354@gmail.com">
                        agbpl2354@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      Monday to Friday
                      <br />
                      9:00 AM – 5:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Compliance Officer
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Arpit Goyal
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA
                      PRADESH - 462011
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      +918878810223
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-blue-600 hover:underline">
                      <a href="mailto:agbpl2354@gmail.com">
                        agbpl2354@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      Monday to Friday
                      <br />
                      9:00 AM – 5:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      CEO
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Arpit Goyal
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA
                      PRADESH - 462011
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      +918878810223
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-blue-600 hover:underline">
                      <a href="mailto:agbpl2354@gmail.com">
                        agbpl2354@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      Monday to Friday
                      <br />
                      9:00 AM – 5:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Principal Officer
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      Arpit Goyal
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA
                      PRADESH - 462011
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                      +918878810223
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-blue-600 hover:underline">
                      <a href="mailto:agbpl2354@gmail.com">
                        agbpl2354@gmail.com
                      </a>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      Monday to Friday
                      <br />
                      9:00 AM – 5:00 PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Resolution Timeline */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
              <p className="text-blue-800 font-medium">
                We aim to resolve all complaints within 15 days from the date of
                receipt.
              </p>
            </div>

            {/* Escalation Section */}
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Escalation Process
              </h2>
              <p className="text-gray-700">
                If your grievance is not resolved within the stipulated
                timeframe, you can escalate the complaint to the regulator
                Securities and Exchange Board of India (SEBI) at the SCORES
                Portal.
              </p>

              <div className="flex items-center space-x-2">
                <a
                  href="https://scores.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline flex items-center"
                >
                  Link to SCORES Portal <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-gray-700 mt-4">
                If your complaint is not resolved on SCORES portal, you can
                start the dispute resolution process through the ODR Portal.
              </p>

              <div className="flex items-center space-x-2">
                <a
                  href="https://smartodr.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline flex items-center"
                >
                  Link to ODR Portal <ExternalLink className="w-4 h-4" />
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

export default GrievanceRedressal;
