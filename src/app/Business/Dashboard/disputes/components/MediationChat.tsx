// app/Business/Dashboard/disputes/components/MediationChat.tsx
'use client'
import React, { useState } from 'react';
import { FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

interface Message {
  id: string;
  sender: 'customer' | 'merchant' | 'agent';
  text: string;
  timestamp: string;
}

interface MediationChatProps {
  disputeId: string;
}

const MediationChat: React.FC<MediationChatProps> = ({ disputeId }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'customer',
      text: 'I received the wrong item. I ordered a red shirt but got a blue one instead.',
      timestamp: '2025-08-01 10:30 AM',
    },
    {
      id: '2',
      sender: 'merchant',
      text: 'We apologize for the mistake. Can you please share a photo of the item you received?',
      timestamp: '2025-08-01 11:15 AM',
    },
    {
      id: '3',
      sender: 'agent',
      text: 'I\'m Amina from KAIHMA support. I\'ll be mediating this dispute. Please share the requested photo so we can proceed.',
      timestamp: '2025-08-01 11:30 AM',
    },
    {
      id: '4',
      sender: 'customer',
      text: 'Here is the photo of the blue shirt I received.',
      timestamp: '2025-08-01 12:45 PM',
    },
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: Date.now().toString(),
        sender: 'merchant',
        text: newMessage,
        timestamp: new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const getSenderName = (sender: string) => {
    switch (sender) {
      case 'customer':
        return 'Customer';
      case 'merchant':
        return 'You';
      case 'agent':
        return 'KAIHMA Agent';
      default:
        return sender;
    }
  };

  const getSenderColor = (sender: string) => {
    switch (sender) {
      case 'customer':
        return 'bg-gray-100';
      case 'merchant':
        return 'bg-blue-100';
      case 'agent':
        return 'bg-purple-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Mediation Chat</h2>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-blue-800 text-white p-3 flex items-center">
          <FiMessageSquare className="mr-2" />
          <span>Dispute #{disputeId} - Mediation</span>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === 'merchant' ? 'text-right' : ''}`}>
              <div
                className={`inline-block p-3 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ${
                  getSenderColor(message.sender)
                }`}
              >
                <div className="flex items-center mb-1">
                  {message.sender === 'agent' && (
                    <FiUser className="mr-1 text-purple-800" size={14} />
                  )}
                  <span className={`text-xs font-medium ${
                    message.sender === 'customer'
                      ? 'text-gray-700'
                      : message.sender === 'merchant'
                      ? 'text-blue-800'
                      : 'text-purple-800'
                  }`}>
                    {getSenderName(message.sender)}
                  </span>
                </div>
                <p className="text-gray-800">{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-3 bg-white">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediationChat;