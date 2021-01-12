import React, { useState } from 'react';

import Landing from './views/Landing';
import Account from './views/Account';

const App = () => {
  const [month, setMonth] = useState(null);

  return (
    <main className='App'>
      {!month &&
        <Landing
          {...{ setMonth }}
        />
      }

      {month && (
        <Account
          {...{ month }}
        />
      )}
    </main>
  );
}

export default App;
