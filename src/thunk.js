/**
 * @function thunkMiddleware
 * @description middleware to wrap actions that return a function, calling that
 * function while passing in dispatch
 * @param  {[type]} dispatch    [description]
 * @param  {[type]} getState	[description]
 * 
 * @return {[type]}          	[description]
 */
function thunkMiddleware({ dispatch, getState }) {
	return next => action =>
		typeof action === "function" ?
		action(dispatch, getState) :
		next(action);
}

module.exports = thunkMiddleware
