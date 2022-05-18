import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import AdCardProps from "../../Organisms/AdCard/interfaces";

interface Props {
    data: AdCardProps[],
}

const Catalog = (props: Props) => {
    return (
        <div style={{
        }}>
            <AdCardList data={props.data} />
        </div>
    )
}

export default Catalog;