import React from 'react';
import Visitor from './../Visitor/Visitor';

const VisitorList = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">Visitantes Anteriores</div>
            <div className="panel-body">
                <ul className="list-unstyled">
                    {props.visitors.map((visitor, idx) => {
                        return <Visitor key={idx} visitor={visitor} getGreeting={props.getGreeting} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default VisitorList;