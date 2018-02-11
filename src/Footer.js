import * as React from 'react';
import {Header} from "semantic-ui-react";

export const Footer = (props) => {

    return (
        <div className={'footer'}>
            <Header inverted>Fan Content Policy</Header>
            <span>
            This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and
                Supercell is not responsible for it. For more information see</span>
            <p><a href={'http://www.supercell.com/fan-content-policy'} target={'_blank'}>Supercell’s Fan Content
                Policy</a></p>
        </div>
    )
}