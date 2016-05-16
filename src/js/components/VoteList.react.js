import React from 'react'
import voteConstants from '../constants/VoteConstants'
import VoteInput from './VoteInput.react'

class VoteList extends React.Component {
	render() {
		const votes = [];
		this.props.votes.forEach(function(vote) {
			votes.push(<VoteInput validVotes={voteConstants.validVotes} key={vote.id} id={vote.id} vote={vote.vote}/>);
		});
		return (
			<div className="voteList">
				{votes}
			</div>
		);
	}

}

export default VoteList;