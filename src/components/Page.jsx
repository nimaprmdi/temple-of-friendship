import React, { useEffect } from "react";
import Home from "../views/Home";
import Scene_1 from "../views/Scene_1";
import Scene_2 from "../views/Scene_2";
import Scene_3 from "../views/Scene_3";

const Page = ({ page, onHandleViewChange, isAnimeLoaded, isLoading }) => {
    const handleSwitch = (page) => {
        switch (page) {
            case "home":
                return (
                    <Home
                        isLoading={isLoading}
                        isAnimeLoaded={isAnimeLoaded}
                        page={page}
                        onHandleViewChange={(e) => onHandleViewChange(e)}
                    />
                );
                break;
            case "scene_1":
                return (
                    <Scene_1
                        isAnimeLoaded={isAnimeLoaded}
                        page={page}
                        onHandleViewChange={(e) => onHandleViewChange(e)}
                    />
                );
                break;
            case "scene_2":
                return (
                    <Scene_2
                        isAnimeLoaded={isAnimeLoaded}
                        page={page}
                        onHandleViewChange={(e) => onHandleViewChange(e)}
                    />
                );
                break;
            case "scene_3":
                return (
                    <Scene_3
                        isAnimeLoaded={isAnimeLoaded}
                        page={page}
                        onHandleViewChange={(e) => onHandleViewChange(e)}
                    />
                );
                break;
            default:
                return (
                    <Home isAnimeLoaded={isAnimeLoaded} page={page} onHandleViewChange={(e) => onHandleViewChange(e)} />
                );
                break;
        }
    };

    return <div>{handleSwitch(page)}</div>;
};

export default Page;
