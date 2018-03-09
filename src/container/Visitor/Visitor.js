import React from 'react';

const Visitor = (props) => {
    const flag = (props.visitor.countryCode) ? 
        <img 
            src="/flags/blank.gif" 
            alt={props.visitor.countryName} 
            className={'flag flag-' + props.visitor.countryCode.toString().toLowerCase()} /> :
        '';

    let visitorText = '';
    visitorText += props.visitor.name ? props.visitor.name + ' - ' : '';
    visitorText += props.visitor.countryName ? props.visitor.countryName + ' - ' : '';
    visitorText += props.visitor.birthDate ? props.visitor.birthDate : '';

    return (
        <li onClick={(visitor) => props.getGreeting(props.visitor)}>
            {flag} {visitorText} 
        </li>
    ) 
}

export default Visitor;