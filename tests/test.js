const CONSTANT;

var global = {};

let nan = NaN;
let nullish = null;
let undefinedish = undefined;

let number = 1;
let doubleQuoteString = "YELLOW";
let firstQuoteString = "YELLOW";
let array = [1, '1', null, undefined, NaN];
let obj = {};

let regExp = /ab+c/;

const { destructiringObject } = {
	destructiringObject: "1"
};
const [destructiringArray] = ['1'];

const CONST_OBJECT = { CONST_OBJ_KEY: "CONST_OBJ_VALUE" };

function basicFunction(param1, param2) {
	console.log(param1, param2);
	return param2;
}

const arrowFunction = (param1, param2) => {
	console.log(param1, param2);
	return param1;
}

// Line comment

/**
 * Multiline comment
 */

obj.objKeyReference;
obj.objFirstKeyReference.objSecondKeyReference;
obj.objFnReference();