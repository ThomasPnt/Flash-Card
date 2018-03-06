import React from 'react';
import {Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';

class CardModal extends React.Component {
    componentDidUpdate(){
        ReactDOM.findDOMNode(this.refs.front).focus();
    }
    render() {
        let {card, onDelete} = this.props;
        return (
            <div className="card">
                <h1>{onDelete ? 'Edit' : 'New'} Card</h1>
                <label>Card Front :</label><br/>
                <textarea ref='front' defaultValue={card.front}></textarea><br/>
                <label>Card Back :</label><br/>
                <textarea ref='back' defaultValue={card.back}></textarea>
                <p>
                    <button onClick={this.onSave.bind(this)}>Save Card</button>
                    <Link to={`/deck/${card.deckId}`}> Cancel </Link>
                    { onDelete ? <button onClick={this.onDelete.bind(this)}>Delete Card</button> : null }
                </p>
            </div>
        )
    }
    onSave(evt){
        var front = ReactDOM.findDOMNode(this.refs.front);
        var back = ReactDOM.findDOMNode(this.refs.back);
        this.props.onSave(Object.assign({}, this.props.card, {
            front: front.value,
            back: back.value
        }));
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }

    onDelete(e){
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }
}

export default CardModal;