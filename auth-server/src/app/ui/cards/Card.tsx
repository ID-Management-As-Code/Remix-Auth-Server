import React, { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{
    className?: string;
}>;

export const Card = ({ children, className }: Properties) => {
    return (
        <div className={`sm:mx-auto sm:w-full sm:max-w-md ${className}`}>
            <div className="bg-white shadow sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
