import React from 'react';
import { LinkProps } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnstyledLink = styled(Link)`
    background: none;
    border: none;
    :hover {
        color: white;
    }
`;

const TopLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    return <UnstyledLink {...props} ref={ref} onClick={() => window.scrollTo(0, 0)} />
});

export default TopLink;