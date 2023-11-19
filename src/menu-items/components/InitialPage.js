// InitialPage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function InitialPage() {
  const history = useHistory();

  const goToDashboard = () => {
    history.push('/dashboard');
  };

  return (
    <div 
      style={{ height: '100vh', width: '100%', backgroundColor: 'black' }} 
      onClick={goToDashboard}
    />
  );
}

export default InitialPage;
