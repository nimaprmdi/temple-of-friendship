import React, { useState } from "react";
import Orbit from "./components/Orbit";
import Box from "./components/Box";
import Floor from "./components/Floor";
import ColorPicker from "./components/ColorPicker";
import Dragable from "./components/Dragable";
import Kirche from "./components/Kirche";
import CameraControls from "./components/CameraControls";
import CameraButton from "./components/CameraButton";
import Lights from "./components/Lights";
import Effects from "./components/Effects";
import BackgroundColor from "./components/BackgroundColor";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import DatGui, { DatNumber, DatColor } from "react-dat-gui";
import "./assets/css/css.css";

function App() {
    const [opts, setOpts] = useState({
        bulbPosX: -0.2479,
        bulbPosY: 40.8857,
        bulbPosZ: 0,

        bgColor: "#92CFFF",
    });

    return (
        <div
            gl={{
                powerPreference: "high-performance",
                antialias: false,
                stencil: false,
                depth: false,
            }}
            style={{ height: "100vh", width: "100vw" }}
        >
            <ColorPicker />
            <CameraButton />
            <Canvas
                onCreated={(state) => state.gl.setClearColor("#92CFFF")}
                frameloop="demand"
                camera={{ position: [7, 7, 7] }}
                shadows
            >
                {/* <color attach="background" args={[opts.bgColor]} /> */}
                <CameraControls />

                <fog attach="fog" args={["#92CFFF", 10, 200]} />

                <Orbit />

                <ambientLight intensity={0.2} />

                <Lights bulbPos={[opts.bulbPosX, opts.bulbPosY, opts.bulbPosZ]} />

                <axesHelper args={[5]} />
                <Physics>
                    <Kirche />

                    <Dragable>
                        <Suspense fallback={null}>
                            <Box position={[-7, 1, 0]} />
                        </Suspense>

                        <Suspense fallback={null}>
                            <Box position={[7, 1, 0]} />
                        </Suspense>
                    </Dragable>

                    <Floor bgColor={opts.bgColor} position={[0, -0.5, 0]} />

                    <Effects />
                </Physics>
            </Canvas>

            <DatGui data={opts} onUpdate={setOpts}>
                <DatNumber path="bulbPosX" min={-50} max={50} step={0.0001} />
                <DatNumber path="bulbPosY" min={-50} max={50} step={0.0001} />
                <DatNumber path="bulbPosZ" min={-50} max={50} step={0.0001} />
                <DatColor path="bgColor" label="background Color" />
            </DatGui>
        </div>
    );
}

export default App;
