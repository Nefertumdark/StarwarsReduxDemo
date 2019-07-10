import React from 'react';
import updateSearchCat from '../Actions/UpdateSearchCat.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function ButtonCategorie (props) {
    return(
    <div className={"Key col-sm-" + 3*props.widthKey} style={{backgroundColor: props.colorKey}} onClick={(e) => 
        {
            props.updateSearchCat(props.textDisplay);
            props.history.push("/search");
        }}>
        {props.textDisplay}
    </div>
    );
  }

const mapStateToProps = (state) => { return {}};
export default withRouter(connect(mapStateToProps, {updateSearchCat})(ButtonCategorie));	