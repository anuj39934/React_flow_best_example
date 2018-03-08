//middleware
const logger = function(store){
	return function (next){
		return function(action){
			console.group("logger");
			console.log("state value before== ", store.getState());
			console.info("action === ", action);
			next(action);
			console.log("state value after== ", store.getState());
			console.groupEnd("logger")
		}
	}
};
 
const crashReporter = function () {
	return function(next){
		return function(action){
			try{
				next(action);
			}catch(err){
				console.group("crashReporter error group");
				console.error("error occurs due to : ", action);
				console.error(err);
				console.groupEnd("finish");				
			}
			
		}
	}
}

//third middleware 
const thunk = function(){
	return function (next){
		return function(action){
			if(typeof action === 'function'){
				action(store.dispatch, store.getState());
			}else{
				next(action);
			}
		}
	}
};
var out = document.getElementById('out');
var dec = document.getElementById('dec');
var inc = document.getElementById('inc');
var sr = document.getElementById('sr');
var result =document.getElementById('result');
var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk));

//Random Image code
var randomImg = document.getElementById('randomImagesButton');


function render(){
	var state = store.getState();
	out.innerHTML = store.getState().count;
	result.innerHTML = store.getState().sum;
	
	if(state.count.loading){
		document.getElementById('status').innerHTML = "is loading ....";
	}else {
		document.getElementById('status').innerHTML = "loaded";
	}
	document.getElementById('ImageStatus').innerHTML = state.image.loading;
	if(state.image.loading == "loading..."){
		document.getElementById('imageList').innerHTML = "";
	}else if(state.image.loading == "loaded"){
		for(var i=0;i < state.image.data.length;i++){
			document.getElementById(imageList).innerHTML +=("<img src=''" +state.image.data[i].link +"style='height:200px'>");
		}
	}
};
store.subscribe(render);
dec.addEventListener('click',function(){
	store.dispatch(decrement());
});
inc.addEventListener('click',function(){
	store.dispatch(asyncIncrease);
	//store.dispatch(increment());
});
sr.addEventListener('click',function(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value)
	store.dispatch(sumNumber(a,b));
});
randomImg.addEventListener('click', function(){
	store.dispatch(getRandomImages);
});
render();