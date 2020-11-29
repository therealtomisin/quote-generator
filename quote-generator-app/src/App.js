import React, {useState, useEffect} from 'react'
import './App.css';
import Quotes from './components/Quotes'
import Author from './components/Author'

function App() {
const [quotes, setQuotes] = useState('')
const [author, setAuthor] = useState('')
const [colour, setColour] = useState('')
const [name, setName] = useState(true)

useEffect(()=>{
  getQuotes()
},[])

const getQuotes = () => {
  let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  fetch (url)
    .then(res => res.json())
    .then(data => {
      let datas = data.quotes;
      let randomNum = Math.floor(Math.random()*datas.length)
      let randomQuote = datas[randomNum]
      let randomNum2 = Math.floor(Math.random() * colours.length)
      let randomColour = colours[randomNum2]
      setQuotes(randomQuote.quote)
      setAuthor(randomQuote.author)
      setColour(randomColour)
    })
}

onanimationend = () => {
  setName(!name)
}

const colours = [
  'blue', 'green', 'yellow', 'purple', 'grey', 'orange', 'pink', 'maroon'
]
const handleClick = () => {
  getQuotes()
  setName(!name)
  
}
const styling = {
  color: colour,
}
const styling2 = {
  background: colour
}

  return (
    <div style = {styling2} className = {`quote-box ${name ? '' : 'restart'}`} id = 'quote-box'>
    <h1 className = 'title'>
      Quote Generator
    </h1>
      <div className="App">
        <div id = 'text'>
          <Quotes style = {styling} quote = {quotes}/>
        </div>
        <div id = 'author'>
          <Author author = {author}/>
        </div>
        <div className = 'buttonXanchor'>
          <button id = 'new-quote' onClick = {()=>handleClick()}>New Quotes</button>
        <a href = 'twitter.com/intent/tweet' id = 'tweet-quote'><strong>Tweet</strong></a>
        </div>
      </div>
    </div>
  );
}

export default App;
