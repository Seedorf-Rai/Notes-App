import '../css/Card.css';

export default function Card({date,title,description,tag}) {
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