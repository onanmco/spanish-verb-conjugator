import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Form from "./Form";
import Table from './Table';

const SpanishVerbs = require('spanish-verbs');

const caseConverter = (str) => {
    let substrings = str.split("_");
    substrings = substrings.map((substring) => {
        substring = substring.toLowerCase();
        return substring.charAt(0).toUpperCase() + substring.slice(1);
    });
    return substrings.join(" ");
};

const options = SpanishVerbs.validTenses.map((i) => {
    return { label: caseConverter(i), value: i };
});

const subjects = ['yo', 'tu', 'el/ella', 'nos.', 'vos.', 'ellos'];

export default () => {
    const [verb, setVerb] = useState('ser');
    const [tense, setTense] = useState(options[0]);
    const [results, setResults] = useState([]);

    const changeVerb = (value) => {
        setVerb(value.trim());
    };

    const changeTense = (value) => {
        setTense(value);
    };

    useEffect(() => {
        let results = [];
        for (let i = 0; i < 6; i++) {
            try {
                results[i] = {
                    subject: subjects[i], 
                    conjugation: SpanishVerbs.getConjugation(verb, tense.value, i)
                };
            } catch (error) {
                results = [];
                break;
            }
        }
        let occurrence = 0;
        results.forEach(element => {
            if (element['conjugation'] === results[0]['conjugation']) {
                occurrence++;
            }
        });
        if (occurrence == results.length) {
            results = [];
        }
        setResults(results);
    }, [verb, tense]);

    return (
        <div id="conjugator">
            <Dropdown label="Tense Seç:" options={options} onSelectedChange={changeTense} selected={tense} />
            <Form defaultTerm={verb} onFormChange={changeVerb}/>
            <Table _className="ui celled unstackable table" data={results} errorMsg={verb.length === 0 ? 'Lütfen bir fiil yazın.' : 'Sonuç bulunamadı.'}/>
            <br/>
            <span>Preview Deployment - onanmco@gmail.com - M.Cem ONAN</span>
        </div>
    );
};