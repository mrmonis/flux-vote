jest.unmock('../../src/js/constants/VoteConstants');

import VoteConstants from '../../src/js/constants/VoteConstants'

describe("VoteConstants", () => {

	it("should contain a list of valid votes", function() {
		expect(VoteConstants.validVotes).toBeDefined();
	});

	it("should contain a list of actions", function() {
		expect(VoteConstants.actions).toBeDefined();
	});
});