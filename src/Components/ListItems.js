import React from 'react';
import ButtonsItems from './ButtonsItems.js';
import { connect } from 'react-redux'
import changeDetail from '../Actions/ChangeDetail.js'

function ListItems (props) {
    var itemsToRender = props.foundItems.map((cat) => 
        <div className="row"> 
            <ButtonsItems textDisplay={cat.name || cat.title} widthKey={1} colorKey={"gray"} operation={() => props.changeDetail(JSON.stringify(cat))}/>
        </div>  
    );
    return (
    <div className="ListItems">
        {itemsToRender}
    </div>
    );
  }
  
 const mapStateToProps = (state) => { 
    //console.dir(state);
    return {foundItems: state.starWars.foundItems}};
 export default connect(mapStateToProps, {changeDetail})(ListItems);	