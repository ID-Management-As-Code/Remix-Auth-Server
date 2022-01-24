import React, { MouseEventHandler, PropsWithChildren } from 'react';

type ButtonColor = 'blue' | 'green' | 'red' | 'orange' | 'yellow' | 'indigo' | 'gray' | 'white' | 'black'
    | 'transparent' | 'slate' | 'zinc' | 'stone' | 'amber' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'sky'
    | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'neutral';
type ButtonSize = 'small' | 'default' | 'large';

type Properties = PropsWithChildren<{
    color: ButtonColor;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    outline?: boolean;
    size?: ButtonSize;
    type?: 'button' | 'reset' | 'submit';
}>;

function assignSize(size?: ButtonSize) {
    switch (size) {
        case 'small':
            return 'py-1 px-2 text-sm';

        case 'large':
            return 'py-4 px-8 text-base';

        default:
            return 'py-2 px-4 text-sm';
    }
}

function assignBackgroundColors(color: ButtonColor) {
    let css = 'border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ';

    switch (color) {
        case 'white':
            css += `bg-white border-gray-400 hover:bg-gray-200 focus:ring-gray-500 text-black`;
            break;

        case 'black':
            css += `bg-black hover:bg-gray-900 focus:ring-gray-800 text-white`;
            break;

        default:
            css += `bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500 text-white`;
            break;
    }

    return css;
}

function assignBorderColors(color: ButtonColor) {
    switch (color) {
        case 'white':
            return `border-white text-white`;

        case 'black':
            return `border-black text-black`;

        default:
            return `border-${color}-600 text-${color}-800`;
    }
}

function assignColors(color: ButtonColor, outline?: boolean) {
    if (outline) {
        return assignBorderColors(color);
    }

    return assignBackgroundColors(color);
}

export const Button = ({
    children,
    color,
    onClick,
    outline,
    size,
    type = 'button'
}: Properties) => {
    let classes = 'w-full flex justify-center border '
        + 'rounded-md shadow-sm font-medium '
        + assignSize(size)
        + ' '
        + assignColors(color, outline);

    return (
        <button
            onClick={onClick}
            type={type}
            className={classes}
        >
            {children}
        </button>
    );
}
