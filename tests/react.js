import React from 'react';

import * as namespace from 'lodash';

import { function } from 'react-redux';

import css from './test.js';

const Component1 = (
	{
		prop1,
		prop2
	}) => {
	const newVar = {}

	return (
		<div
			className={css.div}
			style={newVar}
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
		<Component1
			className={"string"}
			prop1={passedProp}
		/>
	)
}