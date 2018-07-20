import React, { Component } from 'react';

// right her we can eliminate `export default Counter line` w/ (following line) 
// export default class Counter extends Component
class Counter extends Component {
	// state is an object that stores any data this component needs
	state = {
		count: 0,
	};

	render() {
		return (
			<React.Fragment>
				<span>{this.formatCount()}</span>
				<button>Increment</button>
			</React.Fragment>
		);
	}
	formatCount() {
		const count = this.state.count;
		const x = <h1>ZERO</h1>;
		return count === 0 ? x : count;
	}
}


export default Counter;