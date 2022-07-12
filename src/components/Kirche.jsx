import { Suspense } from "react";
import Model from "./Model";
import BoundingBox from "./BoundingBox";
import Dragable from "./Dragable";

const Kirche = () => {
    return (
        <>
            <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]} dispose={null}>
                    <Model path="/models/frauenkirche/scene.gltf" scale={new Array(3).fill(1)} />
                </group>
            </Suspense>
        </>
    );
};

export default Kirche;
