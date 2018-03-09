import React from 'react';
import Visitor from './../Visitor/Visitor';

const VisitorList = (props) => {
    return (
        <div>
            <h3>Visitantes Anteriores</h3>
            <ul className="list-unstyled">
                {props.visitors.map((visitor, idx) => {
                    return <Visitor key={idx} visitor={visitor} getGreeting={props.get} />
                })}
            </ul>
        </div>
    )
}

export default VisitorList;