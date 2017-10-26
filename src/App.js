import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getChatLog, getMemberList } from './service';
import { Messages } from './components/Messages'

import './App.css';

class App extends Component {
  render() {
    return (<Messages members={this.props.members} messages={this.props.messages} />)
  }
}

App.defaultProps = {  
    members: {},  
    messages: {} 
} 

const mapStateToProps = state => {
  return {
    messages: state.messages,
    members: state.members
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({getChatLog, getMemberList}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
