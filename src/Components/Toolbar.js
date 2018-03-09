import React from 'react';
import {showAddDeck, fitlerCards} from "../action";
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    showAddDeck : () => dispatch(showAddDeck()),
    onFilter: query => dispatch(fitlerCards(query)),
});

const Toolbar = ({ deckId, showAddDeck, onFilter}) => {
    let deckTools = deckId ? (
        <div className="optionbar">
            <Link className="btn" to={`/deck/${deckId}/new`}>+ New Card</Link>
            <Link className="btn" to={`/deck/${deckId}/study`}>Study Deck</Link>

            <input className="search" type="search" onChange={e => onFilter(e.target.value)} placeholder="Search"/>
        </div>
    ) : null;
    return (
        <div className="toolbar">
            <div>
                <button className="btn" onClick={showAddDeck}> + New Deck</button>
            </div>
            {deckTools}
        </div>)
}

export default connect(null, mapDispatchToProps)(Toolbar);