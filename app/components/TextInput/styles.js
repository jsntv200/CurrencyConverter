import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    marginVertical: 11,
    width: '90%',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    height: INPUT_HEIGHT,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  input: {
    flex: 1,
    fontSize: 18,
    height: INPUT_HEIGHT,
    paddingHorizontal: 8,
    color: '$inputText',
  },
  border: {
    backgroundColor: '$border',
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
  },
});
