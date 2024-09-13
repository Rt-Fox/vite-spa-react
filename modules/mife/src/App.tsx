import { useState } from 'react';
// import { title, DummyComponent } from '@demo/util';
// import reactLogo from './assets/react.svg';

// this is made available via the root config import map

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div>
       dsads
      </div>
      {/*<h1>{title}</h1>*/}
      {/*<DummyComponent />*/}
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ fontSize: 16, padding: 10 }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
