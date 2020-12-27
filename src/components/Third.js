import { Fragment } from 'react';

function Third() {
  return (
    <Fragment>
      <div style={c3Style}>
        <h1>Third Component</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          provident natus iusto explicabo ipsa? Ullam quasi quam ea reiciendis
          obcaecati, dolorem dolor, labore nulla nisi facere, vero laborum.
          Voluptates, numquam.
        </p>
      </div>
    </Fragment>
  );
}

export default Third;

const c3Style = {
  background: 'skyblue',
  color: 'white',
  padding: '1.5rem 1.5rem 5rem 1.5rem',
};
