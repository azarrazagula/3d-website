import React, { useRef, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanet, hoverPlanet } from '../../redux/planetSlice';
import { useSpring, animated } from '@react-spring/three';

const Planet = ({ 
  id, name, radius, orbitRadius, orbitSpeed, rotationSpeed, 
  color, emissiveColor, atmosphereColor, hasRings, realImage 
}) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const dispatch = useDispatch();
  const hoveredPlanet = useSelector((state) => state.planets.hoveredPlanet);
  const isHovered = hoveredPlanet === id;

  const { scale } = useSpring({
    scale: isHovered ? 1.3 : 1,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    
    // Orbit rotation
    if (groupRef.current) {
      const x = Math.cos(elapsed * orbitSpeed) * orbitRadius;
      const z = Math.sin(elapsed * orbitSpeed) * orbitRadius;
      groupRef.current.position.set(x, 0, z);
    }

    // Self rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  const handlePointerOver = useCallback((e) => {
    e.stopPropagation();
    dispatch(hoverPlanet(id));
    document.body.style.cursor = 'pointer';
  }, [dispatch, id]);

  const handlePointerOut = useCallback((e) => {
    dispatch(hoverPlanet(null));
    document.body.style.cursor = 'crosshair';
  }, [dispatch]);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    dispatch(selectPlanet({ id, name, radius, orbitRadius, color, atmosphereColor, realImage }));
  }, [dispatch, id, name, radius, orbitRadius, color, atmosphereColor, realImage]);

  return (
    <group ref={groupRef}>
      <animated.group scale={scale}>
        <mesh
          ref={meshRef}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial 
            color={color}
            emissive={emissiveColor}
            emissiveIntensity={0.5}
            roughness={0.7}
            metalness={0.3}
          />
          
          {/* Atmosphere Glow */}
          <Sphere args={[radius * 1.05, 32, 32]}>
            <meshStandardMaterial 
              color={atmosphereColor}
              transparent
              opacity={0.2}
              side={1} // Backside
            />
          </Sphere>

          {/* Saturn's Rings */}
          {hasRings && (
            <mesh rotation={[Math.PI / 2.5, 0, 0]}>
              <ringGeometry args={[radius * 1.5, radius * 2.5, 64]} />
              <meshStandardMaterial 
                color={color}
                transparent
                opacity={0.4}
                side={2} // DoubleSide
              />
            </mesh>
          )}
        </mesh>

        {/* Label */}
        {isHovered && (
          <Text
            position={[0, radius + 0.5, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {name}
          </Text>
        )}
      </animated.group>
    </group>
  );
};

export default React.memo(Planet);
