import React,{useState} from 'react'

const History = (props) =>{
  if(props.allClicks.length ===0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [value, setValue] = useState(10)

  const handleClick =() =>{
    console.log('clicked the button')
    setValue(0)
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
}


export default App
