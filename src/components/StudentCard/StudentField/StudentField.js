import React from 'react';
import './StudentField.css';

function StudentField(props) {
    return (
        <div className="field">
            {props.field}
        </div>
    )
}

export default StudentField;
