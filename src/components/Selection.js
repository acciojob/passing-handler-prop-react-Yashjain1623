
import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [backgroundStyle, setBackgroundStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={backgroundStyle}
      onClick={() => applyColor(setBackgroundStyle)}
    >
      {/* Optional: You can add content or leave it empty */}
    </div>
  );
};

export default Selection;
