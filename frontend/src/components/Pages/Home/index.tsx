import React from "react";
import SearchBox from "../../Molecules/Search";
import CarouselComponent from "../../Molecules/Carousel";
import Button from "../../Atoms/Button";

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
                marginTop: "50px",
                marginBottom: "50px",
            }}>
                <Button
                    width={20}
                    height={50}
                    fontSize={30}
                    text='Jump to catalog'
                    goTo='/catalog'
                />
            </div>
        </div >
    )
};

export default Home;