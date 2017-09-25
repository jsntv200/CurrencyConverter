import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  isBase = () => this.props.navigation.state.params.type === 'base';

  isQuote = () => this.props.navigation.state.params.type === 'quote';

  handlePress = (currency) => {
    if (this.isBase()) {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (this.isQuote()) {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;

    if (this.isQuote()) {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ currencies, theme }) => ({
  baseCurrency: currencies.baseCurrency,
  quoteCurrency: currencies.quoteCurrency,
  primaryColor: theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
