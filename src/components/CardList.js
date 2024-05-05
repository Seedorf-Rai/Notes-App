

import { useContext } from 'react'
import Card from './Card'
import NoteContext from '../context/NoteContext'



export default function CardList({editCard}){

 const Data = useContext(NoteContext)

    return(
        <>
           {
            Data.map((e)=>{
             return   <Card key={e.id} editCard={editCard}  id={e.id} title={e.title}  tag={e.tag} description={e.description} date={e.date} ></Card>
            })
           }
        </>
    )
}