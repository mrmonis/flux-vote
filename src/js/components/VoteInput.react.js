/**
* Author: Ben Monis
*
* Component for vote inputs
* 
* State: vote
*
* FLUX data-flow:
* Store -> VIEWS -> actions
*
* Using Action Creator pattern with Flux Standard Action
*/

import React from 'react';
import VoteActions from '../actions/VoteActions';

class VoteInput extends React.Component {

	constructor(props) {
		super(props);
		this._onChangeVote = this._onChangeVote.bind(this);

		//Start at the beginning
		this.state = {
			vote:0
		}
	}

	// Change the vote
	_onChangeVote(event) {
		this.setState({vote: event.target.value});
		VoteActions.changeVote(this.props.id, this.state.vote);
	}

	render() {
		var vote = this.state.vote;
		var options = [];
		if(this.props.validVotes) {
			this.props.validVotes.forEach(function(option){
				options.push(<option value={option} key={option}>{option}</option>);
			});
		}
		return (
			<div className="vote-list">
				<select className="vote-input" value={vote} onChange={this._onChangeVote}>{options}</select>
			</div>
		)
	}
}

VoteInput.defaultProps = { validVotes:[] };
export default VoteInput;