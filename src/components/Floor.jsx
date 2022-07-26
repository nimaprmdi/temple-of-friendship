import React, { useEffect } from "react";
import { useBox } from "@react-three/cannon";

const Floor = (props) => {
    const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }));

    useEffect(() => {
        // console.log(ref);
    }, []);

    return (
        <mesh ref={ref} {...props} receiveShadow>
            <boxBufferGeometry args={[1500, 1, 1500]} />
            <meshPhysicalMaterial color={"#89D7FF"} transparent />
        </mesh>
    );
};

export default Floor;
