import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

interface Props {
    left: () => void;
    right: () => void;
    image: React.ReactNode;
}

const AdPhotoBg = (props: Props) => {

    const style = {
        fontSize: '50px',
        color: 'white',
        borderRadius: '50px',
        backgroundColor: 'rgba(10,110,221,0.3)',
        zIndex: '1',
    }

    return (
        <div style={{
            width: '800px',
            height: '500px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0px 0px 1px black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ArrowLeftOutlined style={style} onClick={props.left} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '500px',
            }}>
                {props.image}
            </div>
            <ArrowRightOutlined style={style} onClick={props.right} />
        </div>
    )
}

export default AdPhotoBg