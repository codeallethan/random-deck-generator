import * as React from 'react'
import {Header, Image} from "semantic-ui-react";
import dice from './static/logo/diceWhite.svg'


export const HeaderComp = (props) => {
    return (
        <div className={'header-class'}>
            <Header inverted size={'large'} floated={'left'}>
                <Image src={dice}/>
                Random Deck Generator
            </Header>
        </div>
    )
}
