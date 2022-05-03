import React from 'react'
import Question from './Question';
import questionList from './questionList.json';


export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { questionList, score: 0, outOf: 0, question: {}, questionId: null, answer: '' }
    this.check = this.check.bind(this);
  }


  check = (questionId, answer) => {
    this.setState({ questionId, answer });
  }

  renderedQuestions = questionList.map((q, id) => <Question key={id} question={q} questionId={id + 1} check={this.check} />);

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  render() {
    let renderedQuestions = this.props.randomOrder.map((pair, i) => {
      return <Question key={i} question={questionList[pair.originalId]} questionId={i} check={this.check} optionIds={pair.optionIds} />;
    })

    return (
      <div className="ml-36 h-screen ">
        <h1 className="text-2xl mb-8">DP-900 Azure Data Fundamentals</h1>
        <div className='flex h-screen '>
          <div className="overflow-y-scroll h-screen w-1/2 border">
            {renderedQuestions}
          </div>
          <div className='w-1/2 '>
            <div>
              <h1>Question {this.state.questionId} Answer:</h1>
            </div>
            {this.state.answer}
          </div>
        </div>
      </div>
    )
  }
}

// export default function DVA_C01() {
//   return (
//     <div>asdf
//       {questions.forEach(question => {
//           <div>asdf
//             <div>{question.text}</div>
//             <div>
//               {question.options.forEach(option => {
//                   <div className="form-check">
//                     <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id={option.id} />
//                     <label className="form-check-label inline-block text-gray-800" htmlFor={option.id}>
//                       {option.text}
//                     </label>
//                   </div>
//               })
//               }
//             </div>
//           </div>
//       })
//       }
//     </div>
//   )
// }
