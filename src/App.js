import React,{useEffect, useState} from 'react'
import EmojiData from './Emoji.json';
import "./App.css" 

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=> {
      const newData = EmojiData.filter((emoji) => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div className='body'>
      <form className="top">
      <center>
        <h1><br/><br/>EMOJI SEARCH<br/></h1>
        <input 
          size="50" 
          type="text"
          className='search'
          placeholder="search" 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
        />
        <br/><br/>
      </center>
      </form>
      <form className="bottom">
      {data.map((emoji) => (<fieldset className="fset">
        <h2 key={emoji.title} className="bottom">&nbsp;&nbsp;
          {emoji.title} {emoji.symbol}
        </h2>
      </fieldset>
        
      ))}
      
      </form>
    </div>
  )
}

export default App
