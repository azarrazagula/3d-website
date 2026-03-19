import React from 'react';
import { Stars as DreiStars } from '@react-three/drei';

const Stars = () => {
  return (
    <DreiStars 
      radius={200} 
      depth={60} 
      count={8000} 
      factor={6} 
      saturation={0.3} 
      fade 
      speed={0.5} 
    />
  );
};

export default React.memo(Stars);
