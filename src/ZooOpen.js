import React from 'react';

export default function ZooOpen({ isZooOpen }) {
  return (
    <div className={isZooOpen ? 'open-close opened' : 'open-close closed' }>
      {
        isZooOpen ? <h1>Welcome to the Zoo!</h1>
          : <h1>Sorry the zoo is closed</h1>
      }        
    </div>
  );
}
