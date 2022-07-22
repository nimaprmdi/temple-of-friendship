import { Suspense } from "react";
import Model from "./Model";

const Temple = () => {
    return (
        <>
            <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]} dispose={null}>
                    <Model path={"/models/temple_of_friendship/scene.gltf"} scale={new Array(3).fill(2.5)} />
                </group>
            </Suspense>
        </>
    );
};

export default Temple;
