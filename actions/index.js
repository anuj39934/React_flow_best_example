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
	_fakeServerApi.increaseCount(state.count,
		function(data){
			dispatch({type: 'INCREMENT'});
	});
};

var getRandomImages = function(dispatch, store){
	store.dispatch(type : "IMAGE_LOADING");
	//var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
	var imgurAPI = "http://localhost:3000/data";
	$.getJSON(imgurAPI).done(function(data){
		var action = {type : 'IMAGES', data : data};
		//console.log("API data : ", data);
		dispatch(action);
	});
}
