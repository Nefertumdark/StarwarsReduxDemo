import React from 'react';
import ButtonCategorie from './ButtonCategorie.js';
import { connect } from 'react-redux'

function ListCategories (props) {
    var itemsToRender = props.categories.map((cat) => <ButtonCategorie textDisplay={cat.Name} widthKey={1} colorKey={"gray"}/>);
    return (
    <div className="ListCategories">
        <div className="container">           
            <div className="row"> 
                {itemsToRender}
            </div>           
        </div>
    </div>
    );
  }
  
const mapStateToProps = (state) => { 
    return {categories: state.starWars.categories}
};
export default connect(mapStateToProps)(ListCategories);			
