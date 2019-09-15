import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { simple } from 'actions/simple.js'

const App = ({ running , simple}) => {
   return (
     <div>
       <h1>Hello React</h1>
       <p> Redux running: { running }  </p>
       <button onClick={simple}> Test Redux </button>
     </div>
  )
}

const stateToProps = state => ({
  running: state.simple.running
})

const dispatchToProps = dispatch => bindActionCreators({ simple }, dispatch)

export default connect(stateToProps, dispatchToProps)(App)

