import React from 'react';

const Scroll = props => {
  return (
    <div style={{ overflowY: 'scroll', maxHeight: '100vh' }}>
      {props.children}
    </div>
  );
};

export default Scroll;
