import React from 'react';

import * as namespace from 'lodash';

import css from './test.js';

const Component1 = ({
	prop1,
	prop2
}) => {
	const newVar = {}

	const port = 3000;
	const templateString = `http://localhost:${port}`;

	return (
		<div
			className={css.div}
			style={newVar}
		>
			<Component2
				newVar={newVar}
			/>
			<div>{prop1}</div>
			<div>{prop2}</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

const Component2 = (
	{
		prop3,
	}) => {
	return (
		<Component1
			prop1={passedProp}
		/>
	)
}