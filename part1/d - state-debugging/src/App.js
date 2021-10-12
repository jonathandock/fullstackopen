import React, { useState } from 'react'

const Display = ({count}) => (
  <p>{count}</p>
)

const Button = ({btnText, onClick}) => <button onClick={onClick}>{btnText}</button>;

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [leftCounter, setLeftCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const addClick = (side) => {

    switch (side) {
      case 'L':
        setLeftCounter(leftCounter + 1);
        break;
      
      case 'R':
        setRightCounter(rightCounter + 1);
        break;
    
      default:
        break;
    }

    
    setAllClicks(allClicks.concat(side))
  };

  return (
    <div>
      <div>
        <Display count={leftCounter}/>
        <Button btnText='Left' onClick={() => addClick('L')} />
      </div>

      <div>
        <Display count={rightCounter}/>
        <Button btnText='Right' onClick={() => addClick('R')} />
      </div>

      <div>
        <History allClicks={allClicks}/>
      </div>
    </div>
  )
}

export default App