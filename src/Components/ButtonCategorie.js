import React from 'react';
import updateSearchCat from '../Actions/UpdateSearchCat.js'
import { connect } from 'react-redux'

function ButtonCategorie (props) {
    return (
    <div className={"Key col-sm-" + 3*props.widthKey} style={{backgroundColor: props.colorKey}} onClick={(e) => props.updateSearchCat(props.textDisplay)}>
        {props.textDisplay}
    </div>
    );
  }

const mapStateToProps = (state) => { return {}};
export default connect(mapStateToProps, {updateSearchCat})(ButtonCategorie);	