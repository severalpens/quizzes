import React from 'react'
import Question from './Question';
import questionList from './questionList.json';
import Questions from './Questions';


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  

  const generateRandomOptionsIds = (q) => { 
    let idPairedWithRandomId = q.options.map((o,i) => {
      return {
      originalId: i,
      randomId: getRandomInt(100000)
    }
  })
    let sortedByRandomId = idPairedWithRandomId.sort((a,b) => a.randomId - b.randomId)
    return sortedByRandomId;
  };

const generateRandomOrder = () => {
      let idPairedWithRandomId = questionList.map((q,i) => {
      return {
      originalId: i,
      randomId: getRandomInt(100000),
      optionIds: generateRandomOptionsIds(q)
    }
  })
    let sortedByRandomId = idPairedWithRandomId.sort((a,b) => a.randomId - b.randomId)
    return sortedByRandomId;
  
}

export default class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.randomOrder = generateRandomOrder();
  }
  
  render() {
    return (
              <Questions randomOrder={this.randomOrder}/>
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
