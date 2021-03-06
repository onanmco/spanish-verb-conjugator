import React, { useState } from 'react';

export default ({ options, onDropdownChange }) => {
    const renderedOptions = options.map(({ label, value }, index) => {
        return <option key={index} value={value}>{label}</option>;
    });

    const onSelectChange = (e) => {
        onDropdownChange(e.target.value);
    };
    
    return (
        <div>
            <select onChange={onSelectChange}>{renderedOptions}</select>
        </div>
    );
};