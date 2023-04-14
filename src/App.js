import React,{useEffect, useState} from 'react'
import EmojiData from './Emoji.json';
import "./index.css"

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=> {
      const newData = EmojiData.filter((emoji) => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input 
          size="30" 
          type="text"
          placeholder="search" 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
        />
      </center>

        {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
      
    </div>
  )
}

export default App
