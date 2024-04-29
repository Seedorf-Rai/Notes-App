import '../css/homeContent.css'
import Form from './Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'
import CardList from './CardList'
import { useState } from 'react'

export default function HomeContent(){
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date()
  console.log(date);
  const month = months[date.getMonth()]
  const day = weekDay[date.getDay()]
  const year = date.getFullYear()
  const getDay = date.getDate()
  const getTime = date.getHours()
  console.log(getTime);
  let abait;
  if(getTime < 12){
    abait = "Good Morning !"
  }
  else if(getTime > 12 && getTime < 5){
    abait = "Good Afternoon ! "
  }
  else{
    abait = "Good Night"
  }
  // Functionalities
  const [editableCard,setEditableCard] = useState(null)
  const [Data,setData] = useState([])
 function addCard(newCard){
   setData([...Data,{
    id: Data.length + 1,
    ...newCard
   }])
 }
 function deleteCard(id){
   const newCard = Data.filter((card) => card.id !== id)
   setData(newCard)
 }
 function editCard(id){
   for(var i = 0; i < Data.length; i++){
    if(Data[i].id === id){
      setEditableCard(Data[i])
    }
   }
 }
 function updateCard(card){
   console.log(card);
   var temp;
   for(var i = 0; i < Data.length ; i++){
    if(Data[i].id === card.id){
     temp = Data[i];
    }
   }
   temp.title = card.title;
   temp.description = card.description;
   temp.tag = card.tag;
   setEditableCard(null)
 }
  return(
        <>
          <div className="hello-box">
             <div className="abait-box">
             <h1 className='abait'>{abait} Seedorf</h1>
             <p className='abait-time'>{day} , {month} , {getDay} , {year} </p>
             </div>
          </div>
          <div className="notes-text">
          <FontAwesomeIcon icon={faNoteSticky} className='icon' />
          <h1>My Notes</h1>
          </div>
          <div className="home-content">

            <div className="card-section">
              <CardList editCard={editCard} deleteCard={deleteCard} Data={Data}></CardList>
            </div>
            <div className="form-section">
                <Form addCard={addCard} editableCard={editableCard} updateCard={updateCard} ></Form>
            </div>
          </div>
        </>
    )
}