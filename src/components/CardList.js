

import Card from './Card'



export default function CardList({Data}){



    return(
        <>
           {
            Data.map((e)=>{
             return   <Card key={e.id} title={e.title}  tag={e.tag} description={e.description} date={e.date} ></Card>
            })
           }
        </>
    )
}