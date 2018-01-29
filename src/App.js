import React, { Component } from 'react';
import './App.css';
import {selectRandomCards} from './Generate'
import {Card} from "./Card";
import {Grid, Row, Col } from 'react-flexbox-grid'
import {GenerateBtn} from "./Button";


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
                    <GenerateBtn onClick={this.onClickHandler.bind(this)}>Generate</GenerateBtn>
                    <a href={`https://link.clashroyale.com/deck/en?deck=${this.state.cards[0].link};${this.state.cards[1].link};${this.state.cards[2].link};${this.state.cards[3].link};${this.state.cards[4].link};${this.state.cards[5].link};${this.state.cards[6].link};${this.state.cards[7].link}`}>
                        <GenerateBtn>Push to Deck</GenerateBtn></a>
                </div>
        );
    }
}

export default App;
