// HorizontalLineSVG.tsx
import React from "react";

interface HorizontalLineSVGProps {
  width: number;
  height: number;
}

const HorizontalLineSVG: React.FC<HorizontalLineSVGProps> = ({
  width,
  height,
}) => {
  return (
    <svg width={width} height={height}>
      <line
        x1="50"
        y1="100"
        x2="200"
        y2="100"
        style={{ stroke: "black", strokeWidth: 2 }}
      />
    </svg>
  );
};

export default HorizontalLineSVG;
