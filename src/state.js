import * as THREE from "three";

/**
 *
 * Here We added animation to scene using this state
 *
 * Camera Pos is the start Value
 *
 * Camera Target is the finishing point
 *
 * cameraPos & target can set programmatically
 *
 * more info in cameraControl.jsx
 *
 *
 */

const state = {
    activeMesh: {},
    activeMeshName: "mesh_9",
    cameraFov: 60,
    cameraPos: new THREE.Vector3(13.190217501883325, 5.178677020881302, -76.90546476742855),
    target: new THREE.Vector3(-32.70565024766321, 13.46773972781356, -19.272872007558984),

    shouldUpdate: true,
};

export default state;
