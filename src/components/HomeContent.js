import '../css/homeContent.css'
import Form from './Form'
import Card from './Card'

export default function HomeContent(){
    return(
        <>
          <div className="hello-box">
             <h1>Good Morning , Seedorf</h1>
          </div>
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