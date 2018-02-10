import React, { Component } from 'react';
import './App.css';
import {selectRandomCards} from './Generate'
import {Card} from "./Card";
import {ButtonComp} from "./Button";
import {Grid} from 'semantic-ui-react'



class App extends Component {
    constructor() {
        super();

        this.state = {
            cards: selectRandomCards()
        }

    }

    onClickHandler = () =>  {
        this.setState({
            cards: selectRandomCards()
        })
    }

    render() {
        return (
                <div className="App">

                    <Grid columns={'four'} centered className={'noDistances'}>
                        <Grid.Row className={'noDistances'}>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[0].img}
                                               altName={this.state.cards[0].alt}/></Grid.Column>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[1].img}
                                               altName={this.state.cards[1].alt}/></Grid.Column>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[2].img}
                                               altName={this.state.cards[2].alt}/></Grid.Column>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[3].img}
                                               altName={this.state.cards[3].alt}/></Grid.Column>
                        </Grid.Row>

                        <Grid.Row className={'noDistances'}>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[4].img}
                                               altName={this.state.cards[4].alt}/></Grid.Column>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[5].img}
                                               altName={this.state.cards[5].alt}/></Grid.Column>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[6].img}
                                               altName={this.state.cards[6].alt}/></Grid.Column>
                            <Grid.Column className={'noDistances'}><Card cardName={this.state.cards[7].img}
                                               altName={this.state.cards[7].alt}/></Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <ButtonComp icon={'random'} onClick={this.onClickHandler.bind(this)}>Generate</ButtonComp>
                    <a href={`https://link.clashroyale.com/deck/en?deck=${this.state.cards[0].link};${this.state.cards[1].link};${this.state.cards[2].link};${this.state.cards[3].link};${this.state.cards[4].link};${this.state.cards[5].link};${this.state.cards[6].link};${this.state.cards[7].link}`}>
                        <ButtonComp icon={'upload'}>Push to Deck</ButtonComp></a>
                    <div>This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see Supercell’s Fan Content Policy: www.supercell.com/fan-content-policy</div>
                </div>
        );
    }
}

export default App;
