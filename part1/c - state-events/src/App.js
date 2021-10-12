import React, { useState } from 'react'

const Display = ({count}) => (
  <p>{count}</p>
)

const Button = ({btnText, onClick}) => <button onClick={onClick}>{btnText}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display count={counter}/>
      <Button btnText='Increase' onClick={increase} />
      <Button btnText='Reset' onClick={reset} />
    </div>
  )
}

export default App