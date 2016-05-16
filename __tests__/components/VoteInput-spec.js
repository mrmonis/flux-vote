jest.unmock('../../src/js/components/VoteInput.react');
jest.unmock('../../src/js/actions/VoteActions');


import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import VoteInput from '../../src/js/components/VoteInput.react';
// import VoteConstants from '../../src/js/constants/VoteConstants';

describe("VoteInput component", () => {

	it("should render without inputs", function() {
		let vi = <VoteInput/>

		const voteInput = TestUtils.renderIntoDocument(
			vi
		);
		
		const voteInputNode = ReactDOM.findDOMNode(voteInput);

		// Check starting value is nothing
		expect(voteInputNode).toBeDefined();

	});

	it("should update on change", function() {

		let vi = <VoteInput/>

		const voteInput = TestUtils.renderIntoDocument(
			vi
		);

		const select = TestUtils.findRenderedDOMComponentWithTag(voteInput, 'select');

		expect(select.value).toBeDefined();

		// // Simulate that the vote has been incremented
		TestUtils.Simulate.change(
			select,
			{target:{value:2}}
		);

		expect(select.value).toBeDefined();
	});
});