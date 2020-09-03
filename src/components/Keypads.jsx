import React from 'react';
import { mainKeyPad, operatorKeyPad } from '../constants/calculatorKeys';
import { MainKeys, OperatorKeys } from './Buttons';

export default function KeyPad(props) {
  const { clickKey } = props;
  return (
    <div id="calculator-keypad" className="calculator-keypad">
      <div id="calculator-keypad-main" className="calculator-keypad-main">
        {mainKeyPad.map((keypad) => {
          return (
            <div className="calculator-keypad-area numbers">
              <MainKeys
                key={keypad.key}
                buttonKey={keypad.key}
                label={keypad.label}
                clickHandler={clickKey}
              />
            </div>
          );
        })}
      </div>
      <div
        id="calculator-keypad-operators"
        className="calculator-keypad-operators"
      >
        {operatorKeyPad.map((operator) => {
          return (
            <div className="calculator-keypad-area operators">
              <OperatorKeys
                key={operator.key}
                buttonKey={operator.key}
                label={operator.label}
                clickHandler={clickKey}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
