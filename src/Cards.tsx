import { useState,useEffect } from 'react'
import dataFetch from "./dataFetch.ts";
import './Style.css'
import Card from './Card'

function Cards() {
  const [data, setData] = useState([]);
  useEffect(()=>{

     dataFetch().then(result=>{setData(result)});



  },[])
    localStorage.setItem("data",JSON.stringify(data));
  
  return (<>
          <div className="card">
              <h1>Card </h1>
              {data.map((item)=>

                  (<Card {...item}></Card>))}

          </div>

      </>)
}

export default Cards
