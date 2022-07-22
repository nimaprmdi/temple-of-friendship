import React from "react";
import temple_3 from "../assets/images/temple(3).jpg";

const Scene_2 = ({ page, onHandleViewChange }) => {
    return (
        page === "scene_2" && (
            <div className="u-fixed-container u-flex-left-center u-opacity-0 u-anime-fadeIn u-anime-delay-1">
                <div className="c-modal u-color-white u-bg-primary u-radius u-max-w-55 u-color-white u-ml-5">
                    <div className="u-flex-between-top u-gap-10">
                        <div className="u-max-w-50 u-width-50">
                            <p className="h3 u-no-margin">
                                It complements the Temple of Antiquities, which lies due north of the boulevard on an
                                axis with the Temple of Friendship.
                            </p>

                            <p className="h3 ">
                                The pavilion has a shallow, domed roof that is supported by eight Corinthian columns
                                with medallions displaying friends from classical antiquity.
                            </p>
                        </div>

                        <div className="u-flex u-flex-wrap u-width-50 ">
                            <img
                                src={temple_3}
                                className="u-width-100"
                                alt="Statue of Wilhelmine of Bayreuth in the Temple of Friendship"
                            />
                            <span className="h4 u-mt-8-px">
                                Statue of Wilhelmine of Bayreuth in the Temple of Friendship
                            </span>
                        </div>
                    </div>

                    <button onClick={() => onHandleViewChange("scene_3")}>Continue</button>
                </div>
            </div>
        )
    );
};

export default Scene_2;
