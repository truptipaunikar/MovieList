import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
import Card from './component/Card';


function App() {
  const [movie, setMovie]=useState(null)
 useEffect(()=>{
  // console.log()"hello"
  getdata()
 },[])
 const getdata=async()=>{
 let responce = await axios.get("https://shubham-singh1810.github.io/movieList/data.json")
 setMovie(responce.data)
 }

  return (
    <div className="App">
      <h2 className="heading">Top Movie List</h2>

      {/* <Card></Card> */}
        {
          movie!=null ? 
          <div className='list'>
            {
              movie.map((v,i)=>{
                return (
                  <Card key={i} value={v}></Card>
                )
              })
            }
          </div>
          : <h1>your data is fetching now</h1>
        }
    </div>
  );
}

export default App;
