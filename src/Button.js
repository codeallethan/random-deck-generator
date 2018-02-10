import React from 'react';
import {Button} from "semantic-ui-react";


export const ButtonComp = (props) => {
        const {onClick, icon} = props

        return(
        <Button onClick={onClick} content={props.children} icon={icon} labelPosition={'left'}/>
        )
}

