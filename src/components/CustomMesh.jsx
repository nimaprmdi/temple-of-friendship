import React from "react";
import { Sparkles, Shadow } from "@react-three/drei";
import * as THREE from "three";

const CustomMesh = () => {
    return (
        <mesh position={[0, 25, 0]} scale={new Array(3).fill(50)} visible>
            <Sparkles
                count={500}
                color={"#ffffff"}
                scale={new THREE.Vector3(1.5, 1.5, 1.5)}
                size={20}
                speed={4}
                transparent
            />
        </mesh>
    );
};

export default CustomMesh;
