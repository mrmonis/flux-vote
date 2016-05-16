/**
* Author: Ben Monis
*
* FLUX data-flow:
* Dispatcher -> STORE -> Views
*/

import VoteDispatcher from '../dispatchers/VoteDispatcher'
import VoteConstants from '../constants/VoteConstants'
import {EventEmitter} from 'events'

var _votes = [
	{"vote":0, id:0},
	{"vote":1, id:1}
];

function changeVote(updatedVote) {
	var vote = _votes.filter(function(v){
		return v.id == updatedVote.id;
	});
	if(vote) {
		vote.vote = updatedVote.vote;
	}
}

//Create a vote store with callback methods
var VoteStore = Object.assign({}, EventEmitter.prototype, {
	getVotes: function() {
		return _votes;
	},

	emitChange: function() {
	    this.emit('change');
	},

	/**
	* @param {function} callback
	*/
	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	/**
	* @param {function} callback
	*/
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

// Register store events to dispatcher
VoteDispatcher.register(function(action) {
	switch(action.type) {
		// Vote has changed
		case VoteConstants.actions.CHANGE_VOTE:
			changeVote(action.payload);
			VoteStore.emit('change');
			break;
	}
});

export default VoteStore;