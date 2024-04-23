import '../css/homeContent.css'
import Form from './Form'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'

export default function HomeContent(){
    return(
        <>
          <div className="hello-box">
             <h1>Good Morning , Seedorf</h1>
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