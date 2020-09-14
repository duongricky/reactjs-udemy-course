import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }
}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    return (
        <div>Season Display: </div>
    );
}

export default SeasonDisplay;