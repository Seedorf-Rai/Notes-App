import { useState } from 'react';
import '../css/Card.css';

export default function Card({id,date,deleteCard,editCard,title,description,tag}) {
 const [desc,setDesc] = useState(true)
  function handleDelete(){
    deleteCard(id)
  }
  function handleShow(){
    setDesc(!desc)
  }
  function handleEdit(e){
      e.preventDefault()
      editCard(id)
  }
  return (
    <>
      <div className="card-main-div">
        <div className="card fold">

          <div className="card-top">
            <div>
              <h3>{date}</h3>
            </div>
            <div className="card-option">
              ...
            </div>

          </div>

          <div className="card-title">
            <h1>{title}</h1>
          </div>
         <div className="card-desc" onClick={handleShow}>
           <p>
             {
              desc ? description.substring(0,30) + '...' : description
             }
           </p>
         </div>
         <div className="card-tag">
           <div className="card-tag-div">
            {tag}
           </div>
            <button className='editBtn' onClick={handleEdit} >Edit</button>
            <button className='dlt-btn' onClick={handleDelete}>X</button>
         </div>
        </div>
        {/* <div className="card-option-box">
        <div>Edit</div>
        <div>Delete</div>
      </div> */}
      </div>

    </>
  )
}