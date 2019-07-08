import React from 'react';
import { connect } from 'react-redux'
import updateResults from '../Actions/UpdateResults.js'

function SearchSection (props) {
    return (
    <div className="SearchSection">
        <input type="text" value={props.filter} onChange={(e) => props.updateResults(props.searchKey, e.target.value)}/>
    </div>
    );
  }

const mapStateToProps = (state) => { 
    console.dir(state);
    return {searchKey: state.starWars.searchKey, filter: state.starWars.filter}};
export default connect(mapStateToProps, {updateResults})(SearchSection);	