import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import Third from './components/Third';
import First from './components/First';
import './App.css';
import Second from './components/Second';

const initState = {
  showThird: false,
};

function App() {
  const [state, setState] = useState(initState);

  const transitions = useTransition(state.showThird, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    native: true,
  });

  function handleToggle() {
    setState((prev) => ({
      ...prev,
      showThird: !prev.showThird,
    }));
  }

  return (
    <div className="App">
      <First />
      <Second onToggle={handleToggle} />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Third />
            </animated.div>
          )
      )}
    </div>
  );
}

export default App;
