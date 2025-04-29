'use client';

import React, { useState } from 'react';

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenChatbot = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setIsLoading(true);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenChatbot}
        className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 hover:bg-purple-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Open Chatbot"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="flex justify-end mt-2 mr-2 dark:border-gray-700">
            <button
              onClick={handleOpenChatbot}
              className="text-gray-300 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-[calc(100%-4rem)] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            )}
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/cVLv3-cNDby9PCQyiFwsh"
              width="100%"
              height="110%"
              style={{ position: 'absolute', bottom: '-65px' }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton; 