import { useState } from 'react'
import './searchBar.scss'

const types = ["buy" , "rent"];

function SearchBar(){
  const [query , setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0
  })

  const switchtype = (val) => {
    setQuery((prev) => ({...prev , type: val}));
  };

  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => (
          <button
          key={type}
          onClick={() => switchtype(type)}
          className={query.type === type ? "active" : ""}
          >
          {type}</button>
        ))}
      </div>
      <form action="">
        <input type="text" name='location' placeholder='city location' />
        <input type="number" name='minPrice' min={0} max = {100000}placeholder='Min price' />
        <input type="number" name='maxPrice' min={0} max = {100000} placeholder='Max price' />
        <button>
          <img src="/search.png" alt="/" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar