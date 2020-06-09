import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import { List } from './List';

function App() {

  const [toogle, setToogle] = useState(true)
  const [toogle2, setToogle2] = useState(true)
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ])

  const removeItem = (id) => {
    setItems(
      items.filter(i => i.id !== id)
    )
  }

  const addItem = () => {
    const title = prompt('Enter item title')
    const id = Date.now()

    setItems(items.concat([{title, id}]))
  }

  return (
    <div className="container">
      <button onClick={() => { setToogle(!toogle) }}>Toogle</button>
      <button onClick={() => { setToogle2(!toogle2) }}>Toogle2</button>
      <button onClick={addItem}>Add Item</button>
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
      <div className="blocks">
        <List items={items} onRemove={removeItem} />
      </div>

    </div>
  );
}

export default App;
