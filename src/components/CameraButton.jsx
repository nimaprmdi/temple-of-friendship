import React, { useState } from "react";

const styles = {
    height: "30px",
    width: "30px",
    position: "absolute",
    zIndex: 1,
    bottom: "30vh",
    backgroundColor: "white",
    borderRadius: "999px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
};

const CameraButton = ({ handleViewChange }) => {
    const [currentView, setCurrentView] = useState("home");
    const [isNavHidden, setIsNavHidden] = useState(false);

    return <React.Fragment></React.Fragment>;
};

export default CameraButton;
