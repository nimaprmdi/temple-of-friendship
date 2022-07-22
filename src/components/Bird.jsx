import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bird = ({ speed, factor, url, birdName, ...props }) => {
    const { nodes, materials, animations } = useLoader(GLTFLoader, url);
    const group = useRef();
    const mesh = useRef();
    const [start] = useState(() => Math.random() * 5000);
    const [mixer] = useState(() => new THREE.AnimationMixer());
    useEffect(() => void mixer.clipAction(animations[0], group.current).play(), []);
    useFrame((state, delta) => {
        mesh.current.position.y = Math.sin(start + state.clock.elapsedTime) * 5;
        mesh.current.rotation.x = Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10;
        mesh.current.rotation.y = (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2;
        group.current.rotation.y += Math.sin((delta * factor) / 4) * Math.cos((delta * factor) / 2) * 1.5;
        mixer.update(delta * speed);
    });

    return (
        <group scale={[1.2, 1.2, 1.2]} ref={group} dispose={null}>
            <scene name="Scene" {...props}>
                <mesh
                    ref={mesh}
                    scale={1}
                    name={"Object_0"}
                    morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
                    rotation={[Math.PI / 10, 0, 0]}
                    geometry={nodes.Object_0.geometry}
                    material={materials.Material_0_COLOR_0}
                />
            </scene>
        </group>
    );
};

export default Bird;
