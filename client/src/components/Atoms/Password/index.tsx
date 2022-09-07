import React from 'react';
import styled from 'styled-components';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import Eye from '../../../assets/icons/eye.svg';
import EyeCrossed from '../../../assets/icons/eye-crossed.svg';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
`;

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
`;

const ExtraContainer = styled.div`
    width: 100%;
    margin: 10px;
`;
const ForgotLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    position: relative;
    top: 5px;
`;

interface Props {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    forget?: boolean;
}

const Password = (props: Props) => {

    const [visibleDisplay, setVisible] = React.useState('initial');
    const [invisibleDisplay, setInvisible] = React.useState('none');
    const [type, setType] = React.useState('password');

    const makeVisible = () => {
        setType('text');
        setVisible('none');
        setInvisible('initial');
    }

    const makeInvisible = () => {
        setType('password');
        setInvisible('none');
        setVisible('initial');
    };

    const Password = (
        <Container>
            <StyledInput
                placeholder={props.placeholder}
                type={type}
                required
                min={5}
                onChange={props.onChange}
                name={props.name}
            />

            <img src={Eye} alt="eye" style={{
                display: visibleDisplay,
                width: '2em',
                height: '2em',
                cursor: 'pointer'
            }} onClick={makeVisible} />

            <img src={EyeCrossed} alt="eye" style={{
                display: invisibleDisplay,
                width: '2em',
                height: '2em',
                cursor: 'pointer'
            }} onClick={makeInvisible} />

        </Container>
    );

    if (props.forget) {
        return (
            <ExtraContainer>
                {Password}
                <ForgotLink>Forgot Password?</ForgotLink>
            </ExtraContainer>
        );
    }

    return (
        Password
    )
};

export default Password;