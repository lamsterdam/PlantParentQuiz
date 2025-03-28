import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import InputTracking from './components/InputTracking'
import './App.css'

const questionsAndAnswers = [{question: 'Start!', answer: 'Click Next button to reveal your questions!'}, 
  {question: 'What does a spider plant shoot off?', answer: 'Spider Babies'},
  {question: 'What is it called when you use cutting from a plant to create more plnts?', answer: 'Propogation'},
  {question: 'Which plant is often compared to cheese?' , answer: 'Swiss Cheese Plant'},
  {question: 'What is it called when the roots of a plant get brown and mushy?', answer: 'Root Rot'},
  {question: 'What is the name of the white hard rocks used to create space in plant soil?', answer: 'Perlite'},
  {question: 'Lack of proper drainage in a pot can lead to?', answer: 'Water logging and Root rot'},
  {question: 'What is an aerial root?', answer: 'A root that grows above the soil'},
  {question: 'What is the number one sign that your plant needs to be repotted?', answer: 'Roots are sticking out of the bottom of the pot'}, 
  {question: 'What is a common result of overwatering plants?', answer: 'Yellowing leaves'},
  {question: 'What is the process by which plants make their food?', answer: 'Photosynthesis'}
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //lift the state up to App to be passed down to InputTracking
  const [input, setInput] = useState("");
  const [correct_input, setCheckedInput] = useState();
  
  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questionsAndAnswers.length);
    resetInput();
    
  }

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % questionsAndAnswers.length);
    resetInput();
  }

  //function to clear the input box
  const resetInput = () => {
    setInput("")
    setCheckedInput(undefined);
  }


  return (
    <div className="App">
      <h2>So You Call Yourself A Plant Parent?</h2>
      <h3>Test your knowledge with this quiz on all things plants!</h3>
      <h4>Number of Cards: 10</h4>
      <Card question={questionsAndAnswers[currentIndex].question} answer={questionsAndAnswers[currentIndex].answer} />
      <InputTracking question={questionsAndAnswers[currentIndex].question} answer={questionsAndAnswers[currentIndex].answer} 
      input={input} setInput={setInput} correct_input={correct_input} setCheckedInput={setCheckedInput} />
      <button className="button" onClick={showPrevious}>Previous</button>
      <button className="button" onClick={showNext}>Next</button>
    </div>
  )
}

export default App
