import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#0d0d0d] text-base-content p-4">
      <aside>
        <p className="text-gray-300">
          Copyright © {new Date().getFullYear()} - All right reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
