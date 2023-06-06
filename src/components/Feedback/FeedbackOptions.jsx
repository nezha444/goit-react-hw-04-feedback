import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.options.map(option => (
            <li>
              <button
                type="button"
                name={option}
                onClick={() => this.props.onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
