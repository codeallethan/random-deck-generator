import React from 'react';
import Button from 'material-ui/Button'


export const GenerateBtn = (props) => {
        const {onClick} = props

        return(
        <Button onClick={onClick} type={'submit'} color={'primary'} raised>{props.children}</Button>
        )
}