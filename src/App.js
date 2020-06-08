import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

function App() {

  const [toogle, setToogle] = useState(true)

  return (
    <div className="container">
      <button onClick={() => { setToogle(!toogle) }}>Toogle</button>
      <hr />
      <div className={"blocks"}></div>
        <Transition
          in={toogle}
          timeout={{
            enter: 1000,
            exit: 2000
          }}
          mountOnEnter
          unmountOnExit>
          {state => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
    </div>
  );
}

export default App;
