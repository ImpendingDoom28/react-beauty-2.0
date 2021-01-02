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

// Props type

type SomeComponentProps = {
	prop1: string,
	prop2: number
}

class CoolClass {
	private number = 1;
	protected String = "const"
	public Dump = true

	constructor() {
		this.number = 2;
	}

	method() {

	}
}

type TypeUnion = SomeComponentProps & CustomInterface

const NaN1 = NaN;
const undefined1 = undefined;
const null1 = null;

// Component

const SomeComponent = (
	{
		prop1,
		prop2
	}: SomeComponentProps) => {

	let b = false;
	let a = true;
	let i = parseInt(prop1) + prop2;
	let notI = prop1 + prop2;
	const object = {
		x: i,
		base: b,
		truish: a ? a : null,
	}
	let objectsBase = object.base;

	const [state, setState] = useState(false);
	state.prop1

	return <React.Fragment key={a}>
		<div className="mama">
			<a>{"some stupid test"}</a>
		</div>
		{"extra words here"}
		{i}
		{notI}
	</React.Fragment>
}


export default SomeComponent;

export { default } 