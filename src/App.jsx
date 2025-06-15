import  { useState } from 'react'

const Display = ({counter}) => 
  <div>{counter}</div>
  


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
 const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const increaseGoodByOne = () => {
setGood(good+1)
console.log("Good is", good)

}

const increaseBadByOne = () => {
setBad(bad+1)
console.log("Bad is", bad)

}

const increaseNeutralByOne = () => {
setNeutral(neutral+1)
console.log("Neutral is", neutral)

}

  return (
    <div>
      <Button onClick={increaseGoodByOne} text="Good" />
      <Button onClick={increaseNeutralByOne} text="Neutral" />
      <Button onClick={increaseBadByOne} text="Bad" />
      
      <h1>Statistics</h1>
      <p>Good reviews: {good}</p>
      <p>Neutral reviews: {neutral}</p>
      <p>Bad reviews: {bad}</p>
    </div>
  )
}


export default App