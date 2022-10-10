import React from 'react';
import styled from 'styled-components';
import Eye from '../../../assets/icons/eye.svg';
import ErrorMessage from '../ErrorMessage';
import EyeCrossed from '../../../assets/icons/eye-crossed.svg';

const PasswordContainer = styled.div.attrs((props: PasswordProps) => props)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: ${props => props.errorDisplay ? "2px solid red" : "1px solid #ccc"};
    padding: 0 10px;
    margin: 10px;
`;

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
`;

const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

interface PasswordProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    errorDisplay?: boolean;
}

const Password = (props: PasswordProps) => {

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

    const password = (
        <PasswordContainer
            errorDisplay={props.errorDisplay}
            error={props.error}
        >
            <StyledInput
                placeholder={props.placeholder}
                type={type}
                required
                min={5}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.currentTarget.setCustomValidity(' ')
                }}
                name='password'
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
        </PasswordContainer>
    );


    if (props.error !== undefined && props.errorDisplay !== undefined) {
        return (
            <ErrorContainer>
                {password}
                <ErrorMessage
                    msg={props.error}
                    on={props.errorDisplay} />
            </ErrorContainer>
        )
    }

    return password;
};

export default Password;