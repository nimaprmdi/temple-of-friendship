import React from "react";
import { Icon } from "@iconify/react";

const Socials = ({ icon, link }) => {
    return (
        <a className="c-social-card u-mr-18-px" href={link} target="_blank">
            <Icon className="c-social-card__icon" icon={icon} width="50" height="50" />
        </a>
    );
};

export default Socials;
