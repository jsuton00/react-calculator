import React from 'react';

export default function Display(props) {
  const { results } = props;

  return (
    <div id="calculator-display" className="calculator-display container">
      <div
        id="calculator-display-results"
        className="calculator-display-results row"
      >
        <p id="display-results" className="display-results">
          {results.length > 0 ? results : 0}
        </p>
      </div>
    </div>
  );
}
