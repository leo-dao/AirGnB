import React from 'react';
import { LinkProps } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props extends LinkProps {
    hoverColor?: string;
}

const UnstyledLink = styled(Link).attrs((props: Props) => props)`
    background: none;
    border: none;
    :hover {
        color: ${(props) => props.hoverColor ? props.hoverColor : 'white'};
    }
`;

const TopLink = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
    return <UnstyledLink {...props} ref={ref} onClick={() => window.scrollTo(0, 0)} />
});

export default TopLink;