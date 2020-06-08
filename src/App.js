import React, { useState } from 'react';

function App() {

  const [toogle, setToogle] = useState(true)

  return (
    <div className="container">
      <button onClick={() => {setToogle(!toogle)}}>Toogle</button>
      <hr />
      <div className={"blocks"}></div>
        {toogle && <div className={"square blue"}>{toogle.toString()}</div>}
     
    </div>
  );
}

export default App;
