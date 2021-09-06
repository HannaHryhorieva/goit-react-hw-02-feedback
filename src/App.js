import React, { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Container from './components/Container/Container';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round(
      ((this.state.good + this.state.neutral) / totalFeedback) * 100,
    );
  };

  handleFeedback = e => {
    e.preventDefault();
    const label = e.currentTarget.name;
    this.setState({ [label]: this.state[label] + 1 });
  };
  render() {
    const arrOptions = Object.keys(this.state);

    return (
      <div>
        <Container title="Please leave feedback">
          <FeedbackOptions
            options={arrOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Container>
        <Container title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
