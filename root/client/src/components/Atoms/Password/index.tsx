import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin: 10px;
`

interface Props {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    }

    return (
        <Container>
            <Input
                placeholder={props.placeholder}
                type={type}
                required
                min={5}
                onChange={props.onChange}
                isPassword
            />
            <EyeOutlined
                onClick={makeVisible}
                style={{ display: visibleDisplay }}
            />
            <EyeInvisibleOutlined
                onClick={makeInvisible}
                style={{ display: invisibleDisplay }}
            />
        </Container>
    )
};

export default Password;