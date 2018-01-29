import * as React from 'react';

export const Card = (props) => {
        const {cardName, altName} = props;

        return(
        <div><img alt={altName} src={cardName} /></div>
        )

}
