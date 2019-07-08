import React from 'react';

function ButtonsItems (props) {
    return (
    <div className={"Key col-sm-" + 3*props.widthKey} style={{backgroundColor: props.colorKey}} onClick={(e) => props.operation()}>
        {props.textDisplay}
    </div>
    );
  }
  
 export default ButtonsItems;