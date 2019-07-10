import React from 'react';
import { connect } from 'react-redux'
import updateResults from '../Actions/UpdateResults.js'
import ListItems from './ListItems.js';

function SearchSection (props) {
    return (
    <div>
        <div className="SearchSection">
            <input type="text" value={props.filter} onChange={(e) => props.updateResults(props.searchKey, e.target.value)}/>
        </div>
        <div className="col-sm-4"><ListItems/></div>
    </div> 
    );
  }

const mapStateToProps = (state) => { 
    console.dir(state);
    return {searchKey: state.starWars.searchKey, filter: state.starWars.filter}};
export default connect(mapStateToProps, {updateResults})(SearchSection);	