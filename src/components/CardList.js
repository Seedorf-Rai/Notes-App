
import axios from 'axios';
import Card from './Card'
import { useEffect, useState } from 'react';


export default function CardList(){
  const [Data,setData] = useState([])
  async  function handleFetch(){
        const getData = await axios.get('https://my.api.mockaroo.com/notes_app.json?key=7fa0dfc0')
        setData(Data=>getData.data)
  }
  useEffect(()=>{
     try{
        handleFetch()
     }
     catch(e){
        console.log(e);
     }
  },[])
    return(
        <>
           {
            Data.map((e)=>{
             return   <Card title={e.title} tag={e.tag} description={e.description} date={e.date} ></Card>
            })
           }
        </>
    )
}