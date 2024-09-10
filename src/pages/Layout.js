import React from 'react';
import NavigationBar from '../components/NavigationBar'; // Import the Navbar component
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
