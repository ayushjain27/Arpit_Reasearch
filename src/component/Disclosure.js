import React from "react";
import { ArrowRight } from "lucide-react";
import HeaderTab from "./HeaderTab";

const StandardDisclosures = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <HeaderTab />

        {/* Main Content */}
        <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              STANDARD DISCLOSURES
            </h1>
          </div>
          <div
            className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* Content Sections */}
            <div className="p-6 md:p-8 space-y-4">
              {/* Purpose Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Purpose
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    The particulars present in this document has been prepared
                    in accordance with SEBI (Research Analyst) Regulations,
                    2014.
                  </p>
                  <p>
                    The purpose of the document is to provide essential
                    information regarding the research and recommendation
                    services in a manner to assist and enable a
                    client/prospective client in making an informed decision
                    with respect to engaging in research and recommendation
                    services.
                  </p>
                  <p>
                    For the purpose of the disclosure document, Research Analyst
                    is <strong>Arpit Goyal{" "}</strong>
                    (hereinafter referred to as "Research Analyst" or "RA")
                  </p>
                </div>
              </section>

              {/* History Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  History, Present business and Background
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                  Arpit Goyal is a SEBI registered Research
                    Analyst with registration no. <strong>INH000013129</strong>{" "}
                    valid from Oct 06, 2023 – Oct 05, 2028.
                  </p>
                  <p>
                    The research analyst is engaged in offering research and
                    recommendation services based on technical and fundamental
                    analyses to clients.
                  </p>
                  <p>
                    The research analyst does not offer any execution or
                    distribution services.
                  </p>
                </div>
              </section>

              {/* Terms and Conditions Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Terms and Conditions of research services
                </h2>
                <div className="space-y-1 text-gray-700">
                  <ul className="space-y-1 list-disc pl-6 text-gray-700">
                    <li>
                      Research services will be limited to providing independent
                      research reports and recommendations and will not involve
                      any portfolio allocation, execution or distribution
                      services.
                    </li>
                    <li>
                      Research reports and recommendations are intended solely
                      for your information and is not for public distribution.
                      It may not be reproduced, transmitted, or distributed to
                      any other person. Any individual who receives this
                      document is required to adhere to these restrictions.
                    </li>
                    <li>
                      This material is intended solely for the personal
                      information of the authorized recipient and does not
                      constitute a solicitation or invitation to engage in any
                      transaction based on its contents. This report should not
                      be interpreted as an offer to sell, or a solicitation to
                      buy, any security in any jurisdiction where such offer or
                      solicitation is unlawful. It is provided for the general
                      information of clients of Interest and does not constitute
                      a personal recommendation or take into consideration the
                      specific investment objectives, financial circumstances,
                      or needs of any individual client.
                    </li>
                    <li>
                      The research analyst has exercised due diligence in
                      verifying the accuracy and authenticity of the information
                      contained herein, insofar as it pertains to current and
                      historical data; however, no representation or warranty,
                      express or implied, is made as to the accuracy or
                      completeness of such information.
                    </li>
                    <li>
                      The research analyst does not accept any liability
                      whatsoever for any direct, indirect, or consequential loss
                      arising from the use of this document or the information
                      contained herein.
                    </li>
                    <li>
                      The research analyst never guarantees returns on the
                      recommendations provided. Past performance is never a
                      guarantee or indication of same or similar future
                      performance.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Disciplinary History Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Disciplinary History
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    No penalties/directions have been issued by SEBI under the
                    SEBI ACT or regulations made there under against the
                    research analyst relating to research analyst services.
                  </p>
                  <p>
                    There are no pending material litigations or legal
                    proceedings, findings of inspections or investigations for
                    which action has been taken or initiated by any regulatory
                    authority against the research analyst.
                  </p>
                </div>
              </section>

              {/* Details of Associates Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Details of Associates
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    There are no associates employed by the research analyst
                    currently.
                  </p>
                </div>
              </section>

              {/* Disclosures Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Disclosures with respect to research and recommendations
                  services
                </h2>
                <div className="space-y-1 text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      The research analyst or associates do not trade in
                      securities which is the subject matter of recommendation.
                    </li>
                    <li>
                      The research analyst or associates do not have any
                      financial interest in the subject company.
                    </li>
                    <li>
                      The research analyst or associates do not have
                      actual/beneficial ownership or 1% or more securities of
                      the subject company, at the end of the month immediately
                      preceding the date of publication of the research report.
                    </li>
                    <li>
                      There are no actual or potential conflicts of interest
                      arising from any connection to or association with any
                      issuer of products/securities, including any material
                      information or facts that might compromise its objectivity
                      or independence in the carrying on of Research Analyst
                      services. Such conflict of interest shall be disclosed to
                      the client as and when they arise.
                    </li>
                    <li>
                      The research analyst or associates have not received any
                      compensation from the subject company in the past twelve
                      months.
                    </li>
                    <li>
                      The research analyst or associates have not managed or
                      co-managed public offering of securities for the subject
                      company in the past twelve months.
                    </li>
                    <li>
                      The research analyst or associates have not received any
                      compensation for investment banking or merchant banking or
                      brokerage services from the subject company in the past
                      twelve months.
                    </li>
                    <li>
                      The research analyst or its associates have not received
                      any compensation for products or services other than
                      investment banking or merchant banking or brokerage
                      services from the subject company in the past twelve
                      months.
                    </li>
                    <li>
                      The research analyst or its associates have not received
                      any compensation or other benefits from the subject
                      company or third party in connection with the research
                      report.
                    </li>
                    <li>
                      The subject company was not a client during the twelve
                      months preceding the date of distribution of the research
                      report.
                    </li>
                    <li>
                      The research analyst or associates have not served as an
                      officer, director or employee of the subject company.
                    </li>
                    <li>
                      The research analyst or associates have not been engaged
                      in market making activity for the subject company.
                    </li>
                    <li>
                      The research analyst shall provide all other disclosures
                      in research report as specified by the board under any
                      other regulations.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Disclaimer Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Disclaimer
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    Registration granted by SEBI, enlistment with BSE,
                    certification granted by NISM in no way guarantees the
                    performance of the research analyst or provides any
                    assurance of returns to the investors.
                  </p>
                </div>
              </section>

              {/* Standard Warning Section */}
              <section className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h2 className="text-xl font-bold text-orange-800 mb-2">
                  Standard warning
                </h2>
                <div className="space-y-1 text-orange-700">
                  <p>
                    Investment in securities market are subject to market risks.
                    Read all the related documents carefully before investing.
                  </p>
                </div>
              </section>
            </div>
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
      </div>
    </div>
  );
};

export default StandardDisclosures;
