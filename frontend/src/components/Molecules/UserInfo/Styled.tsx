import styled from 'styled-components';
import { UserInfoProps } from '.';


// pass props to container
const Container = styled.div.attrs((props: UserInfoProps) => props)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
        font - size: ${(props: UserInfoProps) => props.titleSize ? props.titleSize : "2em"};
    }
    h2 {
        margin-top: -5%;
    }
    h3 {
        color: #999;
    }
    `;

export default Container;