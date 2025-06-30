import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} ProfileCanvas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
