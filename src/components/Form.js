import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/form.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'

export default function Form(){
    return(
        <>
          <div className="form-div">
            <div className='form-head'>
            <FontAwesomeIcon className="icon-sidebar" icon={faCirclePlus} />
            <h2>New Notes</h2>
            </div>
          <form action="" className="form-body">
            <input type="text" placeholder="Title" />
            <select name="" id="">
              <option value="">Revision</option>
              <option value="">Art</option>
              <option value="">Guitar</option>
              <option value="">Coding</option>
              <option value="">Maths</option>
            </select>
            <textarea type="text"  placeholder="Enter Details" rows={8} />
            <button className='button-87' type="submit">Add New Notes</button>
          </form>
          </div>
        </>
    )
}