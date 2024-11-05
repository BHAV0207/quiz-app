import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import QuizCard from './components/QuizCard';
import End from './components/End';

function App() {

  let [fetching , setFetching] = useState(true);
  let [arr , setArr] = useState([]);
  let [end , setEnd] = useState(false);
  let [points , setPoints] = useState(0);

  async function apiFetch(){
     const ans = await fetch("https://dummyjson.com/c/3cbd-1cdb-462a-a286");
     const answer = await ans.json();
     setArr(answer);
     setFetching(false);
  }

  useEffect(() => {
    apiFetch();
  }, []) 


  function FinalMessage(score){
    setPoints(score);
    setEnd(true);
  }

  function restart(){
    setEnd(false);
  }



  return (
    <div className='bodyDiv'>
      <Header></Header>
      <div className='body'>
        {!fetching && !end && <QuizCard arr={arr} onChanging={FinalMessage}></QuizCard>}
        {end && <End points={points} restart={restart} arr={arr}></End>}
      </div>

    </div>
  )
}

export default App
