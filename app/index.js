import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import { AlertProvider } from './components/Alert';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $white: '#FFFFFF',
  $darkText: '#343434',
});

const App = ({ dispatch, navigation }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: navigation,
    })}
  />
);

const mapStateToProps = ({ navigation }) => ({ navigation });
const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <AppWithNavigation />
    </AlertProvider>
  </Provider>
);
