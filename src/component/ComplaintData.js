/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderTab from "./HeaderTab";

const ComplaintData = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
       <HeaderTab />

        {/* Main Content */}
        <main className="max-w-7xl mt-16 mx-auto px-0 py-8">
          <div className="bg-white rounded-none shadow-sm border border-gray-200 overflow-hidden">
            {/* Header with title */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
               Complaint Data
              </h1>
              <p className="text-teal-100 mt-1">
                In respect of Research Analyst (RA)
              </p>
            </div>

            {/* Content Area - All sections in one scrollable view */}
            <div className="p-6 md:p-8 space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              {/* Complaint Data Section */}
              <section>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <p className="text-gray-700 mb-4">
                      Data for the month ending - July 2025
                    </p>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Sr. No.
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Received from
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Pending at the end of last month
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Received
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Resolved*
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Total Pending#
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                            {`Pending complaints > 3 months`}
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Average Resolution time^ (in days)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              1
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              Directly from Investors
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              2
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              SEBI (SCORES)
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              3
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              Other Sources (if any)
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                          <tr className="font-medium">
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700"></td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              Grand Total
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                      <p className="font-medium">
                        Number of complaints received during month against the
                        RA due to impersonation by some other entity:
                      </p>
                      <p className="mt-2">
                        <strong>Note:</strong> In case of any complaints
                        received against the RA due to impersonation of the RA
                        by some other entity, the RA may adjust the number of
                        such complaints from total number of received/resolved
                        complaints while preparing the above table. Further, RA
                        must close such impersonation related complaints after
                        following the due process as specified by SEBI/ RAASB.
                      </p>
                      <p className="mt-2">
                        * Inclusive of complaints of previous months resolved in
                        the current month.
                      </p>
                      <p>
                        # Inclusive of complaints pending as on the last day of
                        the month.
                      </p>
                      <p>
                        ^ Average Resolution time is the sum total of time taken
                        to resolve each complaint,
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-8">
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                      Trend of monthly disposal of complaints
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Sr. No.
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Month
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Carried forward from previous month
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Received
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Resolved*
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Pending#
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              1
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              July, 2025
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                          <tr className="font-medium">
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700"></td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              Grand Total
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                      <p>
                        * Inclusive of complaints of previous months resolved in
                        the current month.
                      </p>
                      <p>
                        # Inclusive of complaints pending as on the last day of
                        the month.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-8">
                    <h4 className="text-xl font-semibold text-teal-700 mb-4">
                      Trend of annual disposal of complaints
                    </h4>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Sr. No.
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Year
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Carried forward from previous year
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Received
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Resolved*
                            </th>
                            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
                              Pending#
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              1
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              2025-26
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                          <tr className="font-medium">
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700"></td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                              Grand Total
                            </td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                            <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                      <p>
                        * Inclusive of complaints of previous years resolved in
                        the current year.
                      </p>
                      <p>
                        # Inclusive of complaints pending as on the last day of
                        the year.
                      </p>
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

export default ComplaintData;
