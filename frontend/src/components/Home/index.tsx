import React from "react";
import SearchBox from "../Search";
import CarouselComponent from "../Carousel";
import JumpCatalog from "../JumpCatalog";

const Home = () => {
    return (
        <div>

            <div style={{
                marginTop: "50px",
                marginBottom: "50px",
                display: "flex",
                justifyContent: "center",
            }}>
                <h1>Lend or borrow musical instruments</h1>
            </div>

            <div style={{
                backgroundColor: "white",
                width: "50%",
                height: "150px",
                margin: "auto",
                boxShadow: '0px 0px 10px #ccc',
            }}>
                <div style={{
                    width: "250px",
                    position: "relative",
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <SearchBox />

                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <JumpCatalog />

            </div>
            {/* <CarouselComponent /> */}
        </div >
    )
};



export default Home;