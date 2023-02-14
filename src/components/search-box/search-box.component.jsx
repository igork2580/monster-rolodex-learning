import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{

    render(){
        return(
        <input 
         className={`search-box ${this.props.className}`}
         type="search" 
         placeholder='Please Enter Filter' 
         onChange={this.props.onChangeHandler}>
         </input>
        )
    }
}

export default SearchBox;