import Button from '@material-ui/core/Button';
import React from 'react';

function ButtonCustom( {render, ...props} ){
    if(render){
        return (
            <Button onClick={props.onClick} aria-controls={props.ariaControls} aria-haspopup={props.ariaHaspopup} variant={props.variant}>{props.label}</Button>
        )
    } else {
        return false
    }
}

export default ButtonCustom;