import React from 'react';

import logo from '../../../images/logo.png';

interface Properties {
    className?: string;
}

export const Logo = ({ className }: Properties) => {
    return (
        <img src={logo} alt="Remix Auth Server" className={className} />
    );
}
