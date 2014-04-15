//first(array, [n])
//returns the first element of an array. passing n will return the first n elements of the array.
function first(array, n) {
	//proceeds only if the first argument is an array
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array[0]; }

	//slice returns the array if n < 0
	if (n < 0) { return [] };

	return array.slice(0, n);
}

//initial(array, [n])
//returns everything but the last entry of the array. pass n to exclude the last n elements from the result.
function initial(array, n) {
	//proceeds only if the first argument is an array
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array.slice(0, -1); }

	if (n < 0) { return []};

	return array.slice(0, -n);
}

//last(array, [n])
//returns the last element of an array. passing n will return the last n elements of the array.
function last(array, n) {
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array[array.length - 1]; }

	//slice returns the array if n < 0
	if (n < 0) { return [] };

	return array.slice(array.length - n);
}

//rest(array, [index])
//returns the rest of the elements in an array. pass an index to return the values of the array from that index onward.
function rest(array, n) {
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array.slice(1); }

	//slice returns the array if n < 0
	if (n < 0) { return [] };

	return array.slice(n);
}

//compact(array)
//Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
function compact(array) {
	if (!Array.isArray(array)) {
		return;
	}

	var copy = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i]) {
			copy.push(array[i]);
		}
	}

	return copy;
}

//OR (using Array.prototype.filter)
function compact(array) {
	if (!Array.isArray(array)) {
		return;
	}

	var copy = array.filter(function(element) {
		if (element) {
			return element;
		}
	})

	return copy;
}

//flatten(array, [shallow])
//Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.
function flatten(array, shallow) {


	var _flatten = function(array, shallow, copy) {
		if (!Array.isArray(array)) {
			return;
		}


		array.forEach(function(element) {
			if (!Array.isArray(element)) {
				copy.push(element);
			} else {
				shallow ? Array.prototype.push.apply(copy, element) : _flatten(element, shallow, copy);
			}
		})

		return copy;
	}

	return _flatten(array, shallow, []);
}

//without(array, *values)
//returns a copy of the array with all instances of the values removed.
function without(array, values) {
	var input = array;
	var	output = [];
	//arguments is an array-like object, which means it doesn't have any Array methods
	var toRemove = Array.prototype.slice.call(arguments, 1);

	if (!Array.isArray(input)) {
		return;
	}

	var _comparator = function(element) {
		for(var i = 0; i < toRemove.length; i++) {
			if(element === toRemove[i]) {
				return true;
			}
		}

		return false;
	}

	input.forEach(function(element) {
		if(!_comparator(element)) {
			output.push(element);
		}
	})

	return output;
}

//partition(array, predicate) 
//Split array into two arrays: 
//one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
function partition(array, predicate) {
	var input = array;
	var pass = [];
	var fail = [];

	if (!Array.isArray(input)) {
		return;
	}

	input.forEach(function(element) {
		(predicate(element) ? pass : fail).push(element);
	})

	return [pass, fail];

}




