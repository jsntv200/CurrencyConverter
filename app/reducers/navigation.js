import { NavigationActions } from 'react-navigation';
import Navigator from '../config/routes';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

const reducer = (state = initialState, action) =>
  Navigator.router.getStateForAction(action, state) || state;

export default reducer;
