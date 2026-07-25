/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ComplaintData = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" role="region" aria-label="Complaint Data">
      {/* Header with title - matching reference gradient */}
      <div className="bg-gradient-to-r from-teal-700 to-blue-700 p-6">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Complaint Data
        </h1>
        <p className="text-teal-100 mt-1 text-sm md:text-base">
          In respect of Research Analyst (RA)
        </p>
      </div>

      {/* Content Area */}
      <div className="p-4 md:p-6 space-y-6 max-h-[600px] overflow-y-auto" role="region" aria-label="Complaint Data content">
        {/* Complaint Data Section */}
        <div className="space-y-6">
          {/* Monthly Complaint Data - Changed from no heading to h2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Monthly Complaint Data
            </h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Data for the month ending - July 2025
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-xs md:text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Sr. No.
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Received from
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Pending at the end of last month
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Received
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Resolved*
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Total Pending#
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Pending complaints &gt; 3 months
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Average Resolution time^ (in days)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      1
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      Directly from Investors
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      2
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      SEBI (SCORES)
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      3
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      Other Sources (if any)
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2 text-gray-700">
                      0
                    </td>
                  </tr>
                  <tr className="font-medium bg-gray-50">
                    <td className="border border-gray-200 px-2 md:px-4 py-2"></td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      Grand Total
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs md:text-sm text-gray-600 space-y-2">
              <p className="font-medium">
                Number of complaints received during month against the RA due to
                impersonation by some other entity: 0
              </p>
              <p>
                <strong>Note:</strong> In case of any complaints received
                against the RA due to impersonation of the RA by some other
                entity, the RA may adjust the number of such complaints from
                total number of received/resolved complaints while preparing the
                above table. Further, RA must close such impersonation related
                complaints after following the due process as specified by
                SEBI/RAASB.
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

          {/* Trend of monthly disposal of complaints - Changed from h3 to h2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Trend of Monthly Disposal of Complaints
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-xs md:text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Sr. No.
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Month
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Carried forward from previous month
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Received
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Resolved*
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Pending#
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    "April, 2025",
                    "May, 2025",
                    "June, 2025",
                    "July, 2025",
                    "August, 2025",
                    "September, 2025",
                    "October, 2025",
                    "November, 2025",
                  ].map((month, index) => (
                    <tr key={index}>
                      <td className="border border-gray-200 px-2 md:px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-200 px-2 md:px-4 py-2">
                        {month}
                      </td>
                      <td className="border border-gray-200 px-2 md:px-4 py-2">
                        0
                      </td>
                      <td className="border border-gray-200 px-2 md:px-4 py-2">
                        0
                      </td>
                      <td className="border border-gray-200 px-2 md:px-4 py-2">
                        0
                      </td>
                      <td className="border border-gray-200 px-2 md:px-4 py-2">
                        0
                      </td>
                    </tr>
                  ))}
                  <tr className="font-medium bg-gray-50">
                    <td className="border border-gray-200 px-2 md:px-4 py-2"></td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      Grand Total
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs md:text-sm text-gray-600">
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

          {/* Trend of annual disposal of complaints - Changed from h4 to h3 (since it's a sub-section of the above) */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
              Trend of Annual Disposal of Complaints
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-xs md:text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Sr. No.
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Year
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Carried forward from previous year
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Received
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Resolved*
                    </th>
                    <th className="border border-gray-200 px-2 md:px-4 py-2 text-left font-medium text-gray-700">
                      Pending#
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      1
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      2023-24
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      2
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      2024-25
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      3
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      2025-26
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                  </tr>
                  <tr className="font-medium bg-gray-50">
                    <td className="border border-gray-200 px-2 md:px-4 py-2"></td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      Grand Total
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                    <td className="border border-gray-200 px-2 md:px-4 py-2">
                      0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-xs md:text-sm text-gray-600">
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

export default ComplaintData;