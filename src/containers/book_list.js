import React,{Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreator} from "react-redux";
class BookList extends Component{
    renderList(){
        return this.props.books.map(book=>{
            return (
                <li key={book.title}>{book.title}</li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
function mapStateToProps(state)
{
    return {
        books:state.books//key of props.books,value:state
    }
}
function mapDispatchToProps(dispatch)
{
    //value:call action creator,keys:props:selectBooks
    //return props to BookList
    //whenever selectbppk is called, should be passed to our reducers
    return bindActionCreator({selectBook:selectBook},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BookList);