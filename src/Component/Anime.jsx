/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: 腱鞘炎の人 (https://sketchfab.com/Kensyouen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shibahu-2e9dffd948f747668609a5a477daad86
Title: Shibahu
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Anime =(props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/shibahu.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Shibahu_skechfabfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="mesh_all">
                  <group name="line_gp">
                    <group name="jacketFur_line" />
                    <group name="lineA_gp">
                      <group name="hairA_line" />
                      <group name="hairB_1_line" />
                      <group name="hairB_2_line" />
                      <group name="hairB_3_line" />
                      <group name="tail_line" />
                    </group>
                    <group name="lineB_gp">
                      <group name="body_line" />
                      <group name="jacket_line" />
                      <group name="shirts_line" />
                      <group name="pants_line" />
                      <group name="socks_line" />
                      <group name="shoes_line" />
                      <group name="dogtag_line" />
                    </group>
                  </group>
                  <group name="cos_gp">
                    <group name="dogtag_mesh" />
                    <group name="jacket_mesh" />
                    <group name="jacketFur_mesh" />
                    <group name="shirts_mesh" />
                    <group name="pants_mesh" />
                    <group name="socks_mesh" />
                    <group name="shoes_mesh" />
                  </group>
                  <group name="body_gp">
                    <group name="body_mesh" />
                    <group name="tail_mesh" />
                  </group>
                  <group name="hair_gp">
                    <group name="hairA_mesh" />
                    <group name="hairB_1_mesh" />
                    <group name="hairB_2_mesh" />
                    <group name="hairB_3_mesh" />
                  </group>
                  <group name="face_gp">
                    <group name="face_mesh" />
                  </group>
                </group>
                <group name="Shibahu_Reference">
                  <group name="Object_40">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_42"
                      geometry={nodes.Object_42.geometry}
                      material={materials.lineB_mt}
                      skeleton={nodes.Object_42.skeleton}
                    />
                    <skinnedMesh
                      name="Object_43"
                      geometry={nodes.Object_43.geometry}
                      material={materials.lineC_mt}
                      skeleton={nodes.Object_43.skeleton}
                    />
                    <skinnedMesh
                      name="Object_44"
                      geometry={nodes.Object_44.geometry}
                      material={materials.lineC_mt}
                      skeleton={nodes.Object_44.skeleton}
                    />
                    <skinnedMesh
                      name="Object_45"
                      geometry={nodes.Object_45.geometry}
                      material={materials.lineC_mt}
                      skeleton={nodes.Object_45.skeleton}
                    />
                    <skinnedMesh
                      name="Object_46"
                      geometry={nodes.Object_46.geometry}
                      material={materials.lineC_mt}
                      skeleton={nodes.Object_46.skeleton}
                    />
                    <skinnedMesh
                      name="Object_47"
                      geometry={nodes.Object_47.geometry}
                      material={materials.lineC_mt}
                      skeleton={nodes.Object_47.skeleton}
                    />
                    <skinnedMesh
                      name="Object_48"
                      geometry={nodes.Object_48.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_48.skeleton}
                    />
                    <skinnedMesh
                      name="Object_49"
                      geometry={nodes.Object_49.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_49.skeleton}
                    />
                    <skinnedMesh
                      name="Object_50"
                      geometry={nodes.Object_50.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_50.skeleton}
                    />
                    <skinnedMesh
                      name="Object_51"
                      geometry={nodes.Object_51.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_51.skeleton}
                    />
                    <skinnedMesh
                      name="Object_52"
                      geometry={nodes.Object_52.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_52.skeleton}
                    />
                    <skinnedMesh
                      name="Object_53"
                      geometry={nodes.Object_53.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_53.skeleton}
                    />
                    <skinnedMesh
                      name="Object_54"
                      geometry={nodes.Object_54.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_54.skeleton}
                    />
                    <skinnedMesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials.CosA_mt}
                      skeleton={nodes.Object_55.skeleton}
                    />
                    <skinnedMesh
                      name="Object_56"
                      geometry={nodes.Object_56.geometry}
                      material={materials.CosA_mt}
                      skeleton={nodes.Object_56.skeleton}
                    />
                    <skinnedMesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      material={materials.CosB_mt}
                      skeleton={nodes.Object_57.skeleton}
                    />
                    <skinnedMesh
                      name="Object_58"
                      geometry={nodes.Object_58.geometry}
                      material={materials.CosA_mt}
                      skeleton={nodes.Object_58.skeleton}
                    />
                    <skinnedMesh
                      name="Object_59"
                      geometry={nodes.Object_59.geometry}
                      material={materials.CosB_mt}
                      skeleton={nodes.Object_59.skeleton}
                    />
                    <skinnedMesh
                      name="Object_60"
                      geometry={nodes.Object_60.geometry}
                      material={materials.CosA_mt}
                      skeleton={nodes.Object_60.skeleton}
                    />
                    <skinnedMesh
                      name="Object_61"
                      geometry={nodes.Object_61.geometry}
                      material={materials.CosB_mt}
                      skeleton={nodes.Object_61.skeleton}
                    />
                    <skinnedMesh
                      name="Object_62"
                      geometry={nodes.Object_62.geometry}
                      material={materials.Body_mt}
                      skeleton={nodes.Object_62.skeleton}
                    />
                    <skinnedMesh
                      name="Object_64"
                      geometry={nodes.Object_64.geometry}
                      material={materials.Body_mt}
                      skeleton={nodes.Object_64.skeleton}
                    />
                    <skinnedMesh
                      name="Object_65"
                      geometry={nodes.Object_65.geometry}
                      material={materials.HairA_mt}
                      skeleton={nodes.Object_65.skeleton}
                    />
                    <skinnedMesh
                      name="Object_66"
                      geometry={nodes.Object_66.geometry}
                      material={materials.HairB_mt}
                      skeleton={nodes.Object_66.skeleton}
                    />
                    <skinnedMesh
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials.HairB_mt}
                      skeleton={nodes.Object_67.skeleton}
                    />
                    <skinnedMesh
                      name="Object_68"
                      geometry={nodes.Object_68.geometry}
                      material={materials.HairB_mt}
                      skeleton={nodes.Object_68.skeleton}
                    />
                    <skinnedMesh
                      name="Object_69"
                      geometry={nodes.Object_69.geometry}
                      material={materials.Face_mt}
                      skeleton={nodes.Object_69.skeleton}
                      morphTargetDictionary={nodes.Object_69.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_69.morphTargetInfluences}
                    />
                    <skinnedMesh
                      name="Object_70"
                      geometry={nodes.Object_70.geometry}
                      material={materials.lineA_mt}
                      skeleton={nodes.Object_70.skeleton}
                      morphTargetDictionary={nodes.Object_70.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_70.morphTargetInfluences}
                    />
                    <skinnedMesh
                      name="Object_71"
                      geometry={nodes.Object_71.geometry}
                      material={materials.Cheek_mt}
                      skeleton={nodes.Object_71.skeleton}
                      morphTargetDictionary={nodes.Object_71.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_71.morphTargetInfluences}
                    />
                    <group name="Object_63" />
                  </group>
                </group>
                <group name="base_mesh">
                  <mesh
                    name="base_mesh_lambert2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base_mesh_lambert2_0.geometry}
                    material={materials.lambert2}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/shibahu.glb')

export default Anime;

