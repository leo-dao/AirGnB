import React from 'react';
import { LinkProps } from "react-router-dom";
import { Link } from 'react-router-dom';

const TopLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    return <Link {...props} ref={ref} onClick={() => window.scrollTo(0, 0)} />
});

export default TopLink;