import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

function MenuItemCustom( {render, ...props} ){
    if(render){
        return (
            <MenuItem onClick={props.onClick}>{props.label}</MenuItem>
        )
    } else {
        return false
    }
}

export default MenuItemCustom;