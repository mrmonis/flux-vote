/**
* Author: Ben Monis
*
* Actions for Votes
* 
* FLUX data-flow:
* Views/Stores -> ACTIONS -> Dispatcher
*
* Using Action Creator pattern with Flux Standard Action
*/

import VoteDispatcher from '../dispatchers/VoteDispatcher';
import VoteConstants from '../constants/VoteConstants';

var VoteActions = {
	/*
	* @param {string} voterID
	* @param {vote} vote 
 	*/
 	changeVote(id, vote) {
 		VoteDispatcher.dispatch({
	 		action: VoteConstants.actions.CHANGE_VOTE,
	 		payload: {
	 			id: id,
	 			vote: vote
	 		},
	 		error: false
	 	});
 	}
};

export default VoteActions;