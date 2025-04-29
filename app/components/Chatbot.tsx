'use client';

import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[700px]">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/cVLv3-cNDby9PCQyiFwsh"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
      />
    </div>
  );
};

export default Chatbot; 