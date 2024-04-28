import '../css/Card.css';

export default function Card({id,date,deleteCard,title,description,tag}) {
  if(description.length > 20){
    description = description.substring(0,20) + '...';
  }
  function handleDelete(){
    deleteCard(id)
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
         <div className="card-desc">
           <p>
             {description}
           </p>
         </div>
         <div className="card-tag">
           <div className="card-tag-div">
            {tag}
           </div>
            <button className='editBtn'>Edit</button>
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