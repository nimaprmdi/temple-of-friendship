import React from "react";
import temple_1 from "../assets/images/temple(1).jpg";
import temple_2 from "../assets/images/temple(2).jpg";

const Scene_1 = ({ page, onHandleViewChange, isAnimeLoaded }) => {
    return (
        page === "scene_1" && (
            <div className="u-fixed-container u-flex-left-center u-opacity-0 u-anime-fadeIn u-anime-delay-1">
                <div className="c-modal u-color-white u-bg-primary u-radius u-max-w-45 u-color-white u-ml-5">
                    <h1 className="u-no-margin">Story of Temple Of Friendship</h1>

                    <p className="h3 u-no-margin u-mt-24-px">
                        The Temple of Friendship (German: Freundschaftstempel) is a small, round building in Sanssouci
                        Park, Potsdam, in Germany.It was built by King Frederick II of Prussia in memory of his sister,
                        Princess Wilhelmine of Prussia, who died in 1758.
                    </p>

                    <div className="u-flex-between-center u-mt-24-px">
                        <img src={temple_1} className="u-width-45" alt="Temple of friendship" />

                        <img src={temple_2} className="u-width-45" alt="Temple of friendship" />
                    </div>

                    <button className="u-mt-24-px" onClick={() => onHandleViewChange("scene_2")}>
                        Let’s Continue
                    </button>
                </div>
            </div>
        )
    );
};

export default Scene_1;
