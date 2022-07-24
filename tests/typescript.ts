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

// Props type

type SomeComponentProps = {
	prop1: string,
	prop2: number
}

const nan = NaN;
const nullish = null;
const notDefined = undefined;