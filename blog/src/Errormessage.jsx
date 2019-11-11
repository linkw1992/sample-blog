import React from 'react';

const Errormessage = ({ errorinfo }) => {
  return (
    <div className="error">
      <p className="error-info">{errorinfo}</p>
    </div>
  );
};

export default Errormessage;