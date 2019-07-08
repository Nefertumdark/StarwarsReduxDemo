import React from 'react';
import { connect } from 'react-redux'

function DetailItem (props) {
    return (
    <div>
        {props.detail}
    </div>
    );
  }
  
 const mapStateToProps = (state) => { return {detail: state.starWars.detail}};
 export default connect(mapStateToProps)(DetailItem);	