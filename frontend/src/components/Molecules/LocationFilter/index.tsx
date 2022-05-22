import React from "react";

const LocationFilter = () => {

    const openLocationMenu = () => {
        console.log("open location menu");
    }

    return (
        <div onClick={openLocationMenu}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FAFAFA",
                border: "1px solid #ccc",
                borderRadius: "15px",
                fontSize: "15px",
                cursor: "pointer",
            }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
                marginRight: "10px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: "18px",
                color: "#8D8D8D",
                height: "2.5em",
            }}>
                Choose a location
            </div>

            <div style={{
                borderLeft: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "22px",
            }}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_527461.png"
                    width={23}
                    height={30}
                >
                </img>
            </div>
        </div>
    )
}
export default LocationFilter;