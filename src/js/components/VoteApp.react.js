/**
* Author: Ben Monis
*
* Kickoff point for app
*
* FLUX data-flow:
* Store -> VIEWS -> Actions
*
* Using Action Creator pattern with Flux Standard Action
*/

import React from 'react';
import VoteList from './VoteList.react'
import VoteResult from './VoteResult.react'
import VoteStore from '../stores/VoteStore'

// Seed the store with data
// REPLACE WITH API CALL
function getVotes() {
	return VoteStore.getVotes();
}

class TodoApp extends React.Component{

	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		
		this.state = { votes: getVotes()};
	}

	componentDidMount() {
		VoteStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		VoteStore.removeChangeListener(this._onChange);
	}

	render() {
		return (
			<div class="vote">
				<VoteList votes={this.state.votes}/>
				<VoteResult votes={this.state.votes}/>
			</div>
		)
	}

	_onChange() {
		this.setState(getVotes());
	}
}
export default TodoApp;