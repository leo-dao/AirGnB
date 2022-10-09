import React from 'react';
import styled from 'styled-components';
import { WarningFilled } from '@ant-design/icons';

const Text = styled.div.attrs((props: Props) => props)`
    font-size: 13px;
    text-align: center;
    color: red;
    align-self: flex-start;
    margin-left: 10px;
    visibility: ${props => props.on ? 'visible' : 'hidden'};
`;

const StyledWarning = styled(WarningFilled)`
    font-size: 15px;
    margin-right: 5px;
`;

interface Props {
    msg: String,
    on: Boolean
}

const ErrorMessage = (props: Props) => {

    return (
        <Text on={props.on}>
            <StyledWarning />
            {props.msg}
        </Text>
    )
}

export default ErrorMessage;