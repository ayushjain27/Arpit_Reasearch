import React from "react";
import HeaderTab from "./HeaderTab";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Header */}
        <HeaderTab />

        {/* Main Content */}
        <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="sticky top-24 z-10 bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-t-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              REFUND POLICY
            </h1>
            <div className="mt-2 text-white text-sm">
              <p>Arpit Goyal</p>
              <p>{`SEBI Registered Research Analyst No. INH000013129 | BSE Enlistment 5680`}</p>
              <p>Date of update: August 1, 2025</p>
            </div>
          </div>

          <div
            className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 300px)" }}
          >
            {/* Content Sections */}
            <div className="p-6 md:p-8 space-y-4">
              {/* Introduction Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <p>
                    Arpit Goyal Research by Arpit Goyal is committed to deliver
                    high quality services with transparency in line with the
                    Securities and Exchange Board of India (SEBI) Research
                    Analyst regulations 2014 and related guidelines. This refund
                    policy outlines the conditions under which refunds may be
                    requested for our paid services; ensuring clarity for our
                    clients and alignment with regulatory standards.
                  </p>
                </div>
              </section>

              {/* Scope Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  1. Scope of the refund policy
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    This refund policy applies to all paid services provided by
                    Arpit Goyal including but not limited to research reports,
                    research recommendation subscriptions, educational courses,
                    content and related services. It is not based on the outcome
                    of investments or research recommendations or results of the
                    services provided as all investments and services are
                    subject to market risks and we do not guarantee any assured
                    profits or returns. Clients are advised to review our terms
                    and conditions and SEBI regulations before subscribing to
                    our services.
                  </p>
                </div>
              </section>

              {/* Eligibility Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  2. Eligibility for refund
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold">
                      a. Non-Delivery of Services
                    </h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        If we fail to deliver the agreed-upon service or content
                        Access (e.g., research report or subscription) within
                        the specified timeframe due to reasons within our
                        control, a full refund for the undelivered service will
                        be provided.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">b. Premature Termination</h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        If the client or Arpit Goyal terminates the service
                        before the subscription period expires, you are entitled
                        to a refund on a pro-rata basis for the unutilized full
                        months, subject to the conditions in Section 3
                        (Non-Refundable Scenarios) and Section 5 (Refund
                        Process).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      c. Persistent Technical Issues
                    </h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        If you encounter technical issues (ex: inability to
                        access the service) that we cannot resolve within 4
                        working days despite reasonable efforts, you may request
                        a refund for the impacted service period.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">d. Regulatory actions</h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        If Arpit Goyal's SEBI registration is suspended or
                        cancelled due to regulatory violations, or if we cease
                        operations; you are entitled to a refund on pro-rata
                        basis for the unutilized period.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      e. Double payment and over charges
                    </h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        If you are charged more than once for the same service
                        for the same period or charged in excess of the SEBI
                        prescribed fee limit (Fee limit is ₹1,51,000 excluding
                        statutory charges per annum per family of clients for
                        individual and HUF clients), the excess fee will be
                        refunded.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      f. Centralized Fee Collection Mechanism (CeFCoM)
                    </h3>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>
                        If you opt for CeFCoM during subscription to services
                        and are eligible for a refund subject to the policy, the
                        refund will be processed through CeFCoM in line with
                        SEBI guidelines.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Non-Refundable Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  3. Non-Refundable Scenarios
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>Refunds will not be provided in the following cases:</p>

                  <div>
                    <h3 className="font-semibold">
                      a. Dissatisfaction with the investment outcome
                    </h3>
                    <p className="pl-5 mt-1">
                      Losses or dissatisfaction due to market performance or
                      outcome of the investment as all investments are subject
                      to market risk.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      b. Accessed or utilized services
                    </h3>
                    <p className="pl-5 mt-1">
                      Services that have been fully or partially accessed,
                      downloaded or utilized (Ex: Reports viewed, educational
                      content accessed)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">c. Educational content</h3>
                    <p className="pl-5 mt-1">
                      Due to the irrevocable nature of digital educational
                      materials, including but not limited to online courses,
                      e-books, webinars, and downloadable resources, all sales
                      are final. Upon purchase or access, the client is deemed
                      to have received the product in full, and we cannot
                      prevent further use/utilization of such content and the
                      value of such content is immediately realized upon access
                      by the client.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">d. Partial month usage</h3>
                    <p className="pl-5 mt-1">
                      Refunds will not be provided for partially utilized
                      monthly periods. For example: If a client subscribes to
                      our services on August 1, 2025 for 3 months and terminates
                      the service on September 12, 2025, no refund will be
                      provided for September 2025. Refunds will apply only to
                      fully unutilized months.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">e. Client Breach of terms</h3>
                    <p className="pl-5 mt-1">
                      If the client engages in fraudulent activity, misuse of
                      services (unauthorized sharing), provide incorrect or
                      fraudulent KYC documents or violate our terms and
                      conditions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">f. Force Majeure</h3>
                    <p className="pl-5 mt-1">
                      Service disruption or inability to provide service due to
                      events beyond our control such as natural disasters,
                      national crises or any other force majeure events as
                      specified in the agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">g. Non-refundable fees</h3>
                    <p className="pl-5 mt-1">
                      Administrative, onboarding, statutory government fees
                      stated as non-refundable in the client service agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      h. Disruptions beyond our control
                    </h3>
                    <p className="pl-5 mt-1">
                      Operational or Technical disruptions beyond our control
                      (ex: third party platform failures), provided the client
                      is notified and we exercise reasonable efforts to resolve
                      them. In such situations, we may extend the service period
                      at our discretion instead of offering a refund.
                    </p>
                  </div>
                </div>
              </section>

              {/* Refund Process Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  4. Refund process
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>To request for a refund, please follow these steps:</p>

                  <div>
                    <h3 className="font-semibold">Submit a request:</h3>
                    <p className="pl-5 mt-1">
                      E-mail us at agbpl2354@gmail.com with the following
                      details:
                    </p>
                    <ul className="list-disc pl-10 mt-1 space-y-1">
                      <li>Full name</li>
                      <li>Service details</li>
                      <li>Payment invoice/Payment reference number</li>
                      <li>Reason for refund</li>
                      <li>
                        For pre-mature termination, please provide a notice of 7
                        business days prior to termination for a smooth off
                        boarding process
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">Review of refund request</h3>
                    <p className="pl-5 mt-1">
                      A refund request will be reviewed and a response will be
                      sent within 5 business days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Processing duration</h3>
                    <p className="pl-5 mt-1">
                      If a refund is approved, it will be processed within 10
                      business days to the original payment method except
                      CeFCoM. For CeFCoM based refunds, the processing period is
                      30 days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold">Confirmation of refund</h3>
                    <p className="pl-5 mt-1">
                      You will receive a confirmation e-mail once a refund is
                      processed.
                    </p>
                  </div>
                </div>
              </section>

              {/* Grievance Redressal Section */}
              <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  5. Grievance Redressal
                </h2>
                <div className="space-y-2 text-blue-700">
                  <p>
                    If you are not satisfied with our services or the refund
                    process, please contact the grievance officer:
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Name - Arpit Goyal</li>
                    <li>E-mail: agbpl2354@gmail.com</li>
                    <li>Mobile: +91 8878810223</li>
                  </ul>
                </div>
              </section>

              {/* CeFCoM Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  6. Centralized Fee Collection Mechanism (CeFCoM)
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    For clients opting for CeFCoM, all fee payments and refunds
                    will be processed through this SEBI-mandated platform. If
                    you discontinue services, refunds for unutilized periods
                    will be handled via CeFCoM, ensuring compliance with
                    regulatory standards. Please contact us for details on
                    opting into CeFCoM.
                  </p>
                </div>
              </section>

              {/* Policy Updates Section */}
              <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  7. Policy Updates
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    We reserve the right to update this refund policy without
                    prior intimation to comply with SEBI regulations or business
                    requirements. The latest version of the refund policy will
                    be available on our website at{" "}
                    <a
                      href=" https://www.arpitgoyal.in/refundpolicy"
                      className="text-blue-600 hover:underline"
                    >
                       https://www.arpitgoyal.in/refundpolicy
                    </a>{" "}
                    with the "last updated" date specified. Clients are
                    encouraged to review this policy periodically.
                  </p>
                </div>
              </section>

              {/* Disclaimer Section */}
              <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  Disclaimer
                </h2>
                <div className="space-y-2 text-blue-700">
                  <p>
                    This refund policy is subject to our full Terms and
                    Conditions and SEBI regulations. Registration granted by
                    SEBI and certification from NISM in no way guarantees the
                    performance of the Research Analyst. Investments are subject
                    to market risks. Please read all the related documents
                    carefully before subscribing to our services.
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

export default RefundPolicy;
