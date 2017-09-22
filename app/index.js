import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { AlertProvider } from './components/Alert';
import Navigator from './config/routes';

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

export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);
