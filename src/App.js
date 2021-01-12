import React, { useState } from 'react';

import Landing from './views/Landing';

const App = () => {
  const [month, setMonth] = useState(null);

  return (
    <div className='App'>
      <Landing
        {...{ setMonth }}
      />
    </div>
  );
}

export default App;
