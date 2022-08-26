import React, { useEffect } from "react";

const Home = ({ page, onHandleViewChange, isLoading }) => {
    return (
        page === "home" && (
            <div
                className={`u-fixed-container u-flex-right-center u-opacity-0 u-anime-fadeIn u-anime-delay-1 ${
                    isLoading ? "u-flex" : "u-hidden"
                }`}
            >
                <div className="c-modal u-color-white u-bg-primary u-radius u-max-w-50 u-color-white u-mr-5">
                    <h1>Welcome to Temple Of Friendship</h1>

                    <p className="h3">
                        This is a showcase project of this temple. Information used in this project is from Wikipedia
                        and credits are mentioned at the end of the presentation.
                    </p>

                    <p className="h3">I really hope you enjoy this simple story telling. </p>

                    <button onClick={() => onHandleViewChange("scene_1")}>Let’s Continue</button>
                </div>
            </div>
        )
    );
};

export default Home;
