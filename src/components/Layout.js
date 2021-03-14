import React from 'react';
import Appbar from './Appbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Appbar />
    <hr />
    {children}
    <hr />
    <Footer />
  </div>
);

export default Layout;
