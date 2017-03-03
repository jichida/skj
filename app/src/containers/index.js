import React from 'react';
import { connect } from 'react-redux';
import IndexPage from '../components/index.js';
import {
  clickTab,
  clickNavPage
} from '../actions';


const mapStateToProps = ({app}) => {
  return {app};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangedIndex:(index)=>{
      dispatch(clickTab({curtabindex:index}));
    },
    onChangeClickPage:(action,name)=>{
      dispatch(clickNavPage({action:action,name:name}));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
