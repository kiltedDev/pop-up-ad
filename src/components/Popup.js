import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm("You know we aren't letting you out of here until you sign up for free Taylor Swift tickets.  Right?")
  }

  return(
    <div onClick={handleExit}>
    Hello from Popup
    </div>
  );
};

export default Popup;
