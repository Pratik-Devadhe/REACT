import { useState } from 'react'

import './App.css'



function App() {

  const [count, setCount] = useState(0);

  let Increase = () => {
    if(count == 20){
      return count;
    }

  return setCount(count + 1);
  
  }

let Decrease = () => {

  if(count == 0){
    return count;
  }

  return setCount(count-1);

}

  return (
    <>
        <p> this is the count : {count}</p>

        <button onClick={Increase}> Increase value {count}</button>
        <br/>
        <br/>
        <button onClick={Decrease}> Decrease value value {count}</button>

    </>
  )
}

export default App
