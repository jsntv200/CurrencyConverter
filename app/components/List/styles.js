import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '$white',
  },

  text: {
    fontSize: 16,
    color: '$darkText',
  },

  separator: {
    flex: 1,
    marginLeft: 20,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },

  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconVisible: {
    backgroundColor: '$primaryBlue',
  },

  iconImage: {
    width: 18,
  },
});
