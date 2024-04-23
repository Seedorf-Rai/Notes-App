import '../css/homeContent.css'
import Form from './Form'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'

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
  return(
        <>
          <div className="hello-box">
             <div className="abait-box">
             <h1 className='abait'>{abait} Seedorf</h1>
             <p className='abait-time'>{day} , {month} , {getDay} , {year} </p>
             </div>
          </div>
          <h5>
              <FontAwesomeIcon icon={faNoteSticky} className='icon' />
              Notes
            </h5>
          <div className="home-content">

            <div className="card-section">
             <Card></Card>
             <Card></Card>
             <Card></Card>

             <Card></Card>
             <Card></Card>
             <Card></Card>
             <Card></Card>
            </div>
            <div className="form-section">
                <Form></Form>
            </div>
          </div>
        </>
    )
}