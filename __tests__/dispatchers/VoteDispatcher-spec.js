jest.dontMock('../../src/js/dispatchers/VoteDispatcher');

import VoteDispatcher from '../../src/js/dispatchers/VoteDispatcher'

describe('VoteDispatcher', () => {


	it("should exist", function() {
		expect(VoteDispatcher).toBeDefined();
	});
});