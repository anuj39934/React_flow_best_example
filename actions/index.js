function decrement(){
	return {type : 'DECREMENT'}; 
}

function increment(){
	return {type : 'INCREMENT'}; 
}

var sumNumber = function sum(a, b){
	return {type : 'SUM', a:a, b:b}; 
}

//ASYN
var asyncIncrease = function (dispatch, state){
	_fakeServerApi.increaseCount(state.count.result,
		function(data){
			dispatch({type: 'INCREMENT'});
	});
};

var getRandomImages = function(dispatch, state){
	dispatch({type : "IMAGE_LOADING"});
	var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
	$.getJSON(imgurAPI).done(function(data){
		var action = {type : 'IMAGES', data : data.data};
		dispatch(action);
	});
}
