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
    cameraPos: new THREE.Vector3(7, 2, 6),
    target: new THREE.Vector3(4, 0, 0),
    shouldUpdate: true,
};

export default state;
