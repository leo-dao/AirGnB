import React from "react";
import SearchBox from "../../Molecules/Search";
import CarouselComponent from "../../Molecules/Carousel";
import Button from "../../Atoms/Button";
import Search from "../../Molecules/Search";

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
                width: "60%",
                height: "150px",
                margin: "auto",
                boxShadow: '0px 0px 10px #ccc',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Search />
                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                marginBottom: "50px",
            }}>
                <Button
                    width={18}
                    height={50}
                    fontSize={33}
                    text='Jump to catalog'
                    goTo='/catalog'
                />
            </div>
        </div >
    )
};

export default Home;