import React from 'react'
import '../styles/App.css';
const App = () => {

  let timer;
  const handleDoubleClick = (e)=> {
    if(e.detail === 1){
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('I was not double clicked');
      }, 500);
    }
    else {
      clearTimeout(timer);
        console.log('I was double clicked');
    }
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
