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

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

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
    isFetching: PropTypes.bool,
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
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
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            onPress={this.handlePressBaseCurrency}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            value={this.props.isFetching ? '...' : this.props.quotePrice.toFixed(2)}
            editable={false}
            keyboardType="numeric"
            onPress={this.handlePressQuoteCurrency}
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
  const { baseCurrency, quoteCurrency, amount, isFetching } = state.currencies;
  const conversionSelector = state.currencies[baseCurrency] || {};

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
    isFetching,
  };
};

export default connect(mapStateToProps)(Home);
