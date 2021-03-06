import React from 'react';

export default ({ data, _className, errorMsg }) => {
    const renderedResults = data.map((chunk, index) => {
        return (
            <tr key={index}>
                <td className="subject">{chunk['subject']}</td>
                <td className="conjugation">{chunk['conjugation']}</td>
            </tr>
        );
    });

    return (
        renderedResults['length'] > 0 ? <div>
            <table id="table" border="true" className={_className}>
                <tbody>
                    {renderedResults}
                </tbody>
            </table>
        </div> : <div id="table-error-msg" >{errorMsg}</div>
    );
};