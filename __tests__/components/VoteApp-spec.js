jest.unmock('../../src/js/components/VoteApp.react');

import VoteApp from '../../src/js/components/VoteApp.react'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

var voteApp;

describe("VoteApp component", () => {

	beforeEach(function() {
		voteApp = <VoteApp/>
	})

	it("should have no voters to start", function() {
		 const voteAppNode = TestUtils.renderIntoDocument(
	     	voteApp
	    );

	    const appNode = ReactDOM.findDOMNode(voteAppNode);

		expect(appNode).toBeDefined();
	});
});