import React from 'react';
export const Icon = (props) => {
    return (
        <svg id='icon' viewBox="0 0 100 100" fill={props.color} xmlns="http://www.w3.org/2000/svg" style={{maxHeight: props.maxHeight || '100%', maxWidth: props.maxWidth || '100%'}}>
            <use href={require(`../src/Resources/regular/${props.type}.svg`) + '#' + props.type}></use>
        </svg>
    )
}

