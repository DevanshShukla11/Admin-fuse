import React from 'react'
import Data from './slideBar.json';
import '../slidebar.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
     <div className="slidebar-main">
      
         
        <div className="slidebar-data">
        {
          Data.map(props => {
            return (
              <>
              <div key={props.id} >

             
              <Link>{props.nameDash}</Link>
              <Link to ="/">{props.nameAnayltics}</Link>
              <Link to ="/">{props.nameAnayltics}</Link>
              <Link to ="/">{props.namePages}</Link>
              <Link to ="/">{props.nameUser}</Link>
              <Link to ="/">{props.nameEcom}</Link>
              <Link to ="/">{props.nameAuth}</Link>
              <Link to ="/">{props.nameLogin}</Link>
              <Link to ="/">{props.nameSignup}</Link>
              <Link to ="/">{props.nameLogout}</Link>
    
              
              {/* <ul>
              <li>{props.path}</li>
              <li>{props['ChildDash-two']}</li>
              </ul>
              <h3>{props.MainCalendar}</h3>
              <h3>{props.MainEcommerce}</h3>
              <ul>
                <li>{props['ChildEcom-one']}</li>
                <li>{props['ChildEcom-two']}</li>
                <li>{props['ChildEcom-three']}</li>
                <li>{props['ChildEcom-four']}</li>
                <li>{props['ChildEcom-five']}</li>
              </ul>
              <h3>{props.MainAcademy}</h3>
              <h3>{props.MainMail}</h3>
              <h3>{props.MainTodo}</h3>
              <h3>{props.MainFileManager}</h3>
              <h3>{props.MainChat}</h3>
              <h3>{props.MainBoard}</h3>
              <h3>{props.MainAuth}</h3>
              <ul>
              <li>{props['ChildAuth-One']}</li>
              <li>{props['ChildAuth-two']}</li>
              </ul> */}
              {/* <h3>{props.MainLogout}</h3> */}

  
              </div>
              </>
            )
          })
        }
        </div>
     </div>

     <div className="right-container">
       <h1></h1>
     </div>

     <div className="right-main-container">
       <h1></h1>
     </div>
      </>
    )
}

export default Home
