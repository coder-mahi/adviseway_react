import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MentorConnect. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
