import React from "react";
import Socials from "../components/Socials";

const Scene_3 = ({ page, onHandleViewChange }) => {
    return (
        page === "scene_3" && (
            <div className="u-fixed-container u-flex-center u-opacity-0 u-anime-fadeIn u-anime-delay-1">
                <div className="c-modal u-color-white u-bg-primary u-radius u-max-w-50 u-color-white">
                    <h1 className="u-no-margin">Hope you enjoyed!</h1>

                    <p className="h3 u-no-margin u-mt-24-px">
                        This website created by NimaPm for Practcing purposes and special thanks to Eggnot for (3D
                        Temple of Friendship) CC AttributionCreative model. You can find his Sketchfab from this{" "}
                        <a href="https://sketchfab.com/eggnot" target="_blank">
                            LINK
                        </a>
                        .
                    </p>

                    <p className="h3 u-no-margin">
                        Also i would like to thank to Pixabay for the free license music that i used in this project.
                    </p>

                    <h1 className="u-no-margin u-mt-24-px">Let’s Talk!</h1>

                    <p className="h3 u-no-margin u-mt-8-px">
                        Your are more than welcome to contact me so Let’s be social.
                    </p>

                    <div className="u-mt-8-px u-flex">
                        <Socials icon={"ant-design:skype-filled"} link="https://join.skype.com/invite/pWiMdLPglokt" />
                        <Socials icon={"cib:telegram-plane"} link="https://t.me/nimaprmi" />
                        <Socials icon={"ant-design:mail-outlined"} link="mailto:nimaprmdi@gmail.com" />
                        <Socials icon={"akar-icons:github-fill"} link="https://github.com/nimaprmdi" />
                        <Socials icon={"akar-icons:codepen-fill"} link="https://codepen.io/nimaprmi" />
                        <Socials icon={"iconoir:www"} link="https://nimapm.com" />
                    </div>

                    <button className="u-mt-24-px" onClick={() => onHandleViewChange("home")}>
                        Start Story Telling Again
                    </button>
                </div>
            </div>
        )
    );
};

export default Scene_3;
