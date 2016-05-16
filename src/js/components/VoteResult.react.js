/**
* Author: Ben Monis
*
* Component for vote inputs
* 
* State: vote
*
* FLUX data-flow:
* Store -> VIEWS -> Actions
*
* Using Action Creator pattern with Flux Standard Action
*/

import React from 'react'

class VoteInput extends React.Component {

	constructor(props) {
		super(props);
	}

	// Render a result message
	render() {
		var result = <p>No Votes</p>;
		var votes = this.props.votes;

		if(votes.length) {
			var same = true;
			var prevVote = 0;
			votes.forEach(function(vote) {
				if(!votes.indexOf(vote)) {
					same = (prevVote == vote.vote);
				}
				prevVote = vote.vote;
			});

			if(!same) {
				// Different votes
				result = (
					<p>All votes are the same</p>
				)
			} else {
				// Same votes
				result = (
					<p>Some people voted differently</p>
				)
			}
		}

		return (
			<div className="voteResults">
				{result}
			</div>
		)
	}
}
export default VoteInput;