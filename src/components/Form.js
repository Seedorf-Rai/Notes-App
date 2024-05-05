import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/form.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { useEffect, useState, useContext } from 'react';
import NoteDispatchContext from '../context/NoteDispatchContext';

export default function Form({editableCard}){
  const dispatch = useContext(NoteDispatchContext)
  const initialValue = {
    title:"",
    tag:"",
    description:""
  }
  const [value,setValue] = useState(initialValue)
  function handleChange(e){
    console.log(e.target.name , e.target.value);
    setValue({...value,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
     e.preventDefault();

     if(editableCard){
      dispatch({
        type: "UPDATE",
        payload: value
      })
     }
     else{
      dispatch(
        {
          type: "ADD",
          payload: value
        }
      )
     }
     setValue(value=>initialValue)
  }
  useEffect(()=>{
    if(editableCard){
      setValue(editableCard)
    }
  },[editableCard])
    return(
        <>
          <div className="form-div">
            <div className='form-head'>
            <FontAwesomeIcon className="icon-sidebar" icon={faCirclePlus} />
            <h2>New Notes</h2>
            </div>
          <form action="" className="form-body">
            <input type="text" onChange={handleChange} placeholder="Title" value={value.title} name="title" />
            <select name="tag" onChange={handleChange} value={value.tag} id="">
            <option value="">Select Tag</option>
              <option value="Revision">Revision</option>
              <option value="Art">Art</option>
              <option value="Guitar">Guitar</option>
              <option value="Coding">Coding</option>
              <option value="Maths">Maths</option>
            </select>
            <textarea type="text" onChange={handleChange} name='description'  placeholder="Enter Details" value={value.description} rows={8} />
            <button className='button-87' onClick={handleSubmit} type="submit">{
              editableCard ? "Update Note" : "Add New Notes"
            }</button>
          </form>
          </div>
        </>
    )
}