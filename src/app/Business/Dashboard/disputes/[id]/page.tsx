// app/Business/Dashboard/disputes/[id]/page.tsx
'use client'
import React, { useState } from 'react';
import { FiAlertCircle, FiUser, FiShoppingBag, FiDollarSign, FiCalendar, FiMessageSquare, FiPaperclip } from 'react-icons/fi';
import EvidenceManager from '../components/EvidenceManager';
import MediationChat from '../components/MediationChat';

const DisputeResolutionPage = ({ params }: { params: { id: string } }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'evidence' | 'chat'>('details');
  const [resolution, setResolution] = useState<'refund' | 'partial' | 'replacement' | 'none' | null>(null);
  const [resolutionAmount, setResolutionAmount] = useState('');
  const [resolutionNote, setResolutionNote] = useState('');

  // Mock data - in a real app this would come from API
  const dispute = {
    id: params.id,
    orderId: '#KHM-1002',
    customer: 'Chinedu Okoro',
    customerEmail: 'chinedu@example.com',
    opened: '2025-08-01',
    status: 'In Mediation',
    type: 'Wrong Item Delivered',
    description: 'Customer received a blue shirt instead of the red shirt they ordered.',
    orderAmount: '₦18,200',
    items: [
      { name: 'Red Cotton Shirt (Size L)', quantity: 1, price: '₦18,200' },
    ],
    requestedResolution: 'Refund or replacement',
    lastUpdated: '1 day ago',
    kaihmaAgent: 'Amina Yusuf',
  };

  const handleSubmitResolution = () => {
    // In a real app, this would submit to your backend
    alert(`Resolution submitted: ${resolution}`);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-800">Dispute Resolution</h1>
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-4">#{dispute.id}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            dispute.status === 'Open'
              ? 'bg-red-100 text-red-800'
              : dispute.status === 'In Mediation'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {dispute.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'details'
                      ? 'border-blue-800 text-blue-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Dispute Details
                </button>
                <button
                  onClick={() => setActiveTab('evidence')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'evidence'
                      ? 'border-blue-800 text-blue-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Evidence
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'chat'
                      ? 'border-blue-800 text-blue-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Mediation Chat
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'details' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Dispute Description</h2>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-700">{dispute.description}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">Requested Resolution:</span> {dispute.requestedResolution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Order Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <FiShoppingBag className="text-blue-800 mt-1 mr-3" size={18} />
                        <div>
                          <h3 className="font-medium text-gray-700">Order ID</h3>
                          <p className="text-gray-600">{dispute.orderId}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiDollarSign className="text-blue-800 mt-1 mr-3" size={18} />
                        <div>
                          <h3 className="font-medium text-gray-700">Order Amount</h3>
                          <p className="text-gray-600">{dispute.orderAmount}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiCalendar className="text-blue-800 mt-1 mr-3" size={18} />
                        <div>
                          <h3 className="font-medium text-gray-700">Opened</h3>
                          <p className="text-gray-600">{dispute.opened}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FiUser className="text-blue-800 mt-1 mr-3" size={18} />
                        <div>
                          <h3 className="font-medium text-gray-700">KAIHMA Agent</h3>
                          <p className="text-gray-600">{dispute.kaihmaAgent}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Order Items</h2>
                    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Item
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Price
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {dispute.items.map((item, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.quantity}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'evidence' && <EvidenceManager disputeId={dispute.id} />}
              {activeTab === 'chat' && <MediationChat disputeId={dispute.id} />}
            </div>
          </div>
        </div>

        {/* Right Column - Resolution Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Propose Resolution</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resolution Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="resolution"
                      checked={resolution === 'refund'}
                      onChange={() => setResolution('refund')}
                      className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Full refund ({dispute.orderAmount})</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="resolution"
                      checked={resolution === 'partial'}
                      onChange={() => setResolution('partial')}
                      className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Partial refund</span>
                  </label>
                  {resolution === 'partial' && (
                    <div className="ml-6">
                      <input
                        type="text"
                        value={resolutionAmount}
                        onChange={(e) => setResolutionAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  )}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="resolution"
                      checked={resolution === 'replacement'}
                      onChange={() => setResolution('replacement')}
                      className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Send replacement item</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="resolution"
                      checked={resolution === 'none'}
                      onChange={() => setResolution('none')}
                      className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No action required</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resolution Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={resolutionNote}
                  onChange={(e) => setResolutionNote(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Explain your resolution decision..."
                />
              </div>

              <button
                onClick={handleSubmitResolution}
                disabled={!resolution}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  !resolution ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-700'
                }`}
              >
                Submit Resolution
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{dispute.customer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{dispute.customerEmail}</p>
              </div>
              <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm font-medium">
                Contact Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;