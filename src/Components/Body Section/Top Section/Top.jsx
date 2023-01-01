import React from 'react'
import './top.css'


//  Imported Icons =========>
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';

//  Imported Image =========>
import img from '../../../Assets/model1.jpg'
import video from '../../../Assets/Beauty.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Face-T App</h1>
          <p>Hello, Welcome back to our Website!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon1'/>
          <MdOutlineNotificationsNone className='icon2'/>
          
          <div className="adminImage">
            <img src={ img } alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        
        <div className="rightCard flex">
          <h1>Create and Sell Extraordinary Products</h1>
          <p>The World's Fast Growing Industry Today are Natural Made Products!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default Top