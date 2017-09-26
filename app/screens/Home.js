import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

import { changeCurrencyAmount, getInitialConversion, swapCurrency } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionDate: PropTypes.object,
    conversionRate: PropTypes.number,
    quotePrice: PropTypes.number,
    primaryColor: PropTypes.string,
    isFetching: PropTypes.bool,
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      type: 'base',
      title: 'Base Currency',
    });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      type: 'quote',
      title: 'Quote Currency',
    });
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  };

  handleChangeText = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  render() {
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={
              !this.props.quotePrice || this.props.isFetching
                ? '...'
                : this.props.quotePrice.toFixed(2)
            }
            editable={false}
            keyboardType="numeric"
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            conversionRate={this.props.conversionRate}
            date={this.props.conversionDate}
            quote={this.props.quoteCurrency}
          />
          <ClearButton text="Reverse Currency" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency, amount, conversions, isFetching } = state.currencies;
  const { primaryColor } = state.theme;
  const conversionSelector = conversions[baseCurrency] || {};

  let conversionDate = new Date();
  let conversionRate = 0;
  let quotePrice = 0;

  if (conversionSelector.date) {
    conversionDate = new Date(conversionSelector.date);
  }

  if (conversionSelector.rates) {
    conversionRate = conversionSelector.rates[quoteCurrency];
    quotePrice = amount * conversionRate;
  }

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionDate,
    conversionRate,
    quotePrice,
    primaryColor,
    isFetching,
  };
};

export default connect(mapStateToProps)(Home);
