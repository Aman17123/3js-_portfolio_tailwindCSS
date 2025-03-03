

import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';



const AGENT = ({animationName = 'idle' , ...props}) => {
  const group = useRef();

  const { nodes, materials } = useGLTF('/models/human/AGENT.glb')
  


  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [idleAnimation[0] , saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]], 
    group
  );


  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="MAW"
            geometry={nodes.MAW.geometry}
            material={materials.MAW_MAT}
            skeleton={nodes.MAW.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/human/AGENT.glb')


export default AGENT;