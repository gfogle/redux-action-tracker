/**
 * @function assign
 * @description assign __id__ to object based on provided id.
 * Example: 0 -> 0.1, 0.1 -> 0.2, 1 -> 1.1, etc.
 * @param  {[string]} id  [the base integer to use as the id]
 * @param  {[object]} obj [the object to attach __id__ to]
 */
function _assign(id = id.toString(), obj) {
	const split = id.split(".");
	obj.__id__ = split.length === 1 ?
		split[0] + ".1" : // 0 -> 0.1, 1 -> 1.1
		split[0] + "." + parseInt(split[1] + 1).toString(); // 0.1 -> 0.2, 1.3 -> 1.4
	return;
}
/**
 * @function idMiddleware
 * @description middleware to attach an __id__ property and call next middleware
 * @param  {[function]} dispatch    [magic]
 * @param  {[function]} getState	[function that returns current state]
 */
function idMiddleware({ dispatch, getState }) {
	let next = "0";

	return next => action => {
		action.__parent__ !== undefined ?
			_assign(action.__parent__, action) :
			_assign(next++, action);

		next(action);
	}
}

module.exports = idMiddleware;
