import  { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value} </td></tr>

const App = () => {
 const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const [average, setAverage] = useState(0)
const [total, setTotal] = useState(0)

const Statistics = (props) => {
  if (props.total === 0){
    return <></>
  }
  else
 return <table>
  <tbody>
    <StatisticsLine text="Good reviews:" value={good}/>
      <StatisticsLine text="Neutral reviews:" value={neutral}/>
      <StatisticsLine text="Bad reviews:" value={bad}/>
      <StatisticsLine text="Total reviews:" value={total}/>
      <StatisticsLine text="Average score:" value={average/total}/>
      <StatisticsLine text="Percentage of good reviews:" value={good/total*100}/>
  </tbody>
  
  </table>
}

const increaseTotalByOne = () =>{
  setTotal(total+1)
}

const increaseAverageByX = (props) =>{
  setAverage(average+props)
}

const increaseGoodByOne = () => {
setGood(good+1)
increaseAverageByX(1)
increaseTotalByOne()
console.log("Good is", good)

}

const increaseBadByOne = () => {
setBad(bad+1)
increaseAverageByX(-1)
increaseTotalByOne()
console.log("Bad is", bad)

}

const increaseNeutralByOne = () => {
setNeutral(neutral+1)
increaseAverageByX(0)
increaseTotalByOne()
console.log("Neutral is", neutral)

}

  return (
    <div>
      <Button onClick={increaseGoodByOne} text="Good" />
      <Button onClick={increaseNeutralByOne} text="Neutral" />
      <Button onClick={increaseBadByOne} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} average={average} total={total}/>
      
    </div>
  )
}


export default App