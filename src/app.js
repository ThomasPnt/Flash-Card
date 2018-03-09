import * as reducers from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {fetchData} from "./action";
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';

reducers.routing = routerReducer;

import App from './Components/App';
import VisibleCards from "./Components/VisibleCards";
import NewCardModal from './Components/NewCardModal';
import EditCard from "./Components/EditCard";


const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <Route path='/' component={App}>
                    <Route path='/deck/:deckId' component={VisibleCards}>
                        <Route path='/deck/:deckId/new' component={NewCardModal}/>
                        <Route path='/deck/:deckId/edit/:cardId' component={EditCard}/>
                    </Route>
                </Route>
            </Router>
        </Provider>), document.getElementById('root'));
}


function save(){
    var state = store.getState();
    fetch('/api/data', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            decks: state.decks,
            cards: state.cards
        })
    })
}

function init()
{
    run();
    store.subscribe(run);
    store.subscribe(save);
    store.dispatch(fetchData());
}

init();