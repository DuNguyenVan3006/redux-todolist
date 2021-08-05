import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords :''
    }
  }
  onChange =(event)=>{
    var target  = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] :value
    })
  }
  onSearch =()=> {
    this.props.onSearch(this.state.keywords)
  }
  render() {
    var {keywords } =this.state;
    return (
     
        
          <div className="input-group">
            <input
            name = "keywords"
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
              value ={keywords}
              onChange={this.onChange}
            />
            <span className="input-group-btn">
              <button onClick = {this.onSearch} className="btn btn-primary" type="button">
                <span className="fa fa-search mr-5"></span>Tìm
              </button>
            </span>
          </div>
      
       
    );
  }
}
export default Search;
