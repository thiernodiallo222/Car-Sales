import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { state } from './reducers/reducer';

import { addFeature, removeFeature } from './Actions/Features'
import { connect } from 'react-redux';





const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures}
          addFeature={props.addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
// </Provider>

// mapping state to props 
const mapStateToProps = state => {
  return {
  additionalPrice: state.additionalPrice,
  car:state.car,
  additionalFeatures: state.additionalFeatures
  }
  
};


//mapping dispatch to props
const mapDispatchToProps = {
  addFeature,
  removeFeature
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);



