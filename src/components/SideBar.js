import '../css/sidebar.css';
import HomeContent from './HomeContent';

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
                   <h2>Home</h2>
                 </div>
                 <div className="nav-item">
                   <h2>Home</h2>
                 </div>
                 <div className="nav-item">
                   <h2>Home</h2>
                 </div>
                 <div className="nav-item">
                   <h2>Home</h2>
                 </div>
                 <div className="nav-item">
                   <h2>Home</h2>
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