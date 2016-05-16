jest.unmock('../../src/js/actions/VoteActions');

import VoteActions from '../../src/js/actions/VoteActions'

describe("VoteActions component", () => {

	it("should contain an action to change votes", function() {
		expect(VoteActions.changeVote).toBeDefined();
	});
});