import React from 'react';

import Logo from '../shared/Logo/Logo.jsx';

const Hero = () => {
  return (
    <>
      <Logo variant="HERO" alt="Hero logo" />
      <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
        🚀 Frontend pipeline deployed successfully!
      </p>
    </>
  );
};

export default Hero;
