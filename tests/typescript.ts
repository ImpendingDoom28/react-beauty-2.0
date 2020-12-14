import React from 'react';

type CustomType = {
	x: number,
	y: string
}

type CustomTypeOnType = {
	usingCustomType: CustomType,
	checkStatus: boolean
}

interface CustomInterface {
	a: number,
	b: string
}

interface CustomInterfaceInheritance extends CustomInterface {
	coolStuff: CustomType,
	notCoolStuff: any
}

// props

type SomeComponentProps = {
	prop1: string,
	prop2: number
}

const SomeComponent = (
	{
		prop1,
		prop2
	}: SomeComponentProps) => {

	let b = false;
	let a = true;
	let i = parseInt(prop1) + prop2;
	let notI = prop1 + prop2;

	return <React.Fragment>
		{ "extra words here"}
	{ i }
	{ notI }
	</React.Fragment>
}


export default SomeComponent;

export { default } 