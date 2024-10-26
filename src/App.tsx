import Header from './components/Header'
import Rules from './components/Rules'
import AllChips from './components/AllChips'
import InGame from './components/InGame'
import { useState, useEffect } from 'react'
import { ChipType } from './types'

function App() {
  const [rules, setRules] = useState(false)
  const [picked, setPicked] : [ChipType | null, any] = useState(null)

  const getScore = () => {
    const scr = localStorage.getItem("score")
    return scr && scr !== "undefined" ? JSON.parse(scr) : 0;
  }
  
  const [score, setScore] = useState(getScore)

  useEffect(()=>{
    localStorage.setItem("score", JSON.stringify(score))
  }, [score])

  function toggleRules() {
    setRules(prev => !prev)
  }

  

  return (
    <div className={`container ${rules ? "darken" : ""}`}>
      <Header score={score} />
      {!picked 
      ? <AllChips setPicked={setPicked} rules={rules} /> 
      : <InGame 
      setPicked={setPicked} 
      picked={picked}
      setScore={setScore}
      />}
      <button onClick={toggleRules} className='rules-button'>RULES</button>
      {rules && <Rules toggleRules={toggleRules} />}
    </div>
  )
}

export default App
