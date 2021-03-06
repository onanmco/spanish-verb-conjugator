import React, { useState } from 'react';

export default ({ defaultTerm, onFormChange }) => {
    const [term, setTerm] = useState(defaultTerm);

    const onInputChange = (e) => {
        setTerm(e.target.value);
        onFormChange(e.target.value);
    };
    
    return <input value={term} onChange={onInputChange} />;
};