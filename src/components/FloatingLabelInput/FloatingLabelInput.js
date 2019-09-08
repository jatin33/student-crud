import React from 'react'
import './FloatingLabelInput.css';

function FloatingLabelInput(props) {
    return (
        <div className="inputGroup">
            <input type="text" class="formControl" required />
            <label class="formControlPlaceholder" for={props.field}>{props.field}</label>
        </div>
    )
}

export default FloatingLabelInput;
