import React, { Component } from 'react';
import './style.css';

class AnalyticsSideBoxes extends Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        const { 
            number,
            description,
            cardColor,
            numberFontFamily,
            numberFontSize,
            descriptionFontFamily,
            descriptionFontSize
        } = this.props;
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 shadow-box col-reset">
                <div style={{color: cardColor, fontFamily: numberFontFamily, fontSize: numberFontSize}}>{number}</div>
                <div style={{color: cardColor, fontFamily: descriptionFontFamily, fontSize: descriptionFontSize}}>{description}</div>
            </div>
        );
    }
};

export default AnalyticsSideBoxes;


