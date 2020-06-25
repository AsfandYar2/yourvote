import React from 'react';

import { useLocation } from 'react-router-dom';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';

const Navbar = () => {
  const location = useLocation();
  return (
    // use some kind of auth flag to get links, for demostration purpose I am using location to getlinks
    <div>
      {location.pathname === '/dashboard' ||
      location.pathname === '/build' ||
      location.pathname === '/changepassword' ? (
        <SignInLinks />
      ) : (
        <SignOutLinks />
      )}
    </div>
  );
};

export default Navbar;
