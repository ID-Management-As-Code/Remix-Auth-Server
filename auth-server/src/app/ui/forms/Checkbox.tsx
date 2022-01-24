import React from 'react';

interface Properties {
    className?: string;
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
}

export const Checkbox = ({
    className,
    id,
    label,
    name,
    required
 }: Properties) => {
    const classes = 'flex items-center ' + className;

    return (
        <div className={classes}>
            <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                id={id || name}
                name={name}
                required={required}
                type="checkbox"
            />

            <label htmlFor={id || name} className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    );
}
