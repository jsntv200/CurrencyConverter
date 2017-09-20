import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ base, conversionRate, date, quote }) => (
  <Text style={styles.textSmall}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  data: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
