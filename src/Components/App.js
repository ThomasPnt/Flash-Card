import React from 'react';
import Sidebar from "./Sidebar";
import { connect } from 'react-redux';
import Toolbar from "./Toolbar";


const mapStateToProps = (props, { params: { deckId } }) => ({
    deckId
});

const App = ({ deckId, children }) => {
    return (
        <div className="app">
            <Toolbar deckId={deckId}/>
            <Sidebar/>
            {children}
        </div>
    );
};

export default connect(mapStateToProps)(App);