import React from 'react';
import Breadcrumb from '../../components/tenders/BreadcrumbTender';
import TendersTable from '../../components/tenders/TendersTable';

const TenderMain = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tenders / RFPs / RFE / RFQ' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-600">
      <div className="container mx-auto p-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Tenders / RFPs / RFE / RFQ
          </h1>

          {/* Introduction */}
          <div className="mt-10 bg-gradient-to-br from-indigo-100 to-teal-100 border-teal-200 rounded-xl border-3 shadow-2xl p-10">
            <p className="text-gray-900 leading-relaxed">
              Welcome to our procurement portal. Here you can find current tender opportunities, 
              requests for proposals (RFPs), requests for expressions (RFE), and requests for 
              quotations (RFQ). All interested vendors and contractors are encouraged to review 
              the available opportunities and submit their proposals before the specified closing 
              dates. Please ensure you download and review all tender documents carefully before 
              submitting your bid.
            </p>
          </div>
        </div>

        {/* Tenders Table with Tabs */}
        <div className="mb-12">
          <TendersTable />
        </div>

        {/* Footer Section */}
        <div className="border-t pt-10 mb-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white">
              Looking for past opportunities? 
              <a
                href="#"
                className="text-teal-200 hover:text-teal-400 underline ml-1 transition-colors font-semibold"
              >
                View Archived Tenders
              </a>
            </div>
            <div className="text-sm text-white">
              © 2025 Procurement Portal. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderMain;
