import React from "react";
import { Sparkles, Shadow } from "@react-three/drei";
import * as THREE from "three";

const CustomMesh = () => {
    return (
        <mesh position={[0, 25, 0]} scale={new Array(3).fill(50)} visible>
            <Sparkles
                count={600}
                color={"#ffffff"}
                scale={new THREE.Vector3(3, 3, 3)}
                size={40}
                speed={5}
                transparent
            />
        </mesh>
    );
};

export default CustomMesh;
