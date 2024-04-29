

import Card from './Card'



export default function CardList({Data,deleteCard,editCard}){



    return(
        <>
           {
            Data.map((e)=>{
             return   <Card key={e.id} editCard={editCard} deleteCard={deleteCard} id={e.id} title={e.title}  tag={e.tag} description={e.description} date={e.date} ></Card>
            })
           }
        </>
    )
}