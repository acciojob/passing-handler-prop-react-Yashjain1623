import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;

  return (
    <button
    data-testid={props.color}
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label} 
    </button>
  );
}

export default ColourSelector;
