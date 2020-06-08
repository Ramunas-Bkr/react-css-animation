import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

function App() {

  const [toogle, setToogle] = useState(true)
  const [toogle2, setToogle2] = useState(true)

  return (
    <div className="container">
      <button onClick={() => { setToogle(!toogle) }}>Toogle</button>
      <button onClick={() => { setToogle2(!toogle2) }}>Toogle2</button>
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
        <CSSTransition
          in={toogle2}
          timeout={1000}
          classNames="os"
          mountOnEnter
          unmountOnExit>
          <div className={`square orange`}>
            {toogle2.toString()}
          </div>
        </CSSTransition>
    </div>
  );
}

export default App;
