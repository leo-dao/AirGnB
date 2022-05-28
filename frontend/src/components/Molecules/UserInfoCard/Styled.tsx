import styled from 'styled-components';
import { UserInfoProps } from './index';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NameLocationStyled = styled.div.attrs((props: UserInfoProps) => props)`
    margin-left: 1em;
    text-align: center;
    // if type is card, then the font size is smaller
    font-size: ${(props: UserInfoProps) => props.type === 'card' ? '0.7em' : '1em'};
`;
