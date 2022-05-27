import React from "react";
import Button from "../../Atoms/Button";

interface Props {
    continue?: () => void;
    next?: string;
    prev?: string;
    back?: () => void;
    disabled?: boolean;
    opacity?: number;
    title: string;
    selection: React.ReactNode;
}

const AdPostBox = (props: Props) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.1)",
            alignItems: "center",
            width: "60%",
            opacity: props.opacity,
            cursor: props.disabled ? "not-allowed" : "auto",
            transition: "opacity 0.8s ease-in-out"
        }}>
            <div style={{
                display: "flex",
                marginTop: "3%",
                marginBottom: "3%",
                fontSize: "1.2rem",
            }}>
                {props.title}
            </div>
            <div style={{
            }}>
                {props.selection}
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                marginTop: "2%",
                marginBottom: "2%",
            }}>
                <Button
                    text="Back"
                    disabled={props.disabled}
                    backgroundColor="white"
                    onClick={props.back}
                />
                <Button
                    text="Continue"
                    disabled={props.disabled}
                    onClick={props.continue}
                />
            </div>

        </div>
    )
}

export default AdPostBox