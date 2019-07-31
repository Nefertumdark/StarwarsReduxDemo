import React from 'react';
import ButtonCategorie from './ButtonCategorie.js';
import { connect } from 'react-redux'
import CategoriesContext from '../Contexts/CategoriesContext'; 

class ListCategories extends React.Component {
    static contextType = CategoriesContext;

    render(){
        var itemsToRender = this.context.map((cat) => <ButtonCategorie textDisplay={cat.Name} widthKey={1} colorKey={"gray"}/>);
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
  }
  
export default ListCategories;			
