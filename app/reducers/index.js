import { combineReducers } from 'redux';
import currencies from './currencies';
import navigation from './navigation';
import theme from './theme';

export default combineReducers({
  currencies,
  navigation,
  theme,
});
