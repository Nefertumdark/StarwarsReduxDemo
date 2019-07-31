import React from 'react';
import { connect } from 'react-redux'
import updateResults from '../Actions/UpdateResults.js'
import ListItems from './ListItems.js';
import { Field, reduxForm } from 'redux-form';

class SearchSection extends React.Component {
    renderInput(formProps){
        return <input {...formProps.input} />;
    }

    onSubmit = (formProps) => {
        this.props.updateResults(this.props.searchKey, formProps.searchFilter);
    }
    
    render(){
        return (
            <div>
                <div className="SearchSection">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="searchFilter" component={this.renderInput} />
                    </form>
                </div>
                <div className="col-sm-4"><ListItems/></div>
            </div> 
        );
    }
}

const mapStateToProps = (state) => { 
    console.dir(state);
    return {searchKey: state.starWars.searchKey, filter: state.starWars.filter}};
export default reduxForm({
    form: 'streamCreate'
})(connect(mapStateToProps, {updateResults})(SearchSection));