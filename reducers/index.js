function counter(currentState, action){
	var DEFAULT_STATE = 0;
	if(currentState === undefined){
		nextState = DEFAULT_STATE;
		return nextState;
	}
	switch (action.type){
	case "INCREMENT":
		nextState = currentState  +1 ;
		return nextState;
	case "DECREMENT":
		nextState = currentState-1;
		return nextState;
	default : 
		nextState = currentState;
		return nextState
	}	
};

function sum (currentState, action){
	var DEFAULT_STATE = 3;
	if(currentState === undefined){
		nextState = DEFAULT_STATE;
		return nextState;
	}
	switch (action.type){
		case "SUM" :
			nextState= parseInt(action.a) + parseInt(action.b);
			//errorCausing();
			return nextState;
		default :
			nextState= currentState;
			return nextState;
	}
}
function combineReducers(currentState, action){
	var DEFAULT_STATE = {count : 0,sum :3, img:{}};
	var nextState = Object.assign({},currentState);
	nextState = {
		count : counter(nextState.count, action),
		sum: sum(nextState.sum, action),
		images : images(nextState.images,action)
	};
	return nextState;
};

function errorCausing(){
	throw Error("Exception in sum function");
}