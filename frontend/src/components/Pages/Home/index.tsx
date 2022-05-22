import React from "react";
import CarouselComponent from "../../Molecules/Carousel";
import Search from "../../Organisms/Search";

const Home = () => {
    return (
        <div style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "20px",
        }}>
            <h1>Lend or borrow musical instruments</h1>
            <div style={{
                marginTop: "10%",
                marginBottom: "10%",
            }}>
                <Search />
            </div>
        </div >
    )
};

export default Home;