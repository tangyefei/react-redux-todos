import React from 'react';

class AddTodo extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }

    this.commitAdd = this.commitAdd.bind(this);
  }

  commitAdd() {
    let text = this.state.text;
    if(text && this.state.text) {

    }
  }

  render() {
    return (<div>
      <input className="new-todo" onChange={(e) => {this.setState({text: e.target.value})}} />
      <button className="add-btn" onClick={this.commitAdd}>
        添加
      </button>
      
    </div>)
  }
}

export default AddTodo;