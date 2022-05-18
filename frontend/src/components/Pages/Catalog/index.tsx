import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import AdCardProps from "../../Organisms/AdCard/interfaces";

interface Props {
    data: AdCardProps[],
}

const Catalog = (props: Props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>Rent from local musicians</h1>
            <div>
                <AdCardList data={props.data} />
            </div>
        </div>
    )
}

export default Catalog;