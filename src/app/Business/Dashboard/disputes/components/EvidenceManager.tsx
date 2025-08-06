// app/Business/Dashboard/disputes/components/EvidenceManager.tsx
'use client'
import React, { useState } from 'react';
import { FiPaperclip } from 'react-icons/fi';

interface EvidenceManagerProps {
  disputeId: string;
}

const EvidenceManager: React.FC<EvidenceManagerProps> = ({ disputeId }) => {
  const [files, setFiles] = useState<Array<{ name: string; type: 'image' | 'document'; url: string }>>([
    { name: 'receipt.pdf', type: 'document', url: '#' },
    { name: 'product_photo.jpg', type: 'image', url: '#' },
  ]);
  const [newFile, setNewFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (newFile) {
      // In a real app, this would upload to your backend
      const newFileObj = {
        name: newFile.name,
        type: newFile.type.startsWith('image') ? 'image' as const : 'document' as const,
        url: '#',
      };
      setFiles([...files, newFileObj]);
      setNewFile(null);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Evidence Management</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Upload New Evidence</h3>
          <span className="text-xs text-gray-500">Max 5MB per file</span>
        </div>
        <div className="flex items-center space-x-3">
          <label className="flex-1">
            <div className="relative">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="bg-gray-50 border border-gray-300 rounded-md px-4 py-10 text-center hover:bg-gray-100">
                <div className="flex flex-col items-center">
                  <FiPaperclip className="text-blue-800 mb-2" size={20} />
                  <span className="text-sm text-gray-600">
                    {newFile ? newFile.name : 'Click to select file'}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {!newFile && 'PDF, JPG, PNG up to 5MB'}
                  </span>
                </div>
              </div>
            </div>
          </label>
          <button
            onClick={handleUpload}
            disabled={!newFile}
            className={`py-2 px-4 h-full rounded-md ${
              !newFile
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-800 text-white hover:bg-blue-700'
            }`}
          >
            Upload
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Submitted Evidence</h3>
        {files.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No evidence submitted yet</p>
        ) : (
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {files.map((file, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {file.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          file.type === 'image'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {file.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-600 mr-3"
                      >
                        View
                      </a>
                      <button className="text-gray-500 hover:text-gray-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvidenceManager;