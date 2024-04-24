import '../css/Card.css';

export default function Card() {
  return (
    <>
      <div className="card-main-div">
        <div className="card fold">

          <div className="card-top">
            <div>
              <h3>25 April , 2024</h3>
            </div>
            <div className="card-option">
              ...
            </div>

          </div>

          <div className="card-title">
            <h1>User interviews to improve your project design</h1>
          </div>
         <div className="card-desc">
           <p>
             Lorem ipsum dolor sit amet .ecusandae quos? Repellat voluptatem consequatur pariatur enim, vero nesciunt!...
           </p>
         </div>
         <div className="card-tag">
           <div className="card-tag-div">
             Workshop
           </div>
           <div className="card-tag-div">
             Workshop
           </div>
           <div className="card-tag-div">
             Workshop
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