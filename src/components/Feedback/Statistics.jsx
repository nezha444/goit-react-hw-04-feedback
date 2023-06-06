import React from 'react';


export const Statistics = ( { good, neutral, bad, total, positivePercentage } ) => {
    return (
      <>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p>Total: {total}</p>
        <h3>Positive feedback: {positivePercentage}%</h3>
      </>
    );
  }


