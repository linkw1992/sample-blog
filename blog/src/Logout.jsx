import React from 'react';

const Logout = ({handleLogout}) => {
    return (
        <div className="logout">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default Logout;