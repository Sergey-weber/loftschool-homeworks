import React from 'react';

const Input = props => {
    return (
        <p className="field">
            <label className="field__label" htmlFor={props.name}>
                <span className="field-label">{props.title}</span>
            </label>
            <input
                name={props.name}
                className={props.classInput}
                type="text"
                value={props.value}
                onChange={props.onChange}
                type={props.type}
            />
            <span className={props.classError}>{props.errorName}</span>
        </p>
    )
}

export default Input