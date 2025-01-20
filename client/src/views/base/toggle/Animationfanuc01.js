/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

import { useAnimations } from '@react-three/drei'

export default function ModelAnimasi({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./src/model/fanuc/animationfanuc01.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions)
    actions.Mesh_51Action.play(0)
    actions.Mesh_34Action.play(1)
    actions.Mesh_61Action.play(2)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Node_0" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="01-_TABLE_BASE-2" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Body_1">
              <group name="Node_5">
                <mesh name="Mesh_0" geometry={nodes.Mesh_0.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_10">
              <group name="Node_32">
                <mesh name="Mesh_9" geometry={nodes.Mesh_9.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_11">
              <group name="Node_35">
                <mesh
                  name="Mesh_10"
                  geometry={nodes.Mesh_10.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_12">
              <group name="Node_38">
                <mesh
                  name="Mesh_11"
                  geometry={nodes.Mesh_11.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_13">
              <group name="Node_41">
                <mesh
                  name="Mesh_12"
                  geometry={nodes.Mesh_12.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_14">
              <group name="Node_44">
                <mesh
                  name="Mesh_13"
                  geometry={nodes.Mesh_13.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_15">
              <group name="Node_47">
                <mesh
                  name="Mesh_14"
                  geometry={nodes.Mesh_14.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_16">
              <group name="Node_50">
                <mesh
                  name="Mesh_15"
                  geometry={nodes.Mesh_15.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_17">
              <group name="Node_53">
                <mesh
                  name="Mesh_16"
                  geometry={nodes.Mesh_16.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_18">
              <group name="Node_56">
                <mesh
                  name="Mesh_17"
                  geometry={nodes.Mesh_17.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_19">
              <group name="Node_59">
                <mesh
                  name="Mesh_18"
                  geometry={nodes.Mesh_18.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_2">
              <group name="Node_8">
                <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_20">
              <group name="Node_62">
                <mesh
                  name="Mesh_19"
                  geometry={nodes.Mesh_19.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_21">
              <group name="Node_65">
                <mesh
                  name="Mesh_20"
                  geometry={nodes.Mesh_20.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_22">
              <group name="Node_68">
                <mesh
                  name="Mesh_21"
                  geometry={nodes.Mesh_21.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_23">
              <group name="Node_71">
                <mesh
                  name="Mesh_22"
                  geometry={nodes.Mesh_22.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_24">
              <group name="Node_74">
                <mesh
                  name="Mesh_23"
                  geometry={nodes.Mesh_23.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_25">
              <group name="Node_77">
                <mesh
                  name="Mesh_24"
                  geometry={nodes.Mesh_24.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_26">
              <group name="Node_80">
                <mesh
                  name="Mesh_25"
                  geometry={nodes.Mesh_25.geometry}
                  material={materials.texture}
                />
              </group>
            </group>
            <group name="Body_3">
              <group name="Node_11">
                <mesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_4">
              <group name="Node_14">
                <mesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_5">
              <group name="Node_17">
                <mesh name="Mesh_4" geometry={nodes.Mesh_4.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_6">
              <group name="Node_20">
                <mesh name="Mesh_5" geometry={nodes.Mesh_5.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_7">
              <group name="Node_23">
                <mesh name="Mesh_6" geometry={nodes.Mesh_6.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_8">
              <group name="Node_26">
                <mesh name="Mesh_7" geometry={nodes.Mesh_7.geometry} material={materials.texture} />
              </group>
            </group>
            <group name="Body_9">
              <group name="Node_29">
                <mesh name="Mesh_8" geometry={nodes.Mesh_8.geometry} material={materials.texture} />
              </group>
            </group>
          </group>
          <group
            name="02-_FIX_PLATEN-1"
            position={[-0.04, 0, 0.51]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          >
            <group name="Body_1001">
              <group name="Node_98">
                <mesh name="Mesh_30" geometry={nodes.Mesh_30.geometry} material={materials.Mtl2} />
              </group>
            </group>
            <group name="Body_2001">
              <group name="3DGeom-210">
                <group name="Node_85">
                  <mesh
                    name="Mesh_26"
                    geometry={nodes.Mesh_26.geometry}
                    material={materials.Mtl3}
                  />
                </group>
              </group>
              <group name="3DGeom-211">
                <group name="Node_88">
                  <mesh
                    name="Mesh_27"
                    geometry={nodes.Mesh_27.geometry}
                    material={materials.Mtl4}
                  />
                </group>
              </group>
            </group>
            <group name="Body_3001">
              <group name="Node_101">
                <mesh name="Mesh_31" geometry={nodes.Mesh_31.geometry} material={materials.Mtl2} />
              </group>
            </group>
            <group name="Body_4001">
              <group name="Node_104">
                <mesh name="Mesh_32" geometry={nodes.Mesh_32.geometry} material={materials.Mtl2} />
              </group>
            </group>
            <group name="Body_5001">
              <group name="3DGeom-517">
                <group name="Node_92">
                  <mesh
                    name="Mesh_28"
                    geometry={nodes.Mesh_28.geometry}
                    material={materials.texture1}
                  />
                </group>
              </group>
              <group name="3DGeom-518">
                <group name="Node_95">
                  <mesh
                    name="Mesh_29"
                    geometry={nodes.Mesh_29.geometry}
                    material={materials.Thread}
                  />
                </group>
              </group>
            </group>
          </group>
          <group
            name="03-_MOVE_PLATEN-2"
            position={[-0.7, 0, 0.51]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          >
            <group name="Body_1002">
              <group name="3DGeom-776">
                <group name="Node_109" />
              </group>
              <group name="3DGeom-777">
                <group name="Node_112">
                  <mesh
                    name="Mesh_34"
                    geometry={nodes.Mesh_34.geometry}
                    material={materials.Mtl6}
                    position={[0, 0, -0.08]}
                  />
                </group>
              </group>
            </group>
          </group>
          <group
            name="04_-_FIX_PLATE_HIDRAULIC-1"
            position={[-2, 0, 0.51]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          >
            <group name="Body_1003">
              <group name="Node_116">
                <mesh
                  name="Mesh_35"
                  geometry={nodes.Mesh_35.geometry}
                  material={materials.texture8}
                />
              </group>
            </group>
          </group>
          <group
            name="06_-_NOZLE-1"
            position={[-0.1, 0, 0.5]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          >
            <group name="Body_1004">
              <group name="3DGeom-1273">
                <group name="Node_121">
                  <mesh
                    name="Mesh_36"
                    geometry={nodes.Mesh_36.geometry}
                    material={materials.Mtlb}
                  />
                </group>
              </group>
              <group name="3DGeom-1274">
                <group name="Node_124">
                  <mesh
                    name="Mesh_37"
                    geometry={nodes.Mesh_37.geometry}
                    material={materials.Mtla}
                  />
                </group>
              </group>
              <group name="3DGeom-1275">
                <group name="Node_127">
                  <mesh
                    name="Mesh_38"
                    geometry={nodes.Mesh_38.geometry}
                    material={materials.Mtl9}
                  />
                </group>
              </group>
            </group>
            <group name="Body_2002">
              <group name="Node_130">
                <mesh name="Mesh_39" geometry={nodes.Mesh_39.geometry} material={materials.Mtl9} />
              </group>
            </group>
            <group name="Body_3002">
              <group name="Node_133">
                <mesh name="Mesh_40" geometry={nodes.Mesh_40.geometry} material={materials.Mtl9} />
              </group>
            </group>
          </group>
          <group
            name="07-_BASE_NOZZLE-1"
            position={[2.1, 0, 0.18]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          >
            <group name="Body_1005">
              <group name="Node_137">
                <mesh name="Mesh_41" geometry={nodes.Mesh_41.geometry} material={materials.Mtl10} />
              </group>
            </group>
          </group>
          <group
            name="08_-_HEAD_NOZZLE-1"
            position={[0.35, 0, 0.5]}
            rotation={[0.59, Math.PI / 2, 0]}
          >
            <group name="Body_1006">
              <group name="Node_141">
                <mesh
                  name="Mesh_42"
                  geometry={nodes.Mesh_42.geometry}
                  material={materials['DefaultMaterial~1']}
                />
              </group>
            </group>
          </group>
          <group
            name="09_-_COVER_FIX_PLATE-1"
            position={[-2.39, 0, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          >
            <group name="Body_1007">
              <group name="Node_158">
                <mesh name="Mesh_47" geometry={nodes.Mesh_47.geometry} material={materials.Mtl11} />
              </group>
            </group>
            <group name="Body_2003">
              <group name="3DGeom-1531">
                <group name="Node_146">
                  <mesh
                    name="Mesh_43"
                    geometry={nodes.Mesh_43.geometry}
                    material={materials.Mtl13}
                  />
                </group>
              </group>
              <group name="3DGeom-1532">
                <group name="Node_149">
                  <mesh
                    name="Mesh_44"
                    geometry={nodes.Mesh_44.geometry}
                    material={materials.Mtl11}
                  />
                </group>
              </group>
              <group name="3DGeom-1533">
                <group name="Node_152">
                  <mesh
                    name="Mesh_45"
                    geometry={nodes.Mesh_45.geometry}
                    material={materials.Mtl14}
                  />
                </group>
              </group>
              <group name="3DGeom-1534">
                <group name="Node_155">
                  <mesh
                    name="Mesh_46"
                    geometry={nodes.Mesh_46.geometry}
                    material={materials.Mtl12}
                  />
                </group>
              </group>
            </group>
          </group>
          <group
            name="10_-_DOOR_MOULD-2"
            position={[-0.63, -0.47, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Body_1010">
              <group name="Node_174">
                <mesh
                  name="Mesh_51"
                  geometry={nodes.Mesh_51.geometry}
                  material={materials.Mtl19}
                  position={[-0.13, 0, 0]}
                />
              </group>
            </group>
            <group name="Body_2004">
              <group name="Node_177" />
            </group>
            <group name="Body_3003">
              <group name="Node_180" />
            </group>
          </group>
          <group
            name="11_-_DOOR_MOULD_NOZZLE-3"
            position={[0.1, -0.47, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          >
            <group name="Body_1011">
              <group name="Node_184" />
            </group>
            <group name="Body_2005">
              <group name="Node_187" />
            </group>
            <group name="Body_3004">
              <group name="Node_190">
                <mesh name="Mesh_56" geometry={nodes.Mesh_56.geometry} material={materials.Mtl1b} />
              </group>
            </group>
            <group name="Body_4002">
              <group name="Node_193" />
            </group>
          </group>
          <group
            name="12_-_DOOR_HANDLE-2"
            position={[0.38, -0.46, -0.03]}
            rotation={[1.58, Math.PI / 2, 0]}
          >
            <group name="Body_1012">
              <group name="Node_197" />
            </group>
          </group>
          <group
            name="12_-_DOOR_HANDLE-3"
            position={[1.3, -0.46, 0.12]}
            rotation={[1.58, Math.PI / 2, 0]}
          >
            <group name="Body_1013">
              <group name="Node_201">
                <mesh name="Mesh_59" geometry={nodes.Mesh_59.geometry} material={materials.Mtl22} />
              </group>
            </group>
          </group>
          <group name="13_-_SCREW-1" position={[1.26, 0, 0.5]} rotation={[0.84, 0, -Math.PI]}>
            <group name="Body_1014">
              <group name="Node_205">
                <mesh name="Mesh_60" geometry={nodes.Mesh_60.geometry} material={materials.Mtl24} />
              </group>
            </group>
          </group>
          <group name="Camera-1" position={[0.19, -20.82, 0.06]} rotation={[Math.PI / 2, 0, 0]} />
          <group
            name="CAVITY_PLATE-1"
            position={[-0.43, 0, 0.62]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <group name="Body_1015">
              <group name="Node_209">
                <mesh
                  name="Mesh_61"
                  geometry={nodes.Mesh_61.geometry}
                  material={materials.Mtl25}
                  position={[0, 0.08, 0]}
                />
              </group>
            </group>
          </group>
          <group
            name="CORE_PLATE-1"
            position={[-0.22, 0, 0.51]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <group name="Body_1016">
              <group name="Node_213">
                <mesh name="Mesh_62" geometry={nodes.Mesh_62.geometry} material={materials.Mtl26} />
              </group>
            </group>
          </group>
          <group
            name="Part17^00_ASSEMBLY_FANUC-1"
            position={[2.8, 0, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          >
            <group name="Body_1008">
              <group name="3DGeom-1567">
                <group name="Node_163">
                  <mesh
                    name="Mesh_48"
                    geometry={nodes.Mesh_48.geometry}
                    material={materials.Mtl15}
                  />
                </group>
              </group>
              <group name="3DGeom-1568">
                <group name="Node_166" />
              </group>
            </group>
          </group>
          <group
            name="Part19^00_ASSEMBLY_FANUC-1"
            position={[-0.05, -0.47, 0]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          >
            <group name="Body_1009">
              <group name="Node_170">
                <mesh name="Mesh_50" geometry={nodes.Mesh_50.geometry} material={materials.Mtl18} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/animationfanuc01.glb')
