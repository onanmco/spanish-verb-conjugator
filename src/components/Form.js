import React, { useEffect, useState } from 'react';

export default ({ defaultTerm, onFormChange }) => {
    const [term, setTerm] = useState(defaultTerm);
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(timerID);
        };
    }, [term]);

    useEffect(() => {
        onFormChange(debouncedTerm);
    }, [debouncedTerm]);
    
    return (
        <div id="form" className="ui icon input">
            <input type="text" value={term} onChange={onInputChange} placeholder="Ara..." />
            <i className="search icon" />
        </div>
    );
};