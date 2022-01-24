import React, { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{
    title?: string;
}>;

export const Page = ({ children }: Properties) => {
    return (
        <div>
            {children}
        </div>
    );
}
