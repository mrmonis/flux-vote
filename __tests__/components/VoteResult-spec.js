jest.dontMock('../../src/js/components/VoteResult.react');
jest.dontMock('../../src/js/constants/VoteConstants');

import VoteResult from '../../src/js/components/VoteResult.react'
import VoteConstants from '../../src/js/constants/VoteConstants'
import React from 'react'

var voteResult;
var VOTE = [{id:0,vote:0},{id:1,vote:24}];

describe("VoteResult component", () => {


	it("should not contain any state", function() {
		voteResult = <VoteResult votes={[{id:0,vote:0}]}/>
		expect(voteResult.state).toBeUndefined();
	});
});