import React from "react";
import styled from "styled-components";


interface ToggleProps {
    display: boolean
}

const Container = styled.div.attrs((props: ToggleProps) => props)`
    background-color: black;
    display: ${props => props.display ? 'flex' : 'none'};
    @media (min-width: 600px) {
        display: none;
    }
`



const ToggleNav = (props: ToggleProps) => {

    return (
        <Container
            display={props.display}
        >
            <ul>
                <li>
                    Idk
                </li>
            </ul>
        </Container>
    )
};

export default ToggleNav;