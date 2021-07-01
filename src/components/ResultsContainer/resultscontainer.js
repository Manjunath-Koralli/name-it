import React from 'react';
import NameCard from '../NameContainer/namecontainer';
import './resultscontainer.css';

const ResultContainer = ({ suggestedNames }) => {
    const suggestedNamesArr = suggestedNames.map((suggestedName,index) => {
        return <NameCard key={`${suggestedName}${index}`} suggestedName={suggestedName} />
    })
    return (
        <div className="results-container">
            {suggestedNamesArr}
        </div>
    )
}

export default ResultContainer