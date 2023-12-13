import { useState } from 'react'

const Button = ({handleClick,text})=> (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => {
  const { good, neutral, bad } = value;
  if (text === "good") {
    return <tr><td>good</td><td>{good}</td></tr>;
  } else if (text === "neutral") {
    return <tr><td>neutral</td><td>{neutral}</td></tr>;
  } else if (text === "bad") {
    return <tr><td>bad</td><td>{bad}</td></tr>;
  } else if (text === "all") {
    return <tr><td>all</td><td>{good + neutral + bad}</td></tr>;
  } else if (text === "average") {
    return <tr><td>average</td><td>{(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}</td></tr>;
  } else if (text === "positive") {
    return <tr><td>positive</td><td>{(good / (good + neutral + bad)) * 100} %</td></tr>;
  }
  return null;
};

// a proper place to define a component
const Statistics = ({ good, neutral, bad }) => {
  const value = { good, neutral, bad };
  const total = good + neutral + bad;
  const text = ["good", "neutral", "bad", "all", "positive", "average"];
  if (total === 0) {
    return <div>No feedback given yet</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
        </tr>
      </thead>
      <tbody>
        {text.map(stat => (
          <StatisticLine key={stat} text={stat} value={value} />
        ))}
      </tbody>
    </table>
  );
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text="good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text="bad"/>

      <br />
      <h2>statistics</h2>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
