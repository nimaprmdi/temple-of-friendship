import React, { useState } from "react";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Temple from "./components/Temple";
import CameraControls from "./components/CameraControls";
import Lights from "./components/Lights";
import Effects from "./components/Effects";
import CustomMesh from "./components/CustomMesh";
import Birds from "./components/Birds";
import DatGui, { DatNumber, DatColor } from "react-dat-gui";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import CameraButton from "./components/CameraButton";
import Page from "./components/Page";
import "./assets/src/sass/App.scss";
import "./assets/css/css.css";
import state from "./state";

function App() {
    const [currentView, setCurrentView] = useState("home");
    const [page, setPage] = useState("home");
    const [isAnimeLoaded, setIsAnimeLoaded] = useState(false);

    const [opts, setOpts] = useState({
        bulbPosX: 33.5558,
        bulbPosY: 44.8218,
        bulbPosZ: 17.5957,
        bgColor: "#92CFFF",
    });

    const [cameraRig, setCameraRig] = useState({
        home: {
            xPos: 13.190217501883325,
            yPos: 5.178677020881302,
            zPos: -76.90546476742855,

            xRot: -32.70565024766321,
            yRot: 13.46773972781356,
            zRot: -19.272872007558984,

            fov: 60,
        },
        scene_1: {
            xPos: -20.414677804643546,
            yPos: 37.671138802660752,
            zPos: -60.635984094516814,

            xRot: 65.39908768737146,
            yRot: 14.167728774328435,
            zRot: -2.722252282248262,

            fov: 90,
        },
        scene_2: {
            xPos: 67.62719191784416,
            yPos: 5.4471248908308105,
            zPos: -65.93402314377497,

            xRot: 66.44465214523613,
            yRot: 22.339692925860053,
            zRot: 25.327314370355538,

            fov: 90,
        },
        scene_3: {
            xPos: 2.5415836941207,
            yPos: 2.2886723886251232,
            zPos: -26.317406651025948,

            xRot: -19.149459109751838,
            yRot: 38.364602970680394,
            zRot: 38.06619452569822,

            fov: 90,
        },
    });

    const sets = {
        home: {
            cameraPos: [cameraRig.home.xPos, cameraRig.home.yPos, cameraRig.home.zPos],
            target: [cameraRig.home.xRot, cameraRig.home.yRot, cameraRig.home.zRot],
            cameraFov: cameraRig.home.fov,
            name: "object005_bod_0",
        },
        scene_1: {
            cameraPos: [cameraRig.scene_1.xPos, cameraRig.scene_1.yPos, cameraRig.scene_1.zPos],
            target: [cameraRig.scene_1.xRot, cameraRig.scene_1.yRot, cameraRig.scene_1.zRot],
            cameraFov: cameraRig.scene_1.fov,
            name: "object005_bod_0",
        },
        scene_2: {
            cameraPos: [cameraRig.scene_2.xPos, cameraRig.scene_2.yPos, cameraRig.scene_2.zPos],
            target: [cameraRig.scene_2.xRot, cameraRig.scene_2.yRot, cameraRig.scene_2.zRot],
            cameraFov: cameraRig.scene_2.fov,
            name: "object005_bod_0",
        },
        scene_3: {
            cameraPos: [cameraRig.scene_3.xPos, cameraRig.scene_3.yPos, cameraRig.scene_3.zPos],
            target: [cameraRig.scene_3.xRot, cameraRig.scene_3.yRot, cameraRig.scene_3.zRot],
            cameraFov: cameraRig.scene_3.fov,
            name: "object005_bod_0",
        },
    };

    const handleClick = (animationName) => {
        state.cameraPos.set(...sets[animationName].cameraPos);
        state.target.set(...sets[animationName].target);
        state.activeMeshName = sets[animationName].name;
        state.cameraFov = sets[animationName].cameraFov;
        state.shouldUpdate = true;
        setPage(animationName);
        setCurrentView(animationName);
    };

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
            <CameraButton onHandleViewChange={(e) => handleClick(e)} setPage={setPage} />

            <Page isAnimeLoaded={state.isAnimeFinish} page={page} onHandleViewChange={(e) => handleClick(e)} />

            <Canvas
                onCreated={(state) => state.gl.setClearColor("#92CFFF")}
                frameloop="demand"
                camera={{ position: [20.868617986073411, 60.385716979477195, -200.9811707323818] }}
                shadows
            >
                <CustomMesh />

                <CameraControls setIsAnimeLoaded={setIsAnimeLoaded} />

                {/* <color attach="background" args={[opts.bgColor]} /> */}

                <fog attach="fog" args={["#92CFFF", 10, 200]} />

                <Orbit />

                <ambientLight intensity={0.2} />

                <Lights bulbPos={[opts.bulbPosX, opts.bulbPosY, opts.bulbPosZ]} />

                <axesHelper args={[5]} />

                <Physics>
                    <Suspense fallback={null}>
                        <Birds />
                    </Suspense>

                    <Suspense>
                        <Temple />
                    </Suspense>

                    <Floor bgColor={opts.bgColor} position={[0, -0.5, 0]} />

                    <Effects />
                </Physics>
            </Canvas>

            {/* 
            <DatGui data={opts} onUpdate={setOpts}>
                <DatNumber path="bulbPosX" min={-50} max={50} step={0.0001} />
                <DatNumber path="bulbPosY" min={-50} max={50} step={0.0001} />
                <DatNumber path="bulbPosZ" min={-50} max={50} step={0.0001} />
                <DatColor path="bgColor" label="background Color" />
            </DatGui> */}
        </div>
    );
}

export default App;
