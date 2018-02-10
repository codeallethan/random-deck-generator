import React, { Component } from 'react';
import './App.css';
import {selectRandomCards} from './Generate'
import {Card} from "./Card";
import {Grid, Row, Col } from 'react-flexbox-grid'
import {ButtonComp} from "./Button";


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
                    <Grid fluid>
                        <Row>
                                {this.state.cards.map((i, key) => <Col key={key} xs={3} lg={3} sm={3} md={3}><Card cardName={i.img} altName={i.alt} key={key}/></Col>)}
                        </Row>
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
