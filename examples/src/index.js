import React from 'react';
import { render} from 'react-dom';
import AnalyticsSideBoxes from '../../src';

function getValues(values) {
    console.log(values);
}

const App = () => (
    <AnalyticsSideBoxes
    />
);
render(<App />, document.getElementById("root"));