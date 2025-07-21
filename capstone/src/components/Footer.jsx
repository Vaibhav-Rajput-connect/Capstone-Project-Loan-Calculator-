import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full text-white py-4">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Mortgage Calculator. All rights reserved.</p>
        <p className="mt-2">Developed by Vaibhav Rajput</p>
      </div>
    </footer>
  );
};

export default Footer;