import ApiClient from '../Api/StarWarsApi.js'

export default function updateResults (searchKey, filter)
{				
    console.log("sk: " + searchKey + "fl: " + filter);	
	return async dispatch => {			
        const response = await ApiClient.get('/' + searchKey.toLowerCase());
        var results = response.data.results;
        if(filter !== "")
        {
            if(searchKey === "Films"){
                results = response.data.results.filter(item => item.title.includes(filter));
            }
            else{
                results = response.data.results.filter(item => item.name.includes(filter));
            }

        }

        dispatch({type: 'UPDATE_RESULTS', payload: {results: results, newFilter: filter}});
    };	
}

