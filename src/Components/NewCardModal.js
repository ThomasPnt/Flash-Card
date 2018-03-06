import React from 'react';
import CardModal from './CardModal';
import {connect} from 'react-redux';
import {addCard} from '../action';

const mapStateToProps = (props, { params :{deckId} }) => ({
    card: { deckId }
});

const mapDispatchToProps = dispatch => ({
    onSave : card => dispatch(addCard(card)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CardModal);