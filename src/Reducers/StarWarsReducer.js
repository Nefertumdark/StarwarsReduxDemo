const initialstate = { categories: [{ Name: "Planets"}, { Name: "Starships"}, { Name: "Vehicles"}, { Name: "People"}, { Name: "Films"}, { Name: "Species"}],
	searchKey: "Planets",
	detail : "",
	filter : "",
	foundItems: []
};

const starWarsReducer = function(state = initialstate, action){
	switch(action.type){
		case 'CHANGE_DETAIL':
		return Object.assign({}, state, {
			detail: action.detail
			});
		case 'UPDATE_RESULTS':				
		return Object.assign({}, state, {
			foundItems: action.payload.results,
			filter: action.payload.newFilter,
			detail: ""
			});
		case 'UPDATE_SEARCH_CAT':				
		  console.log("asign: " + action.newSearchKey);
		  return Object.assign({}, state, {
			searchKey: action.newSearchKey,
			filter: "",
			detail: "",
			foundItems: []
			});
		default:								
			return state;
    }
};

export default  starWarsReducer;