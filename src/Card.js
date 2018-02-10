import * as React from 'react';
import {Image} from "semantic-ui-react";

export const Card = (props) => {
        const {cardName, altName} = props;

        return(
        <div><Image alt={altName} src={cardName} /></div>
        )

}
