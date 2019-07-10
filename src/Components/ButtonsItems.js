import React from 'react';
import { withRouter } from 'react-router-dom'

function ButtonsItems (props) {
    return (
    <div className={"Key col-sm-" + 3*props.widthKey} style={{backgroundColor: props.colorKey}} onClick={(e) => 
    {
        props.operation();
        props.history.push("/detail");
    }}>
        {props.textDisplay}
    </div>
    );
  }
  
 export default withRouter(ButtonsItems);