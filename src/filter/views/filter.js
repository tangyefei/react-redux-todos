import React from 'react';
import { setFilter } from '../actions.js';
import { connect } from 'react-redux';

const FilterView = ({onClick}) => {
// class FilterView extends React.Component {
  // render() {
    return (<ul>
      <li onClick={() => {onClick('ALL')}}>All</li>
      <li onClick={() => {onClick('COMPLETED')}}>Completed</li>
      <li onClick={() => {onClick('NOT_COMPLETED')}}>Not Completed</li>
    </ul>)
  // }
}

// export default FilterView;


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (type) => {
      dispatch(setFilter(type));
    }
  };
};


export default connect(null, mapDispatchToProps)(FilterView);
