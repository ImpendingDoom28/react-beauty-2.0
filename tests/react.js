import React, { useState } from 'react';

import * as namespace from 'lodash';

// import { function } from 'react-redux;

import css from './test.js';

const Component1 = (
	{
		prop1,
		prop2
	}) => {
	const newVar = {}

	const [state, setState] = useState(false);
	return (
		<div
			className={css.div}
			style={newVar}
			data-testing={"something"}
		>
			<Component2
				newVar={newVar}
			/>
		</div>
	)
}

const Component2 = (
	{
		prop3,
	}) => {
	return (
		<>
			<Component1
				className={"string"}
				prop1={passedProp}
			/>
			<Component1></Component1>
		</>
	)
}