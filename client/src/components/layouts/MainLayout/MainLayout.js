import React from 'react';
import NavBar from '../../features/NavBar/Navbar';

const MainLayout = ({children}) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default MainLayout;
