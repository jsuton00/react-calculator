import React, { Component } from 'react';
import Display from '../components/Display';
import KeyPad from '../components/Keypads';
import math from '../utils/mathConfig';

export default class Calculator extends Component {
  state = {
    expression: '',
    total: [],
  };

  clickKeyValue = (button) => {
    switch (button) {
      case '=':
        this.calculate();
        break;
      case 'C':
        this.clear();
        break;
      case 'Del':
        this.deleteLastEntry();
        break;
      default:
        this.setState({
          expression: this.state.expression + button,
        });
    }
  };

  calculate = () => {
    let evaluateExpression = '';
    if (this.state.expression.includes('--')) {
      evaluateExpression = this.state.expression.replace('--', '+');
    } else {
      evaluateExpression = this.state.expression;
    }

    try {
      this.setState({
        expression: `${math.evaluate(evaluateExpression) || ''}`,
      });
    } catch (e) {
      this.setState({ expression: 'error' });
    }
  };

  clear = () => {
    const timer = setTimeout(() => {
      this.setState({ expression: '' });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  };

  deleteLastEntry = () => {
    this.setState({ expression: this.state.expression.slice(0, -1) });
  };

  render() {
    return (
      <div id="calculator" className="calculator">
        <Display results={this.state.expression} />
        <KeyPad clickKey={this.clickKeyValue} />
      </div>
    );
  }
}
