import '../css/sidebar.css';
import HomeContent from './HomeContent';
import { FontAwesomeIcon   } from '@fortawesome/react-fontawesome'
import { faHouse , faBolt } from '@fortawesome/free-solid-svg-icons'
import { faBell , faNoteSticky ,faCircleCheck   } from '@fortawesome/free-regular-svg-icons'
import { useRef } from 'react';

export default function Sidebar(){
  const getSearch = useRef()
  const handleFocus = ()=>{
   if(getSearch.current){
    getSearch.current.style.color = 'red'
   }
    console.log("Focused");
  }
    return(
      <>
        <div className="main-box">
           <div className="aside-box">
            <h1 style={{ fontSize: '40px', fontWeight: 'bold' , marginLeft: '20px' }}> <span style={{ color: '#D9F57A' }}>N</span><span style={{ color: 'white' }}>otes</span></h1>
               <div className="nav">
                 <div className="search-item">
                    <input type="text" ref={getSearch} onFocus={handleFocus} className='search-box' placeholder='Search' />
                 </div>
                 <div className="nav-item">
                    <div className="icon-text">
                    <FontAwesomeIcon className="icon-sidebar" icon={faHouse} />
                   <h2>Home</h2>
                    </div>
                 </div>
                 <div className="nav-item">
                 <div className="icon-text">
                 <FontAwesomeIcon className="icon-sidebar" icon={faBell} />
                   <h2>Notification</h2>
                 </div>
                 </div>
                 <div className="nav-item">
                 <div className="icon-text">
                 <FontAwesomeIcon className="icon-sidebar" icon={faNoteSticky} />
                   <h2>Notes</h2>
                 </div>
                 </div>
                 <div className="nav-item">
                  <div className="icon-text">
                  <FontAwesomeIcon className="icon-sidebar" icon={faCircleCheck} />
                   <h2>Tasks</h2>
                  </div>
                 </div>
                 <div className="nav-item">
                    <div className="icon-text">
                    <FontAwesomeIcon className="icon-sidebar" icon={faBolt} />
                   <h2>Tips</h2>
                    </div>
                 </div>
               </div>
               <div>
                  <div className="user">
                    <div className="flex">
                        <img className='profile-img' src="https://images.pexels.com/photos/20517291/pexels-photo-20517291/free-photo-of-a-man-in-apron-holding-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <h1 className='name'>Seedorf Rai</h1>
                    </div>
                  </div>
               </div>
           </div>
            <div className="content">
                <HomeContent></HomeContent>
            </div>

        </div>
      </>
    )
}