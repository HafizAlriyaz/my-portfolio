import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-mint/50">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hafiz Ahamed R. All Rights Reserved.</p>
          <p>Designed with <span className="text-mint">&#9829;</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;