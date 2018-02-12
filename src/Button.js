import React from 'react';
import {Button} from "semantic-ui-react";


export const ButtonComp = (props) => {
        const {onClick, icon, labelPosition = 'left'} = props

        return(
        <Button style={{marginTop: '1rem', marginBottom: '1rem'}} size={'large'} color={'orange'} onClick={onClick} content={props.children} icon={icon} labelPosition={labelPosition}/>
        )
}

