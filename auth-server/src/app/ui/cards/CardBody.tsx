import React, { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{}>;

export const CardBody = ({ children }: Properties) => {
    return (
        <div className="py-8 px-4 sm:px-10">
            {children}
        </div>
    );
}
