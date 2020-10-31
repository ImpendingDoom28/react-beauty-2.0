const CONSTANT;

var global = {};

let nan = NaN;
let nullish = null;
let undefinedish = undefined;

let number = 1;
let doubleQuotedString = "YELLOW";
let singleQuotedString = 'YELLOW';
let array = [1, '1', null, undefined, NaN];
let obj = {};

let negativeBool = false;
let positiveBool = true;

let regExp = /ab+c/;

const {
	destructiringObject,
	fn
} = {
	destructiringObject: 1,
	string: "1",
	nullish: null,
	obj: obj,
	fn: () => console.log(this.string)
};

console.log(destructiringObject);

const [destructiringArray] = [...array];

const CONST_OBJECT = {
	CONST_OBJ_KEY: "CONST_OBJ_VALUE"
};

function basicFunction(param1, param2) {
	let a = "b";
	let b = "a";

	console.log(a);
	console.log(b);

	console.log(number);

	console.log(param1, param2);
	return param2;
}

const arrowFunction = (param1, param2) => {
	let a = "b";

	console.log(a.obj);

	console.log(param1, param2);
	return param1;
}

// Line comment

/**
 * Multiline comment
 */

obj.objKeyReference;
obj.objFirstKeyReference.objSecondKeyReference;
obj.objFirstKeyReference.objSecondKeyReference.objThirdReference;
obj.objFnReference();