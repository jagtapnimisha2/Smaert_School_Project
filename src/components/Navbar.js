import React, { useState } from "react";
import "./navbar.css";
import logo from './images/m.png';
import logo2 from './images/c.png';
import logo3 from './images/b.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { PiBellRingingLight } from "react-icons/pi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import {FcDocument} from "react-icons/fc";

import { BiSolidCalendar } from "react-icons/bi";




import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo1">
            <img src={logo} alt="" width={28} height={28}/>
            <img src={logo2} alt="" width={28} height={28}/>
            <img src={logo3} alt="" width={28} height={28}/><br />
            <p className="my_class">MY CLASSBOARD</p>
        </div>
        
        <div className="logo">
          <h2>
            <span>E</span>thiken &nbsp;
            <span>E</span>ducational &nbsp;
            <span>S</span>ocienty
          </h2>
       
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
          <button className="under-implemt">Under Implementtation Track Progress</button>
          <button className="get">Get Help <IoMdArrowDropdown/></button>
          <p className="para">AY:2023-2024</p>
          <li>
             <SiHomeassistantcommunitystore className="facebook1"/>
            </li>
          <li>
                <PiBellRingingLight className="facebook" />
            </li>
            <li>
                <BiSearch className="facebook" />
            </li>
            <li>
                <AiFillAppstore className="instagram" />
            </li>
            <li>
             
                <CgProfile className="youtube" />
            
            </li>
          </ul>

          
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div><br />
        
        
        <div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
           
              <NavLink to="/">SIS</NavLink>
            </li>
            <li>
              <NavLink to="/hr">HR</NavLink>
            </li>
            <li>
              <NavLink to="/finance">Finance</NavLink>
            </li>
            <li>
              <NavLink to="/Grade_Book">Grade_Book</NavLink>
            </li>
            <li>
              <NavLink to="/Admissions">Admissions</NavLink>
            </li>
            <li>
              <NavLink to="/Transport">Transport</NavLink>
            </li>
            <li>
              <NavLink to="/Communication">Communication</NavLink>
            </li>
            <li>
              <NavLink to="/Concerns">Concerns</NavLink>
            </li>
          </ul>
        </div>
        </div> 
      </nav>
      {/* body */}
          <div className="main-body">
           <div> <button>DashBoard </button></div>
           <div> <button>Students M-o-M</button></div>
          <div><button>Room Allocations</button></div>
            <div><button>Email Notifications</button></div>
            <div><button>Email</button></div>
            <div className="btn1"><button className="btn">Classes in progress</button></div>
          </div>
     {/* nextpart */}
     <div className="next">
     <div className="next_part">
  
            <div><button className="Ethiken-btn">Ethiken Educational Society  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <IoMdArrowDropdown/>         </button></div>
          <div> <button className="date-btn"><div className="iconss"><BiSolidCalendar /></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05 Oct 2023</button></div>
          <p className="paragrap"><span className="s">DAY:</span>Thursday</p>
        <br />
       
     </div>
     <div className="next-part2">
            <div className="ic">
            <div className="ico">
            <FcDocument/>
            </div>
            <div className="parra"><p>No of staff Absent / Leave for the select date:<span className="zero1">0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No of classes / periods for adjustment:<span className="zero2">0</span>  <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work load</a></p></div>
            </div>
         </div>
          {/* short-box */}
     <div className="short-box">
        <div className="sections">
            <div>S.No</div>
            <div>class</div>
            <div>Section</div>
        </div>

     </div>
             {/* <br /> */}
             <div className="section-body"><p>- -No Time Table Found- -</p></div>
     </div>
<div className="last"></div>
    
    </>
  );
};

export default Navbar;
