import React from 'react';

function Footer() {
 
  return (
    <div className="py-8 transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo and Copyright */}
        <div className="mb-6 md:mb-0">
          <p className="text-sm">
            © 2024 SSRChem, Inc. <br />
            All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-2">Connect With Us</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Email</li>
            <li>Instagram</li>
            <li>Facebook</li>
            
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
           
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
