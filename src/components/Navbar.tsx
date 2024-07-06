import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div id='nav'>
      <Link to={`test`}>Test Component</Link>
      <br />
      <Link to={`slack`}>Slack Message</Link>
      <br />
      <Link to={`signin`}>Sign in</Link>
      <br />
      <Link to={`forms`}>Forms</Link>
      <br />
    </div>
  );
};

export default Navbar;
