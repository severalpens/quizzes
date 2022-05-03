import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Option from './Option';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { answered: false, correctly: false }
  }


  render() {
    const { questionId, question, check, optionIds } = this.props;
    const options = question.options;
    let renderedOptions = optionIds.map((pair,i) => <Option key={i} questionId={questionId} optionId={pair.originalId} option={options[pair.originalId]} />)

    const getAnswer = () => {
      let option = question.options.find((x) => x.isCorrect === true);
      return option.text;
    }

    return (
      <div className="mb-16">
        <div className="mb-2">Question {questionId}</div>
        <div className="mb-2">{question.text}</div>
        {renderedOptions}
        <button type="submit" className="border text-xs m-4  px-4 py-1.5  rounded-md bg-blue-600 text-white"
          onClick={e => {
            e.preventDefault();
            check(questionId, getAnswer());
          }}>Check</button>
      </div>
    )
  }
}

// <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Check</button>

