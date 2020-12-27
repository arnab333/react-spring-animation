import { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

function Second({ onToggle }) {
  const springDiv1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    delay: 1000,
  });

  return (
    <Fragment>
      <animated.div style={springDiv1}>
        <div style={c2Style}>
          <h2>Second Component</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            facere placeat. Iusto fuga maiores odio. Dolorum, porro eaque?
            Laboriosam, ad dolore voluptatum minima labore tempora ipsum eaque
            molestias expedita aspernatur.
          </p>
          <button style={btn} onClick={onToggle}>
            Toggle Third Component
          </button>
        </div>
      </animated.div>
    </Fragment>
  );
}

export default Second;

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem',
};

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0',
  cursor: 'pointer',
};
