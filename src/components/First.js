import { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

function First() {
  const springProps = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });

  const springNumber1 = useSpring({
    number: 10,
    from: { number: 0 },
    config: { duration: 10000 },
  });

  return (
    <Fragment>
      <animated.div style={springProps}>
        <div style={c1Style}>
          <h1>First Component</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo,
            animi, vero qui corrupti laboriosam alias possimus saepe commodi
            minus, autem necessitatibus a ipsam? Explicabo repudiandae illo
            molestiae tempora. Dicta?
          </p>
          <animated.div style={springNumber1}>
            <h1 style={counterStyle}>
              <animated.span>
                {springNumber1.number.interpolate((num) => num.toFixed())}
              </animated.span>
            </h1>
          </animated.div>
        </div>
      </animated.div>
    </Fragment>
  );
}

export default First;

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem',
};

const counterStyle = {
  background: '#333',
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto',
};
