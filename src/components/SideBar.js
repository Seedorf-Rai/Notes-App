import '../css/sidebar.css';
import HomeContent from './HomeContent';
import { FontAwesomeIcon   } from '@fortawesome/react-fontawesome'
import { faHouse , faBolt } from '@fortawesome/free-solid-svg-icons'
import { faBell , faNoteSticky ,faCircleCheck   } from '@fortawesome/free-regular-svg-icons'

export default function Sidebar(){
    return(
      <>
        <div className="main-box">
           <div className="aside-box">
               <div className="nav">
                 <div className="nav-item">
                    <input type="text" placeholder='Search' />
                 </div>
                 <div className="nav-item">
                 <FontAwesomeIcon icon={faHouse} />
                   <h2>Home</h2>
                 </div>
                 <div className="nav-item">
                 <FontAwesomeIcon icon={faBell} />
                   <h2>Notification</h2>
                 </div>
                 <div className="nav-item">
                 <FontAwesomeIcon icon={faNoteSticky} />
                   <h2>Notes</h2>
                 </div>
                 <div className="nav-item">
                 <FontAwesomeIcon icon={faCircleCheck} />
                   <h2>Tasks</h2>
                 </div>
                 <div className="nav-item">
                 <FontAwesomeIcon icon={faBolt} />
                   <h2>Tips</h2>
                 </div>
               </div>
               <div>
                  <div className="user">
                    <div className="flex">
                        <img width={50} height={50} src="https://assets.materialup.com/uploads/88067173-c945-4743-9476-11788fd27230/preview.png" alt="" />
                       <h3>User Name</h3>
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