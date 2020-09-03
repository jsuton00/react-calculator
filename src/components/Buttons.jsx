import React from 'react';

export const MainKeys = (props) => {
  const { id, label, buttonKey, clickHandler } = props;

  return (
    <button
      id={id}
      type="button"
      className="main-keys"
      onClick={(e) => clickHandler(e.target.value)}
      value={buttonKey}
    >
      {label}
    </button>
  );
};

export const OperatorKeys = (props) => {
  const { id, label, buttonKey, clickHandler } = props;

  return (
    <button
      id={id}
      type="button"
      className="operator-keys"
      onClick={(e) => clickHandler(e.target.value)}
      value={buttonKey}
    >
      {label}
    </button>
  );
};
