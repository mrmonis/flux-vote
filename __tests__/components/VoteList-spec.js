jest.unmock("../../src/js/components/VoteList.react");
jest.unmock("../../src/js/constants/VoteConstants");
jest.unmock("../../src/js/components/VoteInput.react");

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import VoteList from '../../src/js/components/VoteList.react'
import VoteInput from '../../src/js/components/VoteInput.react'
import VoteConstants from '../../src/js/constants/VoteConstants'

describe("VoteList status", function() {
	it("should render without any options", function() {
		let v = <VoteList/>;

		const voteInput = TestUtils.renderIntoDocument(
			v
		);
		// Should only return one div
		const div = TestUtils.findRenderedDOMComponentWithTag(voteInput, 'div');

		expect(div).toBeDefined();
	});

	it("should generate an item for each vote", function() {
		let votes = [{
			id:0,
			vote:2
		},{
			id:1,
			vote:3
		}];
		let v = <VoteList votes={votes}/>;

		const voteList = TestUtils.renderIntoDocument(
			v
		);

		// Should only return one div
		const div = TestUtils.findRenderedDOMComponentWithClass(voteList, 'voteList');
		
		expect(div.children.length).toEqual(votes.length);
	});
});