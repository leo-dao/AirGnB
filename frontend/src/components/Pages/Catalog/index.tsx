import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import AdCardProps from "../../Organisms/AdCard/interfaces";
import Search from "../../Organisms/Search";

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
            <div style={{
                marginTop: "3%",
                marginBottom: "6%"
            }}>
                <Search />
            </div>
            <div >
                <AdCardList
                    inputType="search"
                    data={props.data} />
            </div>
        </div>
    )
}

export default Catalog;