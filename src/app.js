import {addDeck , showAddDeck , hideAddDeck} from './action';
import * as reducers from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers} from 'redux';
import App from './Components/App';
import Sidebar from './Components/Sidebar';

const store = createStore(combineReducers(reducers));

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((<App>
        <Sidebar
            decks={state.decks}
            addingDeck={state.addingDeck}
            addDeck={name => store.dispatch(addDeck(name))}
            showAddDeck={() => store.dispatch(showAddDeck())}
            hideAddDeck={() => store.dispatch(hideAddDeck())}
        />
    </App>), document.getElementById('root'));
}

run();

store.subscribe(run);
