import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions.js';
import PropTypes from 'prop-types'

class AddTodo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.commitAdd = this.commitAdd.bind(this);
  }

  commitAdd() {
    let text = this.state.text;
    if(text && this.state.text) {
      this.props.onAdd(this.state.text);
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};


AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

// export default AddTodo;/
export default connect(null, mapDispatchToProps)(AddTodo);