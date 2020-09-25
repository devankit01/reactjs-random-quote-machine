import React,{ useState } from 'react';


function App() {
  
  const [quote,setquote] = useState('I’v…over again in my life. And that is why I succeed.')
  const [author,setauthor] = useState('Michael Jordan')


  const GetQuote = () =>{
  // const [quote,setquote] = useState('')
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let dataquotes = data.quotes;
      let random = Math.floor(Math.random()*dataquotes.length);
      let newquote = dataquotes[random];
      console.log(newquote);
      setquote(newquote.quote);
      setauthor(newquote.author);
      const arr = ['#66CC99','#16A085','#3A539B','#1F3A93','#2ABB9B','#F7CA18']
      let ran = Math.floor(Math.random()*arr.length)
      document.body.style.background = String(arr[ran]);
     

    })
  }
  const handleClick = ()  =>{
    console.log('✅')
    GetQuote();
  }
  return (
    <div className="App">
      <div className="card">
<p>{quote}</p>
       <p>–{author}</p>
       <button onClick={handleClick}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
